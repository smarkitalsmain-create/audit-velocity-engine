import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg gradient-accent" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                Risquovero Analytical Engine
              </span>
              <span className="text-xs text-muted-foreground">
                Part of the Risquovero Risk Intelligence Ecosystem
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024 Smarkitals Technologies. All rights reserved.</p>
          <p>Built in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
