import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileSearch, Upload, Cog, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Select Audit Process",
    description: "Choose from pre-defined audit analytics modules covering P2P, O2C, Inventory, Payroll, Fixed Assets, and R2R.",
  },
  {
    icon: Upload,
    number: "02",
    title: "Upload Client Data",
    description: "Securely upload transactional data from ERP systems. Standardised templates ensure consistent data structure.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Automated Analytics Execution",
    description: "Pre-defined audit test steps run against 100% of the transaction population. Full coverage, no sampling.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Exception Reports Generated",
    description: "Clear, structured exception reports identify anomalies, outliers, and items requiring auditor attention.",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Audit-Ready Outputs",
    description: "Evidence-grade deliverables with complete run history, audit trails, and immutable results.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Process</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, linear workflow designed to integrate seamlessly into 
            your existing audit methodology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className={`p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors ${
                    index % 2 === 0 ? 'lg:ml-auto' : ''
                  } max-w-md`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className="text-xs font-mono text-primary">{step.number}</span>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <motion.div
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                >
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-glow">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </motion.div>

                {/* Empty space for opposite side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
