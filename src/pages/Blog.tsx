import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Manufacturing: Trends to Watch in 2024",
    excerpt: "Explore the latest developments in AI-powered manufacturing, from predictive maintenance to autonomous quality control systems.",
    category: "Manufacturing",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Customer Service in Banking",
    excerpt: "Discover how financial institutions are using AI chatbots and automated systems to enhance customer experiences.",
    category: "Finance",
    author: "Michael Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Implementing AI Ethics: A Practical Guide for Business Leaders",
    excerpt: "Learn how to establish ethical AI practices in your organization and ensure responsible AI deployment.",
    category: "Strategy",
    author: "Dr. Emily Watson",
    date: "March 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "ROI Calculation for AI Projects: Best Practices and Tools",
    excerpt: "Master the art of measuring AI project success with proven methodologies for calculating return on investment.",
    category: "Business",
    author: "James Park",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Breaking Down Data Silos: AI Solutions for Enterprise Integration",
    excerpt: "Explore how AI can help organizations integrate disparate data sources and create unified intelligence systems.",
    category: "Technology",
    author: "Dr. Sarah Chen",
    date: "February 22, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Supply Chain Optimization with Machine Learning: A Case Study",
    excerpt: "Real-world example of how a global retailer reduced costs by 30% using AI-powered supply chain optimization.",
    category: "Case Study",
    author: "Michael Rodriguez",
    date: "February 15, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const categories = ["All", "Manufacturing", "Finance", "Strategy", "Business", "Technology", "Case Study"];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              AI Insights & Best Practices
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with expert insights, case studies, and practical guidance 
              on implementing AI solutions in your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Article
              </h2>
            </div>
            
            <Card className="shadow-xl overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl mb-4">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base lg:text-lg">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button className="w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Expert insights and practical guidance from our AI specialists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.id} className="shadow-lg hover:shadow-xl smooth-transition overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Subscribe to our newsletter for the latest AI insights, industry trends, and best practices.
            </p>
            <div className="mt-10 flex max-w-md mx-auto gap-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-md border border-input bg-background px-3.5 py-2 text-foreground shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Implement These Ideas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Turn insights into action. Let's discuss how these AI strategies can benefit your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="ghost" size="sm">
                <Link to="/contact">
                  Get Expert Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}