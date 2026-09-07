"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitSupportTicket, type SupportTopic } from "@/lib/api";

const FIELD =
  "w-full h-13 rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-munchorange";

export default function ContactForm({ topics }: { topics: SupportTopic[] }) {
  const [topicKey, setTopicKey] = useState(topics[0]?.key ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  /** Honeypot. Never shown, never filled by a person. */
  const [website, setWebsite] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const selectedTopic = topics.find((topic) => topic.key === topicKey) ?? null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (message.trim().length < 10) {
      setError("Please tell us a little more — at least a sentence.");
      return;
    }

    setIsSending(true);

    const result = await submitSupportTicket({
      topicKey,
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      website,
    });

    setIsSending(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setReference(result.data.code);
  };

  if (reference) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-8 md:p-10 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-munchgreen/10 text-munchgreen">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-5 font-rubik text-2xl font-bold">
          Thanks — we have it.
        </h2>
        <p className="mt-3 text-sm text-gray-600">
          Your reference is{" "}
          <span className="font-semibold text-munchorange">{reference}</span>.
          We have sent nothing yet — our team reads every report and will reply
          to <span className="font-medium text-black">{email}</span>. Quote that
          reference if you write again.
        </p>
        <Button
          onClick={() => {
            setReference(null);
            setSubject("");
            setMessage("");
          }}
          variant="outline"
          className="mt-7 h-11 rounded-full border-black/10 px-6"
        >
          Report something else
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/5 bg-white p-6 md:p-10 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="topic"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            What is this about?
          </label>
          <select
            id="topic"
            value={topicKey}
            onChange={(event) => setTopicKey(event.target.value)}
            required
            className={cn(FIELD, "cursor-pointer appearance-none pr-10")}
          >
            {topics.map((topic) => (
              <option key={topic.key} value={topic.key}>
                {topic.label}
              </option>
            ))}
          </select>
          {selectedTopic?.description && (
            <p className="mt-2 text-xs text-gray-500">
              {selectedTopic.description}
            </p>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Your name
            </label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              minLength={2}
              maxLength={120}
              placeholder="Ada Obi"
              className={FIELD}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="you@example.com"
              className={FIELD}
            />
            <p className="mt-2 text-xs text-gray-500">
              This is where our reply goes, so check it carefully.
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
            minLength={3}
            maxLength={160}
            placeholder="Order never arrived"
            className={FIELD}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            What happened?
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            placeholder="Include your order number if you have one — it is the fastest way for us to find it."
            className={cn(FIELD, "h-auto resize-y py-3 leading-relaxed")}
          />
        </div>

        {/*
          Honeypot. Hidden from sight and from screen readers, and skipped by
          keyboard navigation, so only an automated submission fills it.
        */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Leave this empty</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>

        {error && (
          <p className="rounded-xl bg-munchred/5 px-4 py-3 text-sm text-munchred">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSending}
          className="h-13 w-full rounded-full bg-munchorange px-8 text-base hover:bg-munchprimaryDark md:w-auto"
        >
          {isSending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending
            </>
          ) : (
            "Send report"
          )}
        </Button>
      </div>
    </form>
  );
}
