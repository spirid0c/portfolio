import { motion } from "framer-motion";
import { ArrowLeft, Trophy, FileText, Target, Cpu, Zap, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import robotSumoTestImg from "@/assets/robot-sumo-test.png";

const ProjetRobotSumo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/projets" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500/10 text-yellow-500 mb-1 inline-block">
                  En cours
                </span>
                <h1 className="text-3xl md:text-4xl font-bold">Robot Sumo</h1>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              SAE · 2024-2025
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl overflow-hidden mb-10"
          >
            <img 
              src={robotSumoTestImg} 
              alt="Robot Sumo" 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-10">
            {/* Objectif */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Objectif du projet</h2>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Concevoir et réaliser un robot autonome capable de participer à une compétition de sumo robotique. 
                  Le robot doit être capable de détecter son adversaire, d'élaborer des stratégies de combat et de 
                  le pousser hors du ring tout en restant dans les limites de l'arène.
                </p>
              </div>
            </motion.section>

            {/* Spécifications techniques */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Spécifications techniques</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-medium mb-2">Dimensions</h3>
                  <p className="text-sm text-muted-foreground">
                    Conforme aux normes de compétition sumo (max 10x10cm)
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-medium mb-2">Poids</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimisé pour maximiser l'adhérence et la poussée
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-medium mb-2">Motorisation</h3>
                  <p className="text-sm text-muted-foreground">
                    Moteurs DC avec réducteurs pour couple élevé
                  </p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-medium mb-2">Microcontrôleur</h3>
                  <p className="text-sm text-muted-foreground">
                    Traitement embarqué pour décisions autonomes
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Capteurs */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Système de détection</h2>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Capteurs de ligne :</strong> Détection des limites du ring pour éviter de sortir</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Capteurs de distance :</strong> Localisation de l'adversaire sur 360°</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Algorithmes :</strong> Stratégies d'attaque et de défense programmées</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Compétences */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Compétences développées</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Électronique embarquée", "Programmation C", "CAO mécanique", "Gestion de projet", "Travail en équipe", "Robotique"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-sm rounded-lg text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Download DDC */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="/docs/Robot_Sumo_DDC.docx"
                download
                className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">Dossier de Conception (DDC)</h3>
                  <p className="text-sm text-muted-foreground">Télécharger le document complet</p>
                </div>
              </a>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjetRobotSumo;
