import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Calendar } from 'lucide-react';
import TypeHeading from '@/components/system/TypeHeading';
import SocialBubble from '@/components/system/SocialBubble';
import ParallaxNumeral from '@/components/system/ParallaxNumeral';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:adynatif@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    'w-full bg-transparent border border-steel px-4 py-3 font-mono text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-neon';

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden"
    >
      <ParallaxNumeral index="06" side="left" />

      <div className="relative mx-auto max-w-6xl">
        <TypeHeading text="Connect with me" tag="h2" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Coordinates */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-neon shrink-0" />
              <div>
                <h3 className="font-mono text-[11px] tracking-widest uppercase text-white/50">
                  Location
                </h3>
                <p className="mt-1 font-mono text-sm text-white">
                  Karachi, Pakistan
                </p>
                <p className="font-mono text-sm text-white">
                  Riyadh, Saudi Arabia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-1 text-neon shrink-0" />
              <div>
                <h3 className="font-mono text-[11px] tracking-widest uppercase text-white/50">
                  Email
                </h3>
                <a
                  href="mailto:adynatif@gmail.com"
                  className="mt-1 block font-mono text-sm text-white hover:text-neon break-all"
                >
                  adynatif@gmail.com
                </a>
              </div>
            </div>

            <a
              href="https://cal.com/adeen-atif-pcnb4e/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest text-white"
            >
              <Calendar className="w-4 h-4" />
              &lt;Online Coffee Chat? Book a Slot/&gt;
            </a>

            {/* Social constellation */}
            <div className="pt-6 flex flex-wrap items-center gap-5 sm:gap-8">
              <SocialBubble
                label="GitHub"
                href="https://github.com/adeen-atif"
                size="md"
                icon={<Github className="w-5 h-5" strokeWidth={1.25} />}
              />
              <SocialBubble
                label="LinkedIn"
                href="https://www.linkedin.com/in/adeen-atif/"
                size="lg"
                className="sm:-translate-y-5"
                icon={<Linkedin className="w-5 h-5" strokeWidth={1.25} />}
              />
              <SocialBubble
                label="Instagram"
                href="https://www.instagram.com/theadeenatif/"
                size="sm"
                className="sm:translate-y-4"
                icon={<Instagram className="w-5 h-5" strokeWidth={1.25} />}
              />
            </div>
          </div>

          {/* Form */}
          <div className="relative border border-steel/60 p-6 sm:p-8">
            <span className="absolute -top-2 left-6 bg-ink px-2 tag">
              &lt;form&gt;
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={field}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={field}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className={`${field} min-h-32 resize-y`}
                required
              />
              <button
                type="submit"
                className="fill-hover w-full border border-steel px-6 py-3 font-mono text-xs tracking-widest text-white"
              >
                &lt;Send Message/&gt;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
