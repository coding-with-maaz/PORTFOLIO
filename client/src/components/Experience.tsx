import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@shared/schema";

const experiences: Experience[] = [
  {
    id: "1",
    title: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2022 - Present",
    description: "Developing end-to-end web and mobile applications for clients worldwide. Specializing in Flutter mobile apps, React web applications, and Laravel backend systems. Successfully delivered 15+ projects ranging from e-commerce platforms to streaming services.",
    technologies: ["Flutter", "React", "Laravel", "Node.js", "MySQL", "Firebase"],
    category: "Full-Stack",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "Mobile App Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "2021 - Present",
    description: "Created cross-platform mobile applications using Flutter and Dart. Implemented features like real-time data synchronization, push notifications, in-app purchases, and AdMob integration. Published multiple apps on Google Play Store.",
    technologies: ["Flutter", "Dart", "Firebase", "AdMob", "SQLite"],
    category: "Mobile",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    title: "Backend Developer",
    company: "Various Projects",
    location: "Remote",
    period: "2020 - Present",
    description: "Designed and implemented RESTful APIs and backend systems using Laravel and Node.js. Managed databases, implemented authentication systems, and ensured optimal performance and security. Experience with both SQL and NoSQL databases.",
    technologies: ["Laravel", "PHP", "Node.js", "Express.js", "PostgreSQL", "MySQL"],
    category: "Backend",
    color: "from-orange-500 to-red-500",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and key milestones
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
                data-testid={`experience-${exp.category.toLowerCase()}`}
              >
                <div className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                  <Card className="p-6 hover-elevate transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} flex-shrink-0`}>
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-base font-medium text-primary mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {exp.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
