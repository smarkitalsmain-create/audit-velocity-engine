import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Eye, TrendingUp, Users } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Faster Audit Execution",
    description: "Reduce the time spent on structured, repeatable test procedures without cutting corners.",
  },
  {
    icon: TrendingUp,
    title: "Reduced Manual Effort",
    description: "Automate data testing that previously required hours of manual Excel work and verification.",
  },
  {
    icon: Eye,
    title: "Earlier Exception Visibility",
    description: "Identify anomalies and potential issues earlier in the audit cycle for timely resolution.",
  },
  {
    icon: Users,
    title: "Better Team Utilisation",
    description: "Free audit professionals to focus on judgement-intensive work and stakeholder engagement.",
  },
];

const ValueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card/50 p-8">
              {/* Time reduction visualization */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-muted-foreground mb-6">
                    Audit Cycle Time Comparison
                  </h3>
                </div>

                {/* Traditional approach */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Traditional Approach</span>
                    <span>100%</span>
                  </div>
                  <div className="h-6 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full bg-muted-foreground/40 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* With Risquovero */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-foreground font-medium">With Risquovero</span>
                    <span className="text-primary">Significantly Reduced</span>
                  </div>
                  <div className="h-6 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full gradient-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "45%" } : {}}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Breakdown */}
                <div className="pt-6 border-t border-border grid grid-cols-3 gap-4">
                  {[
                    { label: 'Data Testing', reduction: 'Automated' },
                    { label: 'Exception ID', reduction: 'Faster' },
                    { label: 'Reporting', reduction: 'Streamlined' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    >
                      <div className="text-sm font-medium text-primary">{item.reduction}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-medium text-primary mb-4 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Time Reduction Without Compromise
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Analytical Engine delivers measurable time savings across the audit 
              execution phase while maintaining the coverage, rigour, and evidence 
              standards your work requires.
            </p>

            <div className="space-y-5">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
