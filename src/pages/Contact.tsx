import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message",
    contact: "team@zapitlabs.com",
    action: "Send email",
    href: "mailto:team@zapitlabs.com?subject=Workflow Audit Inquiry&body=Hello ZapitLabs team,%0D%0A%0D%0AI'm interested in learning more about your AI automation services and would like to schedule a workflow audit.%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you!"
  }
];

const offices = [
  {
    city: "India",
    address: "Mumbai, Bangalore, Hyderabad",
    region: "Multiple locations"
  },
  {
    city: "Dubai / UAE",
    address: "Business District",
    region: "UAE"
  },
  {
    city: "USA",
    address: "New York, California",
    region: "Multiple locations"
  },
  {
    city: "Canada",
    address: "Toronto",
    region: "ON"
  }
];

const faqs = [
  {
    question: "How long does a typical AI implementation take?",
    answer: "Implementation timelines vary based on project complexity, but most initiatives take 3-6 months from initial assessment to full deployment."
  },
  {
    question: "What's the minimum budget for an AI project?",
    answer: "Project costs depend on scope and complexity. We work with businesses of all sizes, with projects starting from $50,000 to multi-million dollar enterprise transformations."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer comprehensive support packages including monitoring, optimization, training, and technical assistance to ensure long-term success."
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely. Our solutions are designed to integrate seamlessly with existing systems, whether cloud-based, on-premise, or hybrid environments."
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Schedule a Free Workflow Audit
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Ready to discover automation opportunities? Get in touch with our experts for a comprehensive 
              workflow audit and personalized recommendations. Contact us via zapitlabs@gmail.com or zapitlabs.com.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business with AI? Contact our experts today.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="text-center shadow-lg hover:shadow-xl smooth-transition max-w-md w-full">
              <CardHeader>
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">{contactMethods[0].title}</CardTitle>
                <CardDescription>{contactMethods[0].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground mb-4">{contactMethods[0].contact}</p>
                <a 
                  href={contactMethods[0].href} 
                  className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-4 py-2 text-sm font-medium smooth-transition"
                >
                  {contactMethods[0].action} →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                Get Your Free Workflow Audit
              </h2>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Options</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-foreground">Contact Form</h4>
                      <p className="text-muted-foreground">Fill out the form for detailed project discussions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-foreground">Calendly Integration</h4>
                      <p className="text-muted-foreground">Schedule a demo directly through our calendar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-foreground">WhatsApp Chat</h4>
                      <p className="text-muted-foreground">Instant messaging for quick questions (India/UAE)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <p className="ml-4 text-muted-foreground">We'll contact you within 24 hours to schedule a discovery call</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <p className="ml-4 text-muted-foreground">Our experts will assess your current processes and identify opportunities</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <p className="ml-4 text-muted-foreground">We'll present a customized AI strategy and implementation roadmap</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-accent mr-2" />
                    <span className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-accent mr-2" />
                    <span className="text-muted-foreground">Emergency support: 24/7 for enterprise clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Local Teams
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Global presence with local expertise across time zones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {offices.map((office) => (
              <Card key={office.city} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-2" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{office.address}</p>
                    <p className="text-muted-foreground">{office.region}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Get answers to common questions about our AI consulting services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}