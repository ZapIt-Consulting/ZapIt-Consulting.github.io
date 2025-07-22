import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Bot, 
  BarChart3, 
  Workflow, 
  Brain, 
  Shield, 
  Zap,
  Target,
  Users,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import implementationProcessEnhanced from "@/assets/implementation-process-enhanced.png";

const services = [
  {
    icon: Bot,
    title: "Workflow Audit & Automation Solutions", 
    headline: "Stop the chaos. Start automating.",
    description: "We start every engagement with a comprehensive audit of your team's workflows. From content creation to client management to back-office ops — we map, analyze, and find automation opportunities.",
    features: [
      "Process Mapping",
      "Automation Options (Google Apps Script, Zapier, Make, RPA, APIs)",
      "SaaS Tool Integration", 
      "Approval Flow Streamlining",
      "Data Sync & Reporting Automation"
    ],
    keywords: "AI Workflow Automation India, Dubai, USA, Canada, Google Workspace Automation, SaaS Automation Services"
  },
  {
    icon: Users,
    title: "Prompt Engineering Coaching",
    headline: "Turn AI into your team's assistant.",
    description: "Your team learns how to write powerful prompts for AI tools like ChatGPT, Claude, Midjourney, and Gemini.",
    features: [
      "Live coaching sessions",
      "Custom prompt libraries", 
      "Use-case based training for content, research, marketing, design, client comms"
    ],
    keywords: "Prompt Engineering Training India, AI Training Dubai, ChatGPT Business Coaching, AI Content Training"
  },
  {
    icon: BarChart3,
    title: "Lean Six Sigma Consulting",
    headline: "Continuous improvement powered by data.",
    description: "We apply proven Lean Six Sigma frameworks to streamline your team's workflows:",
    features: [
      "DMAIC Methodology",
      "Process Bottleneck Analysis",
      "Task Optimization",
      "Measurement Frameworks", 
      "Data-backed Recommendations"
    ],
    keywords: "Lean Six Sigma India, Process Improvement Consulting Dubai, DMAIC Automation USA"
  },
  {
    icon: Shield,
    title: "Retainer Support",
    headline: "Long-term support. Constant optimization.",
    description: "As your business grows, we continue to refine and optimize your automations and workflows:",
    features: [
      "Monthly monitoring",
      "New AI tool integration",
      "Ongoing coaching",
      "Quarterly process tune-ups"
    ],
    keywords: "AI Retainer Services India, Ongoing Automation Dubai, Monthly AI Support USA"
  },
  {
    icon: Target,
    title: "Video & Imaging AI Advisory",
    headline: "Advice on how to leverage AI for creative workflows.",
    description: "We guide your video & graphics teams on available AI-powered tools for:",
    features: [
      "AI Video Editing",
      "AI Image Generation", 
      "AI-Based Tagging & Archiving",
      "Midjourney, Runway, Descript, Adobe Firefly"
    ],
    keywords: "AI Video Editing India, Creative AI Consulting Dubai"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your current processes and identify optimization opportunities."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create a customized AI implementation roadmap aligned with your business goals."
  },
  {
    step: "03",
    title: "Solution Design",
    description: "Design and architect AI solutions tailored to your specific requirements."
  },
  {
    step: "04",
    title: "Implementation",
    description: "Deploy and integrate AI solutions with minimal disruption to your operations."
  },
  {
    step: "05",
    title: "Training & Support",
    description: "Provide comprehensive training and ongoing support to ensure successful adoption."
  },
  {
    step: "06",
    title: "Optimization",
    description: "Continuously monitor and optimize performance to maximize ROI."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              See How We Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              From workflow audits to ongoing support, we provide comprehensive AI automation services that transform 
              how your team works and scales.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive AI solutions designed to address your unique business challenges.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="h-full shadow-lg">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-accent mb-4" />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-accent">
                        {service.headline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`flex items-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-6xl opacity-20">{String(index + 1).padStart(2, '0')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Implementation Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A proven methodology that ensures successful AI adoption and maximum ROI.
            </p>
          </div>
          
          {/* Process Graphic */}
          <div className="mx-auto mb-16 max-w-5xl">
            <img 
              src={implementationProcessEnhanced} 
              alt="6-step AI implementation process" 
              className="w-full h-auto rounded-lg shadow-lg bg-transparent"
              style={{ maxHeight: "90vh" }}
            />
          </div>
          
          {/* Process Steps Detail */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-foreground font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss how our AI solutions can transform your business operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="ghost" size="sm" className="text-lg px-8 py-3">
                <Link to="/contact">
              Schedule a Free Workflow Audit
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
            <Link to="/about">Learn About Us</Link>
          </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}