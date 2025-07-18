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

const services = [
  {
    icon: Bot,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows using intelligent AI agents and robotic process automation.",
    features: [
      "Document processing automation",
      "Workflow orchestration",
      "Task scheduling and prioritization",
      "Custom bot development"
    ]
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable insights with advanced analytics and machine learning.",
    features: [
      "Predictive analytics",
      "Real-time dashboards",
      "Performance monitoring",
      "Business intelligence reports"
    ]
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Identify and eliminate inefficiencies in your current processes to maximize productivity.",
    features: [
      "Process mapping and analysis",
      "Bottleneck identification",
      "Resource allocation optimization",
      "Performance benchmarking"
    ]
  },
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Develop comprehensive AI adoption strategies tailored to your business objectives.",
    features: [
      "AI readiness assessment",
      "Technology roadmap planning",
      "ROI analysis and projections",
      "Change management support"
    ]
  },
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    description: "Ensure your AI implementations meet regulatory requirements and minimize operational risk.",
    features: [
      "Regulatory compliance audits",
      "Risk assessment frameworks",
      "Data governance policies",
      "Security implementation"
    ]
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Seamlessly integrate AI solutions with your existing technology infrastructure.",
    features: [
      "API development and integration",
      "Legacy system modernization",
      "Cloud migration services",
      "Third-party platform connections"
    ]
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
              Comprehensive AI Solutions for{" "}
              <span className="text-accent">Every Business Need</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              From strategy to implementation, we provide end-to-end AI services that transform 
              how your organization operates and competes.
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
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="h-full shadow-lg hover:shadow-xl smooth-transition">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Implementation Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A proven methodology that ensures successful AI adoption and maximum ROI.
            </p>
          </div>
          
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
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/industries">View Industries</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}