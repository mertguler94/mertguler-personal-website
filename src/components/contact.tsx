import { useState } from "react";
import sendMessage, { MessageType } from "../api/send-message";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const msgObject: MessageType = {
      email,
      name,
      message,
      subject,
    };

    sendMessage(msgObject);

    setEmail("");
    setName("");
    setMessage("");
    setSubject("");
  }

  return (
    <section id="contact" className="py-16 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-margin grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="font-heading text-h2 text-on-surface">Say Hello</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Whether you have a question about something I&apos;ve written, want to share a suggestion, or just want to say hi&mdash;I&apos;d love to hear from you.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <span className="text-base text-on-surface">hello@mertguler.com</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" />
                </svg>
              </div>
              <span className="text-base text-on-surface">Download my Resume</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/mertguler"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mertguler"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/mertguler"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="bg-surface-container-high p-8 rounded-[32px] shadow-2xl shadow-black/20 border border-white/5">
          <form className="space-y-6" onSubmit={handleSendMessage}>
            <div className="space-y-2">
              <label className="text-sm text-on-surface-variant ml-2">Name</label>
              <input
                className="w-full px-6 py-4 bg-surface rounded-2xl border border-white/5 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface placeholder:text-on-surface-variant/40"
                placeholder="How should I call you?"
                type="text"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-on-surface-variant ml-2">Email</label>
              <input
                className="w-full px-6 py-4 bg-surface rounded-2xl border border-white/5 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface placeholder:text-on-surface-variant/40"
                placeholder="Where can I reach you?"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-on-surface-variant ml-2">Message</label>
              <textarea
                className="w-full px-6 py-4 bg-surface rounded-2xl border border-white/5 focus:ring-2 focus:ring-primary/40 focus:border-transparent text-on-surface placeholder:text-on-surface-variant/40 resize-none"
                placeholder="What&apos;s on your mind?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                required
              />
            </div>
            <button
              className="w-full py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all"
              type="submit"
            >
              Send Note
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;