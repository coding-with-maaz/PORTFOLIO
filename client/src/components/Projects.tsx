import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2, Smartphone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

const projects: Project[] = [
  {
    id: "1",
    title: "ASIAN2DAY",
    description: "Advanced streaming platform featuring live content delivery, user authentication, and real-time interactions. Built with modern architecture for scalability and performance.",
    status: "Production",
    category: "Web Platform",
    technologies: ["Laravel", "Node.js", "Flutter", "MySQL"],
    githubUrl: "https://github.com/coding-with-maaz/NETFLEX_CLONE",
    demoUrl: "https://nazaarabox.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "Medzfitt E-commerce",
    description: "Complete Laravel-based e-commerce platform for medical wear and scrubs. Features product management, shopping cart, order processing, user reviews, and comprehensive admin dashboard.",
    status: "Production",
    category: "E-commerce",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/coding-with-maaz/Ecomerce_Store",
    demoUrl: "https://medzfitt.com",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "3",
    title: "TAGIQ - AI Keyword Generator",
    description: "Intelligent keyword and hashtag generator tool that scrapes trending keywords from Google, YouTube, TikTok, Bing, and Amazon. Built with Node.js, Express, and Puppeteer for web scraping with Flutter mobile app support.",
    status: "Active",
    category: "Developer Tools",
    technologies: ["Node.js", "Express", "Puppeteer", "Flutter", "TypeScript"],
    githubUrl: "https://github.com/coding-with-maaz/_TAGIQ_",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "5",
    title: "JOB2DAY - Job Board Platform",
    description: "Comprehensive job board platform with RESTful APIs for job postings, applications, user authentication, and notifications. Built scalable backend with Node.js and Express, supporting Flutter mobile app with real-time features and analytics.",
    status: "Production",
    category: "Web Platform",
    technologies: ["Node.js", "Express", "MySQL", "Sequelize", "Firebase", "Flutter", "TypeScript"],
    githubUrl: "https://github.com/coding-with-maaz/JOB2DAY-BACKEND",
    demoUrl: "https://frontend.harpaljob.com",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "4",
    title: "Flutter Ads Pro",
    description: "Comprehensive Flutter ads integration package with easy-to-reuse setup for all major ad networks. Supports Android, iOS, Web, Windows, macOS, and Linux platforms with simplified configuration and implementation.",
    status: "Active",
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "Android", "iOS"],
    githubUrl: "https://github.com/coding-with-maaz/FLUTTER-_ADS",
    gradient: "from-orange-500 to-red-500",
  },
];

const categoryIcons = {
  "Web Platform": Globe,
  "Web Application": Code2,
  "E-commerce": Globe,
  "Mobile App": Smartphone,
  Educational: Code2,
  Productivity: Code2,
  "Developer Tools": Code2,
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Code2;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`project-${project.title.toLowerCase().replace(/_/g, '-')}`}
              >
                <Card className="h-full p-6 hover-elevate transition-all duration-300 group cursor-default">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.category}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        data-testid={`button-github-${project.title.toLowerCase().replace(/_/g, '-')}`}
                        className="hover-elevate active-elevate-2"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        data-testid={`button-demo-${project.title.toLowerCase().replace(/_/g, '-')}`}
                        className="hover-elevate active-elevate-2"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects and open-source contributions
              </p>
              <Button
                size="lg"
                asChild
                data-testid="button-view-github"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground active-elevate-2 transition-all duration-300"
              >
                <a
                  href="https://github.com/coding-with-maaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
