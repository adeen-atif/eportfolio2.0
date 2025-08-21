import React from 'react';
import { Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NFC = () => {
  const { toast } = useToast();

  const handleSaveContact = () => {
    const link = document.createElement('a');
    link.href = '/NFC/contact.vcf';
    link.download = 'Adeen-Atif.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Contact saved!",
      description: "Check your downloads for Adeen-Atif.vcf",
    });
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 px-4">
      {/* SEO Meta Tags */}
      <title>Adeen Atif — NFC Contact</title>
      <meta name="description" content="Quickly save Adeen's contact and connect on LinkedIn, WhatsApp, and web." />
      <meta property="og:title" content="Adeen Atif — NFC Contact" />
      <meta property="og:description" content="Quickly save Adeen's contact and connect on LinkedIn, WhatsApp, and web." />
      <meta name="twitter:title" content="Adeen Atif — NFC Contact" />
      <meta name="twitter:description" content="Quickly save Adeen's contact and connect on LinkedIn, WhatsApp, and web." />
      
      <div className="container mx-auto max-w-md">
        <div className="bg-white border-2 border-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.3)] p-6 md:p-8 text-center">
          {/* Profile Photo */}
          <div className="mb-6">
            <img 
              src="/lovable-uploads/56516795-45b4-42d5-bd70-cd85a5054fd6.png" 
              alt="Adeen Atif Profile Photo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-2 border-black object-cover"
            />
          </div>

          {/* Name & Tagline */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-black mb-2">Adeen Atif</h1>
            <p className="text-base md:text-lg text-gray-700 font-bold">AI Engineer | Co-Founder, Arcanum</p>
          </div>

          {/* Save Contact Button */}
          <div className="mb-8">
            <Button 
              onClick={handleSaveContact}
              className="w-full bg-black text-white hover:bg-gray-800 font-bold text-sm md:text-base px-6 py-3 border-2 border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              aria-label="Save Adeen Atif's contact information"
            >
              <Download className="h-4 w-4 md:h-5 md:w-5" />
              Save Contact
            </Button>
          </div>

          {/* Social Icons */}
          <div className="mb-6">
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                className="border-2 border-black hover:bg-black hover:text-white p-3"
                onClick={() => handleSocialClick('https://adeenatif.com')}
                aria-label="Visit Adeen's website"
              >
                <Globe className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-black hover:bg-black hover:text-white p-3"
                onClick={() => handleSocialClick('https://www.linkedin.com/in/adeenatif')}
                aria-label="Connect on LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-black hover:bg-black hover:text-white p-3"
                onClick={() => handleSocialClick('https://wa.me/966541844255?text=Hi%20Adeen%2C%20great%20to%20meet%20you!')}
                aria-label="Message on WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NFC;