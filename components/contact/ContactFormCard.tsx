"use client";

import React, { useState } from "react";
import { Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";

export const ContactFormCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill out your name, email, and message.");
      return;
    }

    setIsSending(true);

    // Simulate network request
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      toast.success("Your message has been sent to our client support team!");
    }, 900);
  };

  const handleReset = () => {
    setIsSent(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "General Inquiry",
      subject: "",
      message: "",
    });
  };

  return (
    <Card className="border-border/80 bg-card/75 dark:bg-card/40 backdrop-blur-xl shadow-2xl overflow-hidden rounded-3xl">
      <CardHeader className="space-y-3 pb-6 border-b border-border/60">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-muted text-brand border border-brand/30 text-xs font-bold uppercase tracking-wider self-start">
          <MessageSquare className="w-3.5 h-3.5 text-brand" />
          <span>Send a Message</span>
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-extrabold text-foreground font-display tracking-tight">
          General Inquiries & Feedback
        </CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Fill out the form below and our operations coordinator will respond promptly.
        </p>
      </CardHeader>

      <CardContent className="pt-6">
        <AnimatePresence mode="wait">
          {!isSent ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field className="space-y-1.5">
                  <FieldLabel htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Full Name *
                  </FieldLabel>
                  <Input
                    id="contact-name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-11 rounded-xl bg-secondary/50 border-border/80 focus-visible:border-brand focus-visible:ring-brand/20 text-foreground"
                  />
                </Field>
                <Field className="space-y-1.5">
                  <FieldLabel htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address *
                  </FieldLabel>
                  <Input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-11 rounded-xl bg-secondary/50 border-border/80 focus-visible:border-brand focus-visible:ring-brand/20 text-foreground"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field className="space-y-1.5">
                  <FieldLabel htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Phone Number
                  </FieldLabel>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-11 rounded-xl bg-secondary/50 border-border/80 focus-visible:border-brand focus-visible:ring-brand/20 text-foreground"
                  />
                </Field>
                <Field className="space-y-1.5">
                  <FieldLabel htmlFor="contact-cat" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Topic / Category
                  </FieldLabel>
                  <select
                    id="contact-cat"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="flex h-11 w-full rounded-xl border border-border/80 bg-secondary/50 px-3.5 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/20 focus-visible:border-brand transition-colors cursor-pointer"
                  >
                    <option value="General Inquiry" className="bg-background text-foreground">
                      General Service Inquiry
                    </option>
                    <option value="Commercial Contract" className="bg-background text-foreground">
                      Commercial Contract SLA
                    </option>
                    <option value="Billing & Accounting" className="bg-background text-foreground">
                      Billing & Accounting
                    </option>
                    <option value="Recruitment & HR" className="bg-background text-foreground">Recruitment & HR</option>
                    <option value="Emergency Cleanup" className="bg-background text-foreground">
                      Emergency Cleanup Request
                    </option>
                  </select>
                </Field>
              </div>

              <Field className="space-y-1.5">
                <FieldLabel htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Subject
                </FieldLabel>
                <Input
                  id="contact-subject"
                  placeholder="Brief summary of your inquiry..."
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="h-11 rounded-xl bg-secondary/50 border-border/80 focus-visible:border-brand focus-visible:ring-brand/20 text-foreground"
                />
              </Field>

              <Field className="space-y-1.5">
                <FieldLabel htmlFor="contact-msg" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message *
                </FieldLabel>
                <Textarea
                  id="contact-msg"
                  required
                  rows={4}
                  placeholder="How can our team assist you today?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-2xl bg-secondary/50 border-border/80 focus-visible:border-brand focus-visible:ring-brand/20 text-foreground resize-none p-3.5"
                />
              </Field>

              <div className="pt-2 flex justify-end">
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto h-11 px-8 font-bold gap-2 rounded-xl bg-brand text-brand-foreground hover:bg-brand/90 shadow-md shadow-brand/20 cursor-pointer"
                >
                  {isSending ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="py-10 text-center space-y-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
                className="w-16 h-16 rounded-2xl bg-brand-muted text-brand border border-brand/30 mx-auto flex items-center justify-center shadow-md"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>

              <h3 className="text-2xl font-extrabold font-display text-foreground tracking-tight">
                Message Dispatched!
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Thank you,{" "}
                <span className="font-semibold text-foreground">{formData.name}</span>. A
                representative from our team will reply to{" "}
                <span className="font-semibold text-foreground">{formData.email}</span> shortly.
              </p>

              <div className="pt-3">
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  className="rounded-xl border-border/80 bg-secondary/40 hover:bg-secondary text-foreground font-semibold px-6 h-11 cursor-pointer"
                >
                  Send Another Query
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};