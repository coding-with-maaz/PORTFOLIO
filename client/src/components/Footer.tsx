import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/coding-with-maaz", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/coding-with-maaz", label: "LinkedIn" },
  { icon: Mail, href: "mailto:drtoolofficial@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              Muhammad Maaz
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer & Mobile App Developer passionate about creating innovative
              solutions that make a difference.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`footer-${link.name.toLowerCase()}`}
                  className="justify-start hover-elevate active-elevate-2"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-${social.label.toLowerCase()}`}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover-elevate active-elevate-2"
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Muhammad Maaz. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
