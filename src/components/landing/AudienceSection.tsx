import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Internal Audit Firms",
    description: "Firms delivering internal audit services seeking to improve engagement efficiency, reduce manual testing time, and scale capacity without proportionally increasing headcount.",
  },
  {
    icon: Users,
    title: "Co-Sourced IA Teams",
    description: "Hybrid teams working alongside enterprise internal audit functions, needing consistent, efficient testing methodologies that integrate with client processes.",
  },
  {
    icon: Building2,
    title: "Enterprise IA Departments",
    description: "In-house internal audit teams managing extensive audit universes, facing pressure to complete more audits with constrained resources and timelines.",
  },
];

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="audience" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Built For</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Who It's Built For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for professionals who understand audit discipline and 
            need tools that respect the rigour of their work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 gradient-glow opacity-30" />
                
                <div className="relative z-10">
                  <div className="mb-6 p-4 rounded-xl bg-secondary/50 w-fit group-hover:bg-primary/10 transition-colors">
                    <audience.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
