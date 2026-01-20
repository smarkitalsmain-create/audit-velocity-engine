import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg gradient-accent" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Risquovero
              </span>
              <span className="text-xs text-muted-foreground">
                Analytical Engine
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#capabilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Capabilities
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#audience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Who It's For
            </a>
            <a href="#ecosystem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ecosystem
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Talk to a Specialist
            </Button>
            <Button size="sm" className="gradient-accent text-primary-foreground font-medium">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
