import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Lightbulb, Dumbbell, Calendar, Plane, Film, PlaneTakeoff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightCard from "@/components/SpotlightCard";

const formations = [
  {
    period: "2023 - 2026",
    title: "BUT Génie Électrique et Informatique Industrielle",
    institution: "IUT de Gradignan",
    description: "Formation en électronique, informatique industrielle et automatisme. Actuellement en 2ème année.",
    current: true,
  },
  {
    period: "2023 - 2025",
    title: "Diplôme Universitaire Robotique",
    institution: "Université de Bordeaux",
    description: "Formation parallèle axée sur la robotique avancée, systèmes autonomes et programmation embarquée.",
    current: true,
  },
  {
    period: "2020 - 2023",
    title: "Baccalauréat Général - Mention Bien",
    institution: "Lycée Gustave Eiffel, Bordeaux",
    description: "Spécialités scientifiques avec un accent sur les sciences de l'ingénieur et les mathématiques.",
    current: false,
  },
];

const interests = [
  {
    icon: Lightbulb,
    title: "Entrepreneuriat",
    description: "Création d'un SaaS utilisant l'IA pour aider les agents immobiliers à améliorer leurs performances commerciales.",
  },
  {
    icon: Dumbbell,
    title: "Sport",
    description: "Natation, surf, course à pied et musculation pour maintenir un équilibre et développer mes performances.",
  },
  {
    icon: Plane,
    title: "Voyage",
    description: "Découvrir de nouvelles cultures et explorer de nouveaux endroits à travers le monde.",
  },
  {
    icon: Film,
    title: "Cinéma",
    description: "Passionné par les films cultes et curieux d'élargir ma culture cinématographique.",
  },
  {
    icon: PlaneTakeoff,
    title: "Aéronautique",
    description: "Fasciné depuis l'enfance par l'aviation, les avions et tout ce qui touche au monde aéronautique.",
  },
];

const Parcours = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Mon Parcours</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Étudiant de 19 ans, je combine formation technique et passions personnelles.
            </p>
          </motion.div>

          {/* Formation timeline */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Formation
            </h2>
            
            <div className="relative" ref={timelineRef}>
              {/* Animated timeline line */}
              <motion.div
                className="absolute left-3 top-3 bottom-3 w-px bg-primary/40 origin-top"
                style={{ scaleY }}
              />
              
              <div className="space-y-8">
                {formations.map((formation, index) => (
                  <motion.div
                    key={formation.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.15, duration: 0.5 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center ${
                      formation.current ? 'bg-primary/20 border-2 border-primary ripple-dot' : 'bg-secondary border-2 border-border'
                    }`}>
                      {formation.current && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    
                    <SpotlightCard className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-primary">{formation.period}</span>
                        {formation.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                            En cours
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg">{formation.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{formation.institution}</p>
                      <p className="text-muted-foreground text-sm">{formation.description}</p>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Interests */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-8">Centres d'intérêt</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <SpotlightCard className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <interest.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{interest.title}</h3>
                    <p className="text-muted-foreground text-sm">{interest.description}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Parcours;
