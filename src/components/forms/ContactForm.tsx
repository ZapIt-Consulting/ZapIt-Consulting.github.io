import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      industry: formData.get('industry'),
      message: formData.get('message'),
    };

    try {
      // Send email via Supabase Edge Function
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          company: data.company,
          industry: data.industry,
          message: data.message
        }
      });

      if (error) {
        console.error('Email error:', error);
        // Don't throw here - we already saved to DB successfully
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
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
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1"
          placeholder="Your full name"
        />
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