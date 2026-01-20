import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ecosystemNodes = [
  { id: 'engine', label: 'Analytical Engine', primary: true },
  { id: 'risk', label: 'Risk Assessment' },
  { id: 'control', label: 'Control Monitoring' },
  { id: 'reporting', label: 'Reporting & Insights' },
  { id: 'workflow', label: 'Workflow Management' },
];

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" ref={ref} className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Part of a Broader Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Risquovero Analytical Engine is one component of the broader 
            Risquovero Risk Intelligence Ecosystem, designed to strengthen 
            audit execution and risk visibility over time.
          </p>
        </motion.div>

        {/* Ecosystem diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl border border-border bg-card/30 p-12">
            {/* Center node */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center shadow-glow">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary mb-1">Analytical</div>
                    <div className="text-sm font-semibold text-primary">Engine</div>
                    <div className="text-xs text-muted-foreground mt-1">Core Module</div>
                  </div>
                </div>
                
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/30"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Surrounding nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ecosystemNodes.filter(n => !n.primary).map((node, index) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  {/* Connection line */}
                  <div className="absolute left-1/2 -top-4 w-px h-4 bg-gradient-to-t from-border to-transparent hidden md:block" />
                  
                  <div className="p-4 rounded-lg border border-border bg-card/50 text-center hover:border-primary/30 transition-colors">
                    <span className="text-sm text-muted-foreground">{node.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ecosystem label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 pt-8 border-t border-border text-center"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Risquovero Risk Intelligence Ecosystem</span>
                <br />
                by Smarkitals Technologies
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
