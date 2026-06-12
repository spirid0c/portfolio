import { motion } from "framer-motion";
import { Wrench, Cpu, Settings, Users, Globe, Download, Shield, Target, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightCard from "@/components/SpotlightCard";

const technicalSkills = [
  {
    icon: Cpu,
    title: "Conception",
    skills: [
      "Conception de circuits électroniques",
      "Développement de systèmes robotisés",
      "Programmation de microcontrôleurs (Keil, Cube MX)",
      "Modélisation et simulation (Matlab, Maple, Proteus, Isis, KiCad)",
      "Connaissance de la robotique et des systèmes embarqués",
    ],
  },
  {
    icon: Settings,
    title: "Vérification / Maintenance",
    skills: [
      "Tests et validation de prototypes",
      "Contrôle qualité et suivi des normes",
      "Analyse de données et traitement de signaux",
      "Supervision et optimisation de systèmes industriels",
      "Rédaction de rapports techniques et documentation",
    ],
  },
];

const functionalSkills = [
  {
    icon: Shield,
    title: "Sécurité et Encadrement",
    subtitle: "Expérience Surveillant-Sauveteur",
    skills: [
      "Prévention des risques et interventions d'urgence",
      "Sensibilisation du public aux règles de sécurité",
      "Encadrement et accompagnement des usagers",
    ],
  },
  {
    icon: Target,
    title: "Gestion de Projet",
    skills: [
      "Collaboration à la stratégie d'attaque/défense (Projet Robot Sumo)",
      "Rigueur technique",
      "Travail d'équipe",
    ],
  },
  {
    icon: Brain,
    title: "Analyse",
    skills: [
      "Sens de l'analyse",
    ],
  },
];

const languages = [
  { name: "Anglais", level: "Très bon niveau", percent: 85 },
  { name: "Espagnol", level: "Bon niveau", percent: 65 },
];

const qualities = [
  "Rigueur, persévérance, curiosité",
  "Discipline, endurance, dépassement de soi (via le sport)",
  "Autonomie et adaptation (via les voyages)",
];

const Competences = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Wrench className="w-8 h-8 text-primary" />
                <h1 className="text-3xl md:text-4xl font-bold">Compétences</h1>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <a href="/cv/Louison_Prevost-Bonnefille_CV.pdf" download>
                  <Download className="w-4 h-4" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-lg">
              Compétences techniques et humaines acquises au fil de ma formation.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-6">Compétences Techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + categoryIndex * 0.15, duration: 0.5 }}
                >
                  <SpotlightCard className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-secondary">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + skillIndex * 0.05, duration: 0.3 }}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Functional & Transversal Skills */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-6">Compétences Fonctionnelles et Transversales</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {functionalSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + categoryIndex * 0.1, duration: 0.5 }}
                >
                  <SpotlightCard className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-secondary">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{category.title}</h3>
                    </div>
                    {category.subtitle && (
                      <p className="text-xs text-muted-foreground mb-3 ml-11">{category.subtitle}</p>
                    )}
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + skillIndex * 0.05, duration: 0.3 }}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Languages & Qualities */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-6">Langues et Qualités Personnelles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <SpotlightCard className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Langues</h3>
                  </div>
                  <ul className="space-y-4">
                    {languages.map((lang, index) => (
                      <li key={index}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-muted-foreground">{lang.name}</span>
                          <span className="text-sm font-medium text-foreground">{lang.level}</span>
                        </div>
                        <div className="h-2 rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.15, duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <SpotlightCard className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Qualités / Savoir-être</h3>
                  </div>
                  <ul className="space-y-2">
                    {qualities.map((quality, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        {quality}
                      </motion.li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Competences;
