import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  FileCheck, 
  Layers, 
  FileBarChart, 
  Lock, 
  History 
} from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Full-Population Testing",
    description: "Analyse 100% of transactions instead of statistical samples. Complete coverage, no exceptions left unchecked.",
  },
  {
    icon: FileCheck,
    title: "Pre-Defined Audit Tests",
    description: "Standard audit test steps built by experienced auditors, ready to execute consistently across engagements.",
  },
  {
    icon: Layers,
    title: "Process-Wise Analytics",
    description: "Dedicated modules for P2P, O2C, Inventory, Payroll, Fixed Assets, and Record-to-Report processes.",
  },
  {
    icon: FileBarChart,
    title: "Clear Exception Reports",
    description: "Structured outputs that highlight anomalies and items requiring auditor review—no interpretation guesswork.",
  },
  {
    icon: Lock,
    title: "Evidence-Grade Controls",
    description: "Immutable results, complete audit trails, and secure data handling that meets evidence standards.",
  },
  {
    icon: History,
    title: "Run History & Traceability",
    description: "Full record of every analysis run, parameters used, and results generated for complete auditability.",
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Key Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built features for serious audit execution, designed to 
            maintain the rigour and defensibility your work demands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300">
                <div className="mb-4 p-3 rounded-lg bg-secondary/50 w-fit group-hover:bg-primary/10 transition-colors">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
