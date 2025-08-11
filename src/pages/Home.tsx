import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Zap, Target, TrendingUp, Users, Shield } from "lucide-react";
const features = [{
  icon: Bot,
  title: "AI + Automation Tailored",
  description: "AI & Automation tailored for your region & industry"
}, {
  icon: TrendingUp,
  title: "Boost Productivity",
  description: "Boost productivity by 25-40%"
}, {
  icon: Zap,
  title: "Eliminate Repetitive Tasks",
  description: "Eliminate repetitive tasks and free your team"
}, {
  icon: Users,
  title: "Prompt Engineering Training",
  description: "Train your team on writing high impact prompts"
}, {
  icon: Target,
  title: "Lean Six Sigma",
  description: "Lean Six Sigma process design"
}, {
  icon: Shield,
  title: "Local Teams",
  description: "Local teams supporting India, Dubai, USA, Canada"
}];
const services = [{
  icon: Bot,
  title: "Workflow Audit & Recommendations",
  link: "/services"
}, {
  icon: Zap,
  title: "Automation Solution Implementation",
  link: "/services"
}, {
  icon: Users,
  title: "Prompt Engineering Coaching",
  link: "/services"
}, {
  icon: TrendingUp,
  title: "Lean Six Sigma Process Improvement",
  link: "/services"
}, {
  icon: Shield,
  title: "Ongoing Support & Retainers",
  link: "/services"
}, {
  icon: Target,
  title: "Video & Imaging AI Advisory",
  link: "/services"
}];
const industries = ["Higher Education (India, Dubai)", "Content & Marketing Agencies", "Sales & Lead Gen Teams", "Engineering & Operations", "HR, Legal, Finance & Compliance", "Leadership & Management Teams", "Mid-market Enterprises", "Family Offices & Portfolio Companies (Dubai)"];
const differentiators = ["AI solutions built on tools your team already uses (Google Workspace, Microsoft, SaaS platforms)", "Cost-effective options (Google Apps Script, Zapier, Open Source Automation)", "Fast implementation timelines", "Teams trained for self-sufficiency", "Local support teams across time zones"];
const stats = [{
  label: "Productivity Increase",
  value: "25-40%"
}, {
  label: "Hours Saved Per Year",
  value: "300+"
}, {
  label: "Client Satisfaction",
  value: "99%"
}, {
  label: "Implementation Speed",
  value: "60 Days"
}];
const testimonials = [{
  quote: "We saved over 300 hours per year within 60 days of Zapit Labs' implementation.",
  author: "Sarah Johnson",
  company: "Growing Marketing Agency",
  role: "Operations Director"
}, {
  quote: "Our content team now produces 30% more while working fewer hours.",
  author: "Michael Chen",
  company: "Content Creation Studio",
  role: "Creative Director"
}, {
  quote: "We finally have a scalable system for client delivery.",
  author: "Emily Rodriguez",
  company: "Business Consulting Firm",
  role: "Managing Partner"
}];
export default function Home() {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(/lovable-uploads/e66aff1b-b608-47e7-ae06-bf47981a4944.png)'
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground">
              Smarter Systems. One Zap at a Time{" "}
              <span className="text-accent">⚡</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground max-w-2xl mx-auto px-4">
              AI-Powered Automation Consulting. Free Your Team. Reclaim Your Time. Scale Your Business.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3">
                <Link to="/contact">
                  <span className="hidden sm:inline">Schedule a Free Workflow Audit</span>
                  <span className="sm:hidden">Free Workflow Audit</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3">
                <Link to="/services">See How We Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Why Zapit Labs?
            </h2>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-2xl lg:max-w-none">
            <dl className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map(feature => <div key={feature.title} className="flex flex-col text-center sm:text-left">
                  <dt className="flex items-center justify-center sm:justify-start gap-x-3 text-sm sm:text-base font-semibold leading-7 text-foreground">
                    <feature.icon className="h-5 w-5 flex-none text-accent" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-3 sm:mt-4 flex flex-auto flex-col text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>)}
            </dl>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="gradient-bg py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Our Services
            </h2>
            
          </div>
          <div className="mx-auto mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 max-w-2xl lg:max-w-none">
            {services.map(service => <Link key={service.title} to={service.link} className="group">
                <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg hover:bg-background/50 smooth-transition">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent group-hover:text-accent mb-3 sm:mb-4 smooth-transition" />
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent smooth-transition">
                    {service.title}
                  </h3>
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Who We Help
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground">
              We serve growing teams in:
            </p>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
              {industries.map((industry, index) => <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-muted-foreground">{industry}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="gradient-bg py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              The Zapit Labs Difference
            </h2>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {differentiators.map((item, index) => <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 sm:mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center max-w-2xl lg:max-w-none">
            {stats.map(stat => <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-3 sm:gap-y-4">
                <dt className="text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">{stat.label}</dt>
                <dd className="order-first text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-accent">
                  {stat.value}
                </dd>
              </div>)}
          </dl>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Client Wins
            </h2>
          </div>
          <div className="mx-auto mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-2xl lg:max-w-none">
            {testimonials.map((testimonial, index) => <Card key={index} className="shadow-lg">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <blockquote className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-4 sm:mt-6">
                    <div className="text-sm sm:text-base font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground px-4">
              Join hundreds of companies that have already revolutionized their operations with our AI solutions.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center justify-center px-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3">
                <Link to="/contact">
                  <span className="hidden sm:inline">Schedule a Free Consultation</span>
                  <span className="sm:hidden">Free Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}