import { Link } from "react-router-dom";
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">ZapIt</span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-md">
              Transforming business operations through intelligent AI solutions. 
              We help organizations streamline processes and achieve unprecedented efficiency.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-accent smooth-transition"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-foreground">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm leading-6 text-muted-foreground hover:text-accent smooth-transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-foreground">Contact Information</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">hello@zapit.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; 2024 ZapIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}