import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Folder, Wrench, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GridPattern from "@/components/GridPattern";
import SpotlightCard from "@/components/SpotlightCard";
import profilePhoto from "@/assets/profile-photo.png";

const sections = [
  {
    title: "Mon Parcours",
    description: "BUT GEII, DU Robotique et mes passions",
    icon: GraduationCap,
    href: "/parcours",
  },
  {
    title: "Mes Projets",
    description: "SAE, robotique et projets personnels",
    icon: Folder,
    href: "/projets",
  },
  {
    title: "Compétences",
    description: "Électronique, programmation, outils",
    icon: Wrench,
    href: "/competences",
  },
  {
    title: "Contact",
    description: "Discutons de vos projets",
    icon: Mail,
    href: "/contact",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
          <GridPattern />
          
          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border glass mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Étudiant en 2ème année</span>
              </motion.div>

              {/* Animated ring profile photo */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full profile-ring" />
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
                  <img src={profilePhoto} alt="Louison Prevost-Bonnefille" className="w-full h-full object-cover" />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-shimmer">Louison Prevost-Bonnefille</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Étudiant en Génie Électrique et Informatique Industrielle
              </p>
              
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Actuellement en 2ème année de BUT GEII à l'IUT de Gradignan, je me spécialise 
                en électronique et robotique à travers un DU Robotique en parallèle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Navigation cards */}
        <section className="py-20 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <SpotlightCard className="rounded-xl border border-border glass hover:border-primary/50 transition-all duration-300">
                    <Link
                      to={section.href}
                      className="group flex items-center gap-4 p-6"
                    >
                      <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                        <section.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{section.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
