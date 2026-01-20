import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Database, RefreshCw, Users } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Manual Data Testing",
    description: "Hours spent extracting, cleaning, and manually testing transaction data across multiple systems.",
  },
  {
    icon: RefreshCw,
    title: "Sampling Limitations",
    description: "Statistical sampling leaves gaps in coverage, missing exceptions that full-population testing would catch.",
  },
  {
    icon: Clock,
    title: "Repetitive Procedures",
    description: "Standard audit tests repeated manually for every engagement, consuming valuable audit hours.",
  },
  {
    icon: Users,
    title: "Team Pressure",
    description: "Tight timelines and resource constraints force trade-offs between depth and speed.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Internal Audits Take Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The internal audit process faces structural inefficiencies that extend timelines 
            and strain team capacity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 h-full">
                <div className="mb-4 p-3 rounded-lg bg-secondary/50 w-fit group-hover:bg-primary/10 transition-colors">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual: Fragmented to organized flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 bg-muted-foreground/20 rounded"
                  style={{ width: `${40 + Math.random() * 40}px` }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
            
            <motion.div
              className="text-muted-foreground/40"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>
            
            <div className="w-20 h-12 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="w-12 h-6 rounded bg-primary/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
