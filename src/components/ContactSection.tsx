
import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleScheduleMeeting = () => {
    window.open('https://cal.com/adeen-atif-pcnb4e/15min', '_blank');
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:adynatif@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="find-me" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12 text-center">Let's Talk</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
              <div>
                <h3 className="font-black">LOCATION</h3>
                <p className="text-sm md:text-base">Karachi, Pakistan</p>
                <p className="text-sm md:text-base">Riyadh, Saudi Arabia</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
              <div>
                <h3 className="font-black">EMAIL</h3>
                <p className="text-xs md:text-sm">adynatif@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
              <div>
                <h3 className="font-black">PHONE</h3>
                <p className="text-sm md:text-base">(+92) 316 848 9996</p>
                <p className="text-sm md:text-base">(+966) 54 184 4255</p>
              </div>
            </div>

            {/* Schedule Meeting Button - Left Aligned */}
            <div className="pt-4 flex justify-start">
              <Button 
                onClick={handleScheduleMeeting}
                className="bg-black text-white hover:bg-gray-800 font-bold text-sm px-6 py-3 border-2 border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Online Coffee Chat? Book Me
              </Button>
            </div>

            <div className="flex space-x-4 pt-4">
              {[
                { icon: Github, label: "GITHUB", url: "https://github.com/adeen-atif" },
                { icon: Linkedin, label: "LINKEDIN", url: "https://www.linkedin.com/in/adeen-atif/" },
                { icon: Instagram, label: "INSTAGRAM", url: "https://www.instagram.com/theadeenatif/" }
              ].map((social, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  className="border-2 border-black hover:bg-black hover:text-white p-2 md:p-3"
                  onClick={() => handleSocialClick(social.url)}
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-2 border-black p-4 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className="border-2 border-black focus:ring-0 focus:border-black"
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  className="border-2 border-black focus:ring-0 focus:border-black"
                  required
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  className="border-2 border-black focus:ring-0 focus:border-black min-h-24 md:min-h-32"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 font-bold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
