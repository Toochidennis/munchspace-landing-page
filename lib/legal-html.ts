/**
 * Defensive normalisation for published legal documents.
 *
 * The documents are authored in the admin dashboard and stored verbatim — the
 * API does not sanitise them. Three things have reached production this way: a
 * document whose markup was escaped by the editor, so it rendered as visible
 * &lt;h2&gt; text; documents carrying the class names and lab()/oklab()
 * colours of the page they were copied from; and headings the editor reopened
 * around the section that followed them, which this page then rendered bold.
 *
 * This runs on the server, so it cannot use DOMParser. It does three narrow
 * things rather than pretending to be a general HTML sanitiser: recover content
 * that was escaped, drop presentation attributes, and unwrap headings that
 * swallowed a section. Styling belongs to this page, which already styles every
 * tag it expects.
 */

/** Tags that cannot legally sit inside a heading, so finding one means the heading is wrong. */
const BLOCK_TAG = String.raw`p|div|ul|ol|table|thead|tbody|blockquote|pre|hr|h[1-6]`;

function looksLikeMarkup(text: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(text);
}

function decodeEntities(text: string): string {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&"); // last, so &amp;lt; does not become a tag
}

/**
 * The editor closes a heading and immediately reopens it around everything up
 * to the next one, so a whole section ends up inside an <h2>. The tags stay
 * balanced — it is misplacement, not imbalance — and the page's [&_h2]:font-bold
 * then renders the section bold.
 *
 * Any text before the first block element is the real heading and is kept as
 * one; the rest is lifted out. Repeated because unwrapping one heading can
 * expose another nested inside it, and bounded so that markup this cannot
 * resolve degrades to leaving it alone rather than spinning.
 */
function unwrapHeadingsAroundSections(html: string): string {
  const heading = new RegExp(
    String.raw`<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1\s*>`,
    "gi",
  );
  const containsBlock = new RegExp(String.raw`<(?:${BLOCK_TAG})\b`, "i");
  const firstBlock = new RegExp(String.raw`<(?:${BLOCK_TAG})\b`, "i");

  let out = html;

  for (let pass = 0; pass < 5; pass += 1) {
    const before = out;

    out = out.replace(heading, (match, level: string, inner: string) => {
      if (!containsBlock.test(inner)) return match;

      const at = inner.search(firstBlock);
      const lead = inner.slice(0, at).trim();
      const rest = inner.slice(at);

      return (lead ? `<h${level}>${lead}</h${level}>` : "") + rest;
    });

    if (out === before) break;
  }

  return out;
}

export function normalizeLegalHtml(html: string): string {
  if (!html) return "";

  // If removing the tags leaves something that is itself markup, the document
  // was stored escaped and that inner text is the real document.
  const withoutTags = html.replace(/<[^>]*>/g, "");
  const decoded = decodeEntities(withoutTags);
  let out = looksLikeMarkup(decoded) ? decoded : html;

  out = out
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, "")
    // Presentation the document should not be carrying.
    .replace(/\s(?:class|style|id)\s*=\s*"[^"]*"/gi, "")
    .replace(/\s(?:class|style|id)\s*=\s*'[^']*'/gi, "")
    // Inline handlers, which dangerouslySetInnerHTML would otherwise honour.
    .replace(/\son[a-z]+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son[a-z]+\s*=\s*'[^']*'/gi, "");

  // After the attribute strip, so a heading carrying one is still recognised.
  return unwrapHeadingsAroundSections(out);
}
