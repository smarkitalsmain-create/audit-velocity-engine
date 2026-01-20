import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Scale } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description: "Execute standard audit tests in a fraction of the time while maintaining full coverage and evidence integrity.",
  },
  {
    icon: Shield,
    title: "Audit Discipline Preserved",
    description: "Analytics assist execution—judgement and responsibility remain with the auditor. No black boxes.",
  },
  {
    icon: Scale,
    title: "Scale Without Strain",
    description: "Increase audit coverage across engagements without proportionally increasing team effort or timeline.",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Execution-Stage Audit Analytics Engine
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Risquovero Analytical Engine is built to automate the execution of standard 
              audit test steps—not to replace auditor judgement, but to accelerate the 
              structured, repeatable parts of the audit process.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-border bg-card/80 p-8 shadow-card">
              {/* Simulated dashboard/interface */}
              <div className="space-y-4">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">Analytical Engine</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Active Session</span>
                </div>

                {/* Process bars */}
                {['P2P Analytics', 'O2C Testing', 'Payroll Audit'].map((process, i) => (
                  <motion.div
                    key={process}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={isInView ? { opacity: 1, width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                  >
                    <span className="text-xs text-muted-foreground w-24 flex-shrink-0">{process}</span>
                    <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full gradient-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${70 + i * 10}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.8 + i * 0.2 }}
                      />
                    </div>
                    <span className="text-xs text-primary w-12">{70 + i * 10}%</span>
                  </motion.div>
                ))}

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 mt-4 border-t border-border">
                  {[
                    { label: 'Tests Executed', value: '847' },
                    { label: 'Exceptions', value: '12' },
                    { label: 'Time Saved', value: '68%' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    >
                      <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl gradient-glow opacity-20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
