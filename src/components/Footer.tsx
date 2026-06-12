import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6">
      {/* Animated separator */}
      <div className="footer-separator mb-8" />
      
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Louison Prévost-Bonnefille. Étudiant BUT GEII.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/parcours" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Parcours
            </Link>
            <Link to="/projets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projets
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <span className="w-px h-4 bg-border" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
