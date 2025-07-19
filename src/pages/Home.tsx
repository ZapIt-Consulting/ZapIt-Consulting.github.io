import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Zap, Target, TrendingUp, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI + Automation Tailored",
    description: "AI & Automation tailored for your region & industry",
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description: "Boost productivity by 25-40%",
  },
  {
    icon: Zap,
    title: "Eliminate Repetitive Tasks",
    description: "Eliminate repetitive tasks and free your team",
  },
  {
    icon: Users,
    title: "Prompt Engineering Training",
    description: "Train your team on writing high impact prompts",
  },
  {
    icon: Target,
    title: "Lean Six Sigma",
    description: "Lean Six Sigma process design",
  },
  {
    icon: Shield,
    title: "Local Teams",
    description: "Local teams supporting India, Dubai, USA, Canada",
  },
];

const services = [
  {
    icon: Bot,
    title: "Workflow Audit & Recommendations",
    link: "/services"
  },
  {
    icon: Zap,
    title: "Automation Solution Implementation",
    link: "/services"
  },
  {
    icon: Users,
    title: "Prompt Engineering Coaching",
    link: "/services"
  },
  {
    icon: TrendingUp,
    title: "Lean Six Sigma Process Improvement",
    link: "/services"
  },
  {
    icon: Shield,
    title: "Ongoing Support & Retainers",
    link: "/services"
  },
  {
    icon: Target,
    title: "Video & Imaging AI Advisory",
    link: "/services"
  }
];

const industries = [
  "Higher Education (India, Dubai)",
  "Content & Marketing Agencies", 
  "Sales & Lead Gen Teams",
  "Engineering & Operations",
  "HR, Legal, Finance & Compliance",
  "Leadership & Management Teams",
  "Mid-market Enterprises",
  "Family Offices & Portfolio Companies (Dubai)"
];

const differentiators = [
  "AI solutions built on tools your team already uses (Google Workspace, Microsoft, SaaS platforms)",
  "Cost-effective options (Google Apps Script, Zapier, Open Source Automation)",
  "Fast implementation timelines",
  "Teams trained for self-sufficiency", 
  "Local support teams across time zones"
];

const stats = [
  { label: "Productivity Increase", value: "25-40%" },
  { label: "Hours Saved Per Year", value: "300+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Implementation Speed", value: "60 Days" },
];

const testimonials = [
  {
    quote: "We saved over 300 hours per year within 60 days of ZapIt's implementation.",
    author: "Sarah Johnson",
    company: "Growing Marketing Agency",
    role: "Operations Director",
  },
  {
    quote: "Our content team now produces 30% more while working fewer hours.",
    author: "Michael Chen",
    company: "Content Creation Studio",
    role: "Creative Director",
  },
  {
    quote: "We finally have a scalable system for client delivery.",
    author: "Emily Rodriguez", 
    company: "Business Consulting Firm",
    role: "Managing Partner",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Smarter Systems. One Zap at a Time{" "}
              <span className="text-accent">⚡</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              AI-Powered Automation Consulting. Free Your Team. Reclaim Your Time. Scale Your Business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">
                  Schedule a Free Workflow Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/services">See How We Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why ZapIt?
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <feature.icon className="h-5 w-5 flex-none text-accent" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="gradient-bg py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Use clickable icons linking to dedicated service pages
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} to={service.link} className="group">
                <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-background/50 smooth-transition">
                  <service.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent smooth-transition">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Help
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We serve growing teams in:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  <span className="text-muted-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="gradient-bg py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The ZapIt Difference
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4 mt-2"></div>
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-accent sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Client Wins
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8">
                  <blockquote className="text-lg leading-8 text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-6">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join hundreds of companies that have already revolutionized their operations with our AI solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}