import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";

export function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github-stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <Github className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              GitHub Contribution Graph
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time visualization of my coding activity and contributions over time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.4, 
            ease: [0.16, 1, 0.3, 1] // Custom easing for smooth slowmo effect
          }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-6 lg:p-8 hover-elevate transition-all duration-500 overflow-hidden">
            <div className="w-full overflow-hidden rounded-lg bg-muted/50">
              <motion.img
                src="https://github-readme-activity-graph.vercel.app/graph?username=coding-with-maaz&theme=github-dark&hide_border=true&area=true&height=300"
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

