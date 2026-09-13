import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Calendar } from 'lucide-react';
import SectionHeading from '@/components/retro/SectionHeading';
import Window from '@/components/retro/Window';

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
    'w-full bg-white border-2 border-black px-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:shadow-hard';

  const socials = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/adeen-atif' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adeen-atif/'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/theadeenatif/'
    }
  ];

  return (
    <section id="find-me" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20">
        <SectionHeading size="lg">Let&apos;s talk</SectionHeading>

        <p className="-mt-4 mb-8 text-base max-w-xl text-neutral-700">
          The quickest way to reach me is the form. It lands straight in my
          inbox.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8">
          {/* Form */}
          <Window filename="new-message.txt" shadow="md">
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className={field}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className={field}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                className={`${field} min-h-32 resize-y`}
                required
              />
              <button type="submit" className="btn-retro btn-solid w-full justify-center">
                Send message
              </button>
            </form>
          </Window>
          {/* Details */}
          <Window filename="contact-card.vcf" shadow="md">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" strokeWidth={2.5} />
                <div>
                  <h3 className="chrome">LOCATION</h3>
                  <p className="mt-1 font-semibold text-sm">Karachi, Pakistan</p>
                  <p className="font-semibold text-sm">Riyadh, Saudi Arabia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" strokeWidth={2.5} />
                <div className="min-w-0">
                  <h3 className="chrome">EMAIL</h3>
                  <a
                    href="mailto:adynatif@gmail.com"
                    className="mt-1 block font-semibold text-sm link-ul break-all"
                  >
                    adynatif@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="https://cal.com/adeen-atif-pcnb4e/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-retro text-sm"
              >
                <Calendar className="w-4 h-4" strokeWidth={2.5} />
                Online coffee chat? Book a slot
              </a>

              <div className="flex flex-wrap gap-3 pt-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 border-2 border-black bg-white hard grid place-items-center hover:bg-black hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" strokeWidth={2.25} />
                  </a>
                ))}
              </div>
            </div>
          </Window>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
