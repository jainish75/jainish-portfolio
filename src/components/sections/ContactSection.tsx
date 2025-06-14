
import { useState } from "react";
import { Mail, Send } from "lucide-react";

const email = "jainish.satani@email.com";
const linkedin = "https://www.linkedin.com/in/jainishsatani/";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000); // Reset CTA in 3 seconds (demo)
  };

  return (
    <section id="contact" className="py-24 md:py-28 bg-neutral-light">
      <div className="container max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 flex items-center gap-2">
          <Mail className="text-gold" size={32} />
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form
            className="flex-1 bg-white p-8 rounded-xl shadow-card flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <input
              className="px-4 py-3 rounded border border-border focus:border-accent focus:outline-none text-base"
              type="text"
              name="name"
              required
              placeholder="Your Name"
            />
            <input
              className="px-4 py-3 rounded border border-border focus:border-accent focus:outline-none text-base"
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <textarea
              className="px-4 py-3 rounded border border-border focus:border-accent focus:outline-none resize-none text-base"
              name="message"
              rows={4}
              required
              placeholder="Your Message"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-bold hover:bg-accent-dark transition shadow-md disabled:opacity-60"
              disabled={sent}
            >
              {sent ? (
                <>
                  <Send size={20} className="animate-bounce" /> Sent!
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </form>
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-4 justify-center items-center md:items-start">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted">Email:</span>
              <a
                href={`mailto:${email}`}
                className="font-semibold text-primary hover:underline"
              >
                {email}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted">LinkedIn:</span>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent hover:underline"
              >
                linkedin.com/in/jainishsatani
              </a>
            </div>
            <p className="mt-6 max-w-xs text-md text-muted">
              Available for collaborations, contract and full-time roles. <br />
              Let's talk about your next data project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
