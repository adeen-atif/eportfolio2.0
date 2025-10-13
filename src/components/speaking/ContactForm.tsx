import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  prefilledTopic: string;
  destinationEmail: string;
}

const ContactForm = ({ prefilledTopic, destinationEmail }: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendCopy, setSendCopy] = useState(false);
  const [consent, setConsent] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    role: "",
    city: "",
    topic: "",
    audienceSize: "",
    targetDate: "",
    budget: "",
    message: "",
  });

  // Update topic when prefilledTopic changes
  useEffect(() => {
    if (prefilledTopic) {
      setFormData((prev) => ({ ...prev, topic: prefilledTopic }));
    }
  }, [prefilledTopic]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted about this request.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct mailto link
      const subject = `Speaking Request: ${formData.topic || "General Inquiry"}`;
      const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Organization: ${formData.organization}
Role: ${formData.role}
City: ${formData.city}
Topic/Format: ${formData.topic}
Audience Size: ${formData.audienceSize}
Target Date: ${formData.targetDate}
Budget Range: ${formData.budget}

Message:
${formData.message}

${sendCopy ? "(Copy sent to requester)" : ""}
      `.trim();

      const mailtoLink = `mailto:${destinationEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.open(mailtoLink, "_blank");

      toast({
        title: "Request Sent",
        description: "Thanks! Your request is in my inbox — I'll get back within 48 hours.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        organization: "",
        role: "",
        city: "",
        topic: "",
        audienceSize: "",
        targetDate: "",
        budget: "",
        message: "",
      });
      setConsent(false);
      setSendCopy(false);
    } catch (error) {
      toast({
        title: "Error",
        description: `Couldn't send just now — try again or email directly at ${destinationEmail}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Invite Me to Speak
          </h2>
          <p className="text-muted-foreground">
            Tell me about your audience and outcomes — I'll tailor the format to fit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role / Capacity</Label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">Topic / Format</Label>
              <Input
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="audienceSize">Audience Size</Label>
              <Select
                value={formData.audienceSize}
                onValueChange={(value) => handleSelectChange("audienceSize", value)}
              >
                <SelectTrigger id="audienceSize">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-30">10–30</SelectItem>
                  <SelectItem value="30-100">30–100</SelectItem>
                  <SelectItem value="100-300">100–300</SelectItem>
                  <SelectItem value="300+">300+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetDate">Target Date or Range</Label>
              <Input
                id="targetDate"
                name="targetDate"
                value={formData.targetDate}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleSelectChange("budget", value)}
              >
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TBD">TBD</SelectItem>
                  <SelectItem value="≤$1k">≤ $1k</SelectItem>
                  <SelectItem value="$1k-$5k">$1k–$5k</SelectItem>
                  <SelectItem value="$5k-$10k">$5k–$10k</SelectItem>
                  <SelectItem value="$10k+">$10k+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message / Brief</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="resize-none"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                required
              />
              <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                You can contact me about this request. <span className="text-destructive">*</span>
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="sendCopy"
                checked={sendCopy}
                onCheckedChange={(checked) => setSendCopy(checked as boolean)}
              />
              <Label htmlFor="sendCopy" className="text-sm font-normal cursor-pointer">
                Send me a copy
              </Label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Request"}
            </Button>
            <p className="text-xs text-muted-foreground">
              No spam. We only use your details to respond to this inquiry.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
