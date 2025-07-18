import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Award, Globe, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  { label: "Global Locations", value: "4" },
  { label: "Hours Saved for Clients", value: "10,000+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Client Satisfaction", value: "98%" },
];

const locations = [
  {
    flag: "🇮🇳",
    country: "India",
    cities: "Mumbai, Bangalore, Hyderabad"
  },
  {
    flag: "🇦🇪", 
    country: "Dubai / UAE",
    cities: "Dubai"
  },
  {
    flag: "🇺🇸",
    country: "USA", 
    cities: "New York, California"
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    cities: "Toronto"
  }
];

const values = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "We put our clients' success at the center of everything we do, delivering solutions that truly make a difference."
  },
  {
    icon: Award,
    title: "Excellence in Innovation",
    description: "Our team stays at the forefront of AI technology, ensuring you get the most advanced solutions available."
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description: "We design AI systems that grow with your business, from startup to enterprise scale."
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Every solution we implement is designed to deliver quantifiable results and ROI."
  }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Former AI Research Director at Google with 15 years of experience in machine learning and business transformation.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "AI architect and former Microsoft Principal Engineer with expertise in large-scale AI system deployment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Strategy",
    bio: "Former McKinsey Partner specializing in AI strategy and digital transformation across Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "James Park",
    role: "Director of Engineering",
    bio: "Former Tesla senior engineer with deep expertise in automation systems and industrial AI applications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started as a research lab focused on practical AI applications for business."
  },
  {
    year: "2016",
    title: "First Enterprise Client",
    description: "Delivered our first major AI transformation project for a Fortune 500 manufacturer."
  },
  {
    year: "2018",
    title: "Industry Expansion",
    description: "Expanded services across healthcare, finance, and retail sectors."
  },
  {
    year: "2020",
    title: "Global Presence",
    description: "Established offices in major markets and launched remote delivery capabilities."
  },
  {
    year: "2022",
    title: "500+ Projects",
    description: "Reached milestone of 500 successful AI implementations across 25 industries."
  },
  {
    year: "2024",
    title: "Innovation Lab",
    description: "Launched dedicated R&D lab for next-generation AI solutions."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              The ZapIt Story
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Born from firsthand experience in solving complex operations problems for companies across continents. 
              Our team blends technical, business, and Lean expertise to help growing businesses simplify operations and empower people.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
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

      {/* Mission Section */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Local Teams
              </h2>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Global presence with local expertise to serve you in your time zone and understand your regional business needs.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {locations.map((location) => (
                <div key={location.country} className="flex items-center p-6 bg-card rounded-lg shadow-lg">
                  <div className="text-4xl mr-4">{location.flag}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{location.country}</h3>
                    <p className="mt-1 text-muted-foreground">{location.cities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We blend technical expertise with business acumen to deliver practical AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex">
                <div className="flex-shrink-0">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
              The ZapIt Founding Story
            </h2>
            <div className="text-lg leading-8 text-muted-foreground space-y-6">
              <p>
                Born from firsthand experience in solving complex operations problems for companies across continents. 
                Our founders witnessed the same challenges repeatedly: teams drowning in manual processes, inefficient workflows, 
                and missed opportunities for automation.
              </p>
              <p>
                After successfully implementing AI and automation solutions for Fortune 500 companies and growing startups alike, 
                we realized there was a gap in the market for practical, regional-focused AI consulting that truly understood 
                local business contexts.
              </p>
              <p>
                Our team blends technical, business, and Lean expertise to help growing businesses simplify operations and 
                empower people. We don't just implement technology - we transform how teams work, think, and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Work With Us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join hundreds of companies that have transformed their operations with our AI expertise.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}