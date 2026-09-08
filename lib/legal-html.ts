/**
 * Defensive normalisation for published legal documents.
 *
 * The documents are authored in the admin dashboard and stored verbatim — the
 * API does not sanitise them. Two things have reached production this way: a
 * document whose markup was escaped by the editor, so it rendered as visible
 * &lt;h2&gt; text, and documents carrying the class names and lab()/oklab()
 * colours of the page they were copied from.
 *
 * This runs on the server, so it cannot use DOMParser. It does two narrow
 * things rather than pretending to be a general HTML sanitiser: recover content
 * that was escaped, and drop presentation attributes. Styling belongs to this
 * page, which already styles every tag it expects.
 */

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

  return out;
}
