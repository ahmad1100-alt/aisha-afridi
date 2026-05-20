'use client';

import { useState } from 'react';
import { Instagram, Mail, Send, Youtube } from 'lucide-react';
import { instagramUrl, managementContactLabel, youtubeUrl } from '@/lib/aisha-profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Acting / Casting',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus(result.message || 'Management email is not configured yet. Please use Instagram for urgent inquiries.');
        return;
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'Acting / Casting',
        company: '',
        subject: '',
        message: '',
      });
      setStatus('Thank you. Your inquiry has been sent successfully.');
    } catch {
      setStatus('The inquiry could not be sent right now. Please use Instagram for urgent inquiries.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <span className="inline-block text-sm font-sans tracking-widest uppercase text-primary mb-4">04</span>
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="font-sans text-xl text-foreground max-w-3xl">
            Reach out for acting projects, casting, brand campaigns, media collaborations, and portfolio requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <p className="font-sans text-sm text-primary uppercase tracking-widest font-semibold mb-8">
                  Direct Contact
                </p>
                <div className="space-y-6">
                  <div
                    className="flex items-start gap-5 p-6 bg-card border border-primary/15 rounded-lg transition-all duration-300"
                  >
                    <Mail className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-sans font-semibold text-foreground mb-1">Management Contact</p>
                      <p className="font-sans text-base text-foreground">{managementContactLabel}</p>
                    </div>
                  </div>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-5 p-6 bg-card border border-primary/15 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group"
                  >
                    <Instagram className="text-primary w-6 h-6 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-sans font-semibold text-foreground mb-1">Instagram</p>
                      <p className="font-sans text-base text-foreground">@aishaafridi.official</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <p className="font-sans text-sm text-primary uppercase tracking-widest font-semibold mb-6">
                  Follow
                </p>
                <div className="flex gap-4">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 bg-card border border-primary/15 rounded-lg flex items-center justify-center text-primary hover:border-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-lg"
                    title="Instagram"
                    aria-label="Follow Aisha Afridi on Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 bg-card border border-primary/15 rounded-lg flex items-center justify-center text-primary hover:border-primary hover:bg-primary hover:text-background transition-all duration-300 hover:shadow-lg"
                    title="YouTube"
                    aria-label="Open Aisha Afridi on YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className="block font-sans text-sm text-foreground font-semibold mb-3">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-card border border-primary/15 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-all rounded-lg font-sans text-base"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="email" className="block font-sans text-sm text-foreground font-semibold mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-card border border-primary/15 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-all rounded-lg font-sans text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-sans text-sm text-foreground font-semibold mb-3">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-card border border-primary/15 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-all rounded-lg font-sans text-base"
                    placeholder="+92 300 0000000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="inquiryType" className="block font-sans text-sm text-foreground font-semibold mb-3">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-card border border-primary/15 text-foreground focus:outline-none focus:border-primary transition-all rounded-lg font-sans text-base"
                  >
                    <option>Acting / Casting</option>
                    <option>Brand Collaboration</option>
                    <option>Media / Interview</option>
                    <option>Event Appearance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="company" className="block font-sans text-sm text-foreground font-semibold mb-3">
                    Company / Production House
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-card border border-primary/15 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-all rounded-lg font-sans text-base"
                    placeholder="Company, agency, or production house"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-sans text-sm text-foreground font-semibold mb-3">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-card border border-primary/15 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-all rounded-lg font-sans text-base"
                  placeholder="Project or campaign name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-sm text-foreground font-semibold mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-card border border-primary/15 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-all rounded-lg font-sans text-base resize-none"
                  placeholder="Tell us about your project or collaboration..."
                />
              </div>
              {status && (
                <p className="font-sans text-sm text-muted" role="status">
                  {status}
                </p>
              )}
              <button
                type="submit"
                disabled={isSending}
                className="w-full btn-gold text-lg font-semibold py-5 flex items-center justify-center gap-2 hover:gap-3 transition-all"
              >
                <Send size={20} />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
