import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Factory, 
  Heart, 
  CreditCard, 
  ShoppingCart, 
  Cpu, 
  Truck,
  Zap,
  Building,
  ArrowRight
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production lines, reduce waste, and improve quality control with AI-powered solutions.",
    useCases: [
      "Predictive maintenance",
      "Quality assurance automation",
      "Supply chain optimization",
      "Production planning"
    ],
    metrics: {
      efficiency: "35%",
      cost: "25%",
      quality: "40%"
    }
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Enhance patient care, streamline operations, and improve diagnostic accuracy.",
    useCases: [
      "Patient scheduling optimization",
      "Medical image analysis",
      "Drug discovery acceleration",
      "Electronic health records management"
    ],
    metrics: {
      efficiency: "30%",
      cost: "20%",
      accuracy: "45%"
    }
  },
  {
    icon: CreditCard,
    title: "Finance & Banking",
    description: "Automate transactions, detect fraud, and enhance risk management capabilities.",
    useCases: [
      "Fraud detection and prevention",
      "Algorithmic trading",
      "Credit risk assessment",
      "Customer service automation"
    ],
    metrics: {
      fraud: "60%",
      processing: "50%",
      satisfaction: "35%"
    }
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Personalize customer experiences, optimize inventory, and boost sales conversions.",
    useCases: [
      "Personalized recommendations",
      "Inventory management",
      "Price optimization",
      "Customer behavior analysis"
    ],
    metrics: {
      sales: "25%",
      inventory: "30%",
      satisfaction: "40%"
    }
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Accelerate development cycles, improve software quality, and automate testing processes.",
    useCases: [
      "Automated code review",
      "Bug detection and fixing",
      "Performance optimization",
      "DevOps automation"
    ],
    metrics: {
      development: "40%",
      bugs: "55%",
      deployment: "60%"
    }
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Optimize routes, reduce costs, and improve delivery times with intelligent logistics solutions.",
    useCases: [
      "Route optimization",
      "Demand forecasting",
      "Warehouse automation",
      "Fleet management"
    ],
    metrics: {
      delivery: "35%",
      costs: "28%",
      efficiency: "42%"
    }
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Optimize energy distribution, predict maintenance needs, and improve grid reliability.",
    useCases: [
      "Smart grid optimization",
      "Predictive maintenance",
      "Energy consumption forecasting",
      "Renewable energy integration"
    ],
    metrics: {
      efficiency: "30%",
      downtime: "45%",
      costs: "22%"
    }
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Automate property management, optimize pricing, and enhance customer experiences.",
    useCases: [
      "Property valuation automation",
      "Tenant screening",
      "Maintenance scheduling",
      "Market analysis"
    ],
    metrics: {
      valuation: "25%",
      management: "35%",
      satisfaction: "30%"
    }
  }
];

const caseStudies = [
  {
    industry: "Manufacturing",
    company: "Global Auto Parts Inc.",
    challenge: "Frequent equipment breakdowns causing 15% production downtime",
    solution: "Implemented AI-powered predictive maintenance system",
    results: "Reduced downtime by 60% and saved $2.3M annually"
  },
  {
    industry: "Healthcare",
    company: "Regional Medical Center",
    challenge: "Patient scheduling inefficiencies and long wait times",
    solution: "Deployed intelligent scheduling and resource optimization",
    results: "Improved patient satisfaction by 45% and reduced wait times by 50%"
  },
  {
    industry: "Finance",
    company: "Community Bank Network",
    challenge: "Rising fraud losses and manual transaction processing",
    solution: "Integrated AI fraud detection and process automation",
    results: "Prevented $5.2M in fraud losses and accelerated processing by 70%"
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              AI Solutions Tailored to{" "}
              <span className="text-accent">Your Industry</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              We understand that every industry has unique challenges. Our AI solutions are specifically 
              designed to address the needs of your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Proven expertise across diverse sectors with measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.title} className="h-full shadow-lg hover:shadow-xl smooth-transition">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <industry.icon className="h-12 w-12 text-accent" />
                    <div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Use Cases:</h4>
                      <ul className="space-y-1">
                        {industry.useCases.map((useCase, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Typical Results:</h4>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        {Object.entries(industry.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="font-bold text-accent">{value}</div>
                            <div className="text-muted-foreground capitalize">{key} improvement</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Real results from companies that transformed their operations with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="text-sm text-accent font-semibold">{study.industry}</div>
                  <CardTitle className="text-lg">{study.company}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Solution:</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Results:</h4>
                    <p className="text-sm text-accent font-semibold">{study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Don't See Your Industry?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We work with businesses across all sectors. Let's discuss how AI can transform your specific industry.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="ghost" size="sm" className="text-lg px-8 py-3">
                <Link to="/contact">
                  Discuss Your Industry
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}