import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Scale, Lock, MapPin } from "lucide-react";

const trustItems = [
  {
    icon: Scale,
    title: "Auditor Responsibility",
    description: "All audit conclusions and professional judgements remain the responsibility of the auditor. The Analytical Engine provides analytics assistance only.",
  },
  {
    icon: Shield,
    title: "Analytics Disclaimer",
    description: "Results are based on data provided and pre-defined analytics logic. They support but do not replace professional audit procedures and judgement.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Client data is processed securely with appropriate encryption and access controls. Data retention follows defined policies and client agreements.",
  },
  {
    icon: MapPin,
    title: "Jurisdiction",
    description: "Smarkitals Technologies operates under Indian jurisdiction. Terms of service and data handling comply with applicable Indian regulations.",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Trust, Responsibility & Compliance
          </h3>
          <p className="text-sm text-muted-foreground">
            Important disclosures about the use of Risquovero Analytical Engine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-3 p-2 rounded-lg bg-secondary/50 w-fit">
                <item.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h4 className="text-sm font-medium text-foreground mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
