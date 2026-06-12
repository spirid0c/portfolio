import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightCard from "@/components/SpotlightCard";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              À la recherche d'un stage ou d'une collaboration ? N'hésitez pas à me contacter.
            </p>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <SpotlightCard className="p-8 rounded-2xl bg-card border border-border mb-10 hover:border-primary/30 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-secondary border-2 border-border flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-muted-foreground">?</span>
                </div>

                <h2 className="text-xl font-semibold mb-1">Louison Prévost-Bonnefille</h2>
                <p className="text-muted-foreground mb-6">Étudiant BUT GEII & DU Robotique</p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Gradignan, France</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-muted-foreground">Disponible pour un stage</span>
                  </div>
                </div>

                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors group"
                >
                  <span>Envoyer un email</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-muted-foreground text-sm mb-4">Ou retrouvez-moi sur</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
