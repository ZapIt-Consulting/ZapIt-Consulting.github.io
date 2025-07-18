import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Award, Globe, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "AI Specialists", value: "50+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Industries Served", value: "25+" },
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
              Pioneering AI Solutions for{" "}
              <span className="text-accent">Business Excellence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              For over a decade, we've been at the forefront of AI innovation, helping organizations 
              transform their operations and achieve unprecedented efficiency gains.
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
                Our Mission
              </h2>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                To democratize artificial intelligence and make advanced AI solutions accessible to 
                organizations of all sizes, enabling them to compete and thrive in the digital economy.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
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
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Industry experts with deep experience in AI, technology, and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="shadow-lg">
                <CardContent className="p-6">
                  <img
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A decade of innovation, growth, and successful AI transformations.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-card rounded-lg p-6 shadow-lg">
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                </div>
              ))}
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