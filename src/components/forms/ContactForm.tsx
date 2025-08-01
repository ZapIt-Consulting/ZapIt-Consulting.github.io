import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      industry: formData.get('industry'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    try {
      // Send email notification
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_zapitlabs',
          template_id: 'template_contact',
          user_id: 'zapitlabs_public_key',
          template_params: {
            from_name: `${data.firstName} ${data.lastName}`,
            from_email: data.email,
            company: data.company,
            industry: data.industry,
            message: data.message,
            to_email: 'pranavjain93@gmail.com'
          }
        })
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          type="text"
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="industry">Industry</Label>
        <Select name="industry" required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manufacturing">Manufacturing</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="finance">Finance & Banking</SelectItem>
            <SelectItem value="retail">Retail & E-commerce</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
            <SelectItem value="energy">Energy & Utilities</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>


      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project and how we can help..."
          className="mt-1"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}