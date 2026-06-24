import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, X, Send, CheckCircle, MapPin, Clock } from "lucide-react";

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
    value: "linkedin.com/in/akash-vasava",
    href: "https://www.linkedin.com/in/akash-vasava/",
  },
  {
    icon: X,
    label: "X (Twitter)",
    value: "@AkashjVasava",
    href: "https://x.com/AkashjVasava",
  },
];

const projectTypes = [
  "WordPress Site",
  "React App",
  "Full-Stack App",
  "Gen AI Integration",
  "Landing Page",
  "Full-time Role Inquiry",
  "Other",
];
const budgetRanges = ["N/A (Job Inquiry)", "< ₹10,000", "₹10,000 – ₹30,000", "₹30,000 – ₹60,000", "₹60,000+"];

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
      `Inquiry: ${form.projectType || "Website"} — from ${form.name}`
    );
    const body = encodeURIComponent(
      `Hi Akash,\n\nI found you through your portfolio and I'm interested in working with you.\n\nName: ${form.name}\nEmail: ${form.email}\nType: ${form.projectType}\nBudget: ${form.budget}\n\nMessage:\n${form.message}\n\nLooking forward to hearing from you.`
    );
    window.location.href = `mailto:akashj.vasava@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-[hsl(var(--section-bg-2))]" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to full-time roles, freelance projects, and collaborations. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">

          {/* Contact info + availability */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <div className="p-2 rounded-lg gradient-primary flex-shrink-0">
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-5 rounded-xl border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-2 text-green-500 font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                Available for Work
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to full-time roles (remote & on-site) and freelance projects. Based in Vadodara, Gujarat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border text-sm text-muted-foreground"
            >
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              Typical response time:&nbsp;<span className="font-medium text-foreground">within 24 hours</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.64 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border text-sm text-muted-foreground"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              Vadodara, Gujarat, India · Open to&nbsp;<span className="font-medium text-foreground">Remote & On-site</span>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select type…</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="text-sm font-medium text-muted-foreground">
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={form.budget}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select range…</option>
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
                      placeholder="Tell me about your project or role…"
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
      </div>
    </section>
  );
}
