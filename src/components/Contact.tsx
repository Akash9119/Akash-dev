import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, X, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 95862 93916",
    href: "tel:+919586293916",
  },
  {
    icon: Mail,
    label: "Email",
    value: "akashj.vasava@gmail.com",
    href: "mailto:akashj.vasava@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/akash-vasava/",
    href: "https://www.linkedin.com/in/akash-vasava/",
  },
  {
    icon: X,
    label: "X",
    value: "@AkashjVasava",
    href: "https://x.com/AkashjVasava",
  },
];

const projectTypes = ["WordPress Site", "React App", "Full-Stack App", "Landing Page", "Other"];
const budgetRanges = ["< ₹10,000", "₹10,000 – ₹30,000", "₹30,000 – ₹60,000", "₹60,000+"];

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${form.projectType || "Website"} — from ${form.name}`
    );
    const body = encodeURIComponent(
      `Hi Akash,\n\nI found you through your portfolio and I'm interested in working with you.\n\nName: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\nBudget: ${form.budget}\n\nMessage:\n${form.message}\n\nLooking forward to hearing from you.`
    );
    window.location.href = `mailto:akashj.vasava@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[hsl(var(--section-bg-2))]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how I can help.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full overflow-hidden relative group">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at center, hsl(var(--primary) / 0.1), transparent 70%)",
                    }}
                  />
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-2xl gradient-primary"
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {item.label}
                      </p>
                      <motion.a
                        href={item.href}
                        className="text-foreground font-medium block break-all relative"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="relative z-10">{item.value}</span>
                        <motion.div
                          className="absolute inset-0 bg-primary/10 rounded -z-0"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="text-sm font-medium text-muted-foreground">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={form.projectType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a type…</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-sm font-medium text-muted-foreground">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a range…</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Your email client should open now. I'll get back to you within 24 hours!
                  </motion.div>
                )}

                <Button type="submit" size="lg" className="w-full gradient-primary text-white group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
