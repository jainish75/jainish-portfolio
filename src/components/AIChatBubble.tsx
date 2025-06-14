
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Loader2 } from "lucide-react";

type ChatMessage = {
  role: "user" | "ai";
  content: string;
};

const initialMsg =
  "👋 Hi! I'm your AI assistant. Ask me anything about Jainish Satani, data analytics, or my projects!";

export default function AIChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "ai", content: initialMsg },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((msgs) => [...msgs, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    // --- Fake AI reply for demo
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { role: "ai", content: "I'm an AI. Your question was: " + text },
      ]);
      setLoading(false);
    }, 1000);
    // --- For real AI: call your API here and set assistant's reply
  };

  return (
    <>
      {/* Floating Bubble Button */}
      <button
        aria-label="Chat with AI Assistant"
        className={`fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 rounded-full bg-primary hover:bg-accent transition-colors p-4 shadow-lg focus:outline-none focus:ring-2 ring-accent animate-fade-in`}
        style={{ boxShadow: "0 4px 24px 0 #2196f385" }}
        onClick={() => setOpen((v) => !v)}
        tabIndex={0}
      >
        <MessageCircle size={28} className="text-white" />
      </button>
      {/* Chat Popup */}
      {open && (
        <div className="fixed z-50 bottom-24 right-4 md:bottom-28 md:right-10 w-[94vw] max-w-sm md:max-w-md bg-white dark:bg-neutral-dark border border-border rounded-xl shadow-xl flex flex-col animate-fade-in"
          style={{ minHeight: "360px", maxHeight: "74vh" }}
        >
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-white rounded-t-xl">
            <span>AI Assistant</span>
            <button
              className="hover:bg-white/10 p-1 rounded"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-background" style={{ minHeight: 220, maxHeight: 320 }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] px-3 py-2 rounded-lg text-sm shadow ${msg.role === "user"
                    ? "bg-primary text-white rounded-br-none"
                    : "bg-neutral-light text-gray-800 dark:text-white rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[82%] px-3 py-2 rounded-lg text-sm bg-neutral-light text-gray-800 dark:text-white rounded-bl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form
            className="flex items-center gap-2 p-3 border-t border-border bg-background"
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              value={input}
              type="text"
              className="flex-1 px-3 py-2 rounded-md border border-border focus:border-accent text-base outline-none"
              placeholder="Ask a data question..."
              onChange={e => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="p-2 rounded bg-primary hover:bg-accent transition text-white disabled:opacity-60"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
