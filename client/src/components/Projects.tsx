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
    githubUrl: "https://github.com/coding-with-maaz",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "GREEN_JOBS",
    description: "Job marketplace platform connecting environmental professionals with sustainable career opportunities. Features advanced search, filtering, and application management.",
    status: "Active",
    category: "Web Application",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/coding-with-maaz",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "3",
    title: "IELTS_MCQS",
    description: "Comprehensive IELTS preparation platform with practice tests, progress tracking, and detailed performance analytics to help students achieve their target scores.",
    status: "Active",
    category: "Educational",
    technologies: ["TypeScript", "React", "Firebase"],
    githubUrl: "https://github.com/coding-with-maaz",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "4",
    title: "TODO_LIST_PY",
    description: "Feature-rich task management application with priority levels, due dates, categories, and productivity insights. Clean interface for efficient task organization.",
    status: "Complete",
    category: "Productivity",
    technologies: ["Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/coding-with-maaz",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "5",
    title: "4mix-tools",
    description: "Collection of developer utilities and tools for enhancing productivity. Includes code formatters, converters, and other helpful development aids.",
    status: "Active",
    category: "Developer Tools",
    technologies: ["JavaScript", "Node.js", "Express"],
    githubUrl: "https://github.com/coding-with-maaz",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const categoryIcons = {
  "Web Platform": Globe,
  "Web Application": Code2,
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
                          Demo
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
