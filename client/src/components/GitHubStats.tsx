import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const githubStats = [
  {
    title: "Contribution Graph",
    url: "https://github-readme-activity-graph.vercel.app/graph?username=coding-with-maaz&theme=github-dark&hide_border=true&area=true&height=300",
    description: "My GitHub contribution activity over time",
  },
  {
    title: "Trophies",
    url: "https://github-profile-trophy.vercel.app/?username=coding-with-maaz&theme=onedark&no-frame=true&column=7&margin-w=15&margin-h=15&rank=SSS,SS,S,AAA,AA,A,B,C",
    description: "GitHub profile achievements and trophies",
  },
  {
    title: "Top Languages",
    url: "https://github-readme-stats.vercel.app/api/top-langs/?username=coding-with-maaz&layout=compact&theme=onedark&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9&langs_count=8",
    description: "Most used programming languages",
  },
];

export function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github-stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Github className="h-8 w-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              GitHub Statistics
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track my coding activity, achievements, and language usage on GitHub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 hover-elevate transition-all duration-300 overflow-hidden">
                <h3 className="text-xl font-bold text-foreground mb-3">{stat.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{stat.description}</p>
                <div className="w-full overflow-hidden rounded-lg bg-muted/50">
                  <img
                    src={stat.url}
                    alt={stat.title}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

