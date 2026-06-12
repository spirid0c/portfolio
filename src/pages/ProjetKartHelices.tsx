import { motion } from "framer-motion";
import { ArrowLeft, Car, FileText, Target, Cpu, Zap, Radio, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kartHelicesImg from "@/assets/kart-helices.png";

const ProjetKartHelices = () => {
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
                <Car className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="px-2 py-0.5 text-xs rounded-full bg-secondary text-muted-foreground mb-1 inline-block">
                  Terminé
                </span>
                <h1 className="text-3xl md:text-4xl font-bold">Kart à Hélices</h1>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              SAE · 2023-2024
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
              src={kartHelicesImg} 
              alt="Kart à Hélices" 
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
                  Concevoir et réaliser un kart radiocommandé propulsé par des hélices. Le projet comprend 
                  la conception d'un émetteur (télécommande) et d'un récepteur (kart) communiquant via 
                  infrarouge selon le protocole NEC. Le kart doit répondre aux commandes de direction 
                  et de puissance tout en intégrant diverses fonctionnalités comme un klaxon.
                </p>
              </div>
            </motion.section>

            {/* Architecture */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Cog className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Architecture du système</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-primary" />
                    Émetteur (Télécommande)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dimensions : 120mm × 80mm</li>
                    <li>• Potentiomètre rotatif (direction)</li>
                    <li>• Potentiomètre linéaire (puissance)</li>
                    <li>• Bouton poussoir (klaxon)</li>
                    <li>• Microcontrôleur ATMEGA328P</li>
                    <li>• LEDs infrarouges TSAL6200</li>
                    <li>• Batterie LiPo 2S</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Car className="w-4 h-4 text-primary" />
                    Récepteur (Kart)
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dimensions max : 500×300×400mm</li>
                    <li>• Carte récepteur : 100mm × 75mm</li>
                    <li>• Récepteur infrarouge</li>
                    <li>• Moteurs à hélices</li>
                    <li>• Servomoteur de direction</li>
                    <li>• Klaxon intégré</li>
                    <li>• Indicateurs LED</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Protocole */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Communication infrarouge</h2>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le système utilise le <strong className="text-foreground">protocole NEC</strong> pour 
                  la communication infrarouge entre l'émetteur et le récepteur :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Octet address :</strong> 1 bit klaxon + 7 bits numéro d'équipe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Octet data :</strong> 3 bits puissance moteur + 5 bits direction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Traitement :</strong> Conversion ADC des potentiomètres et encodage de la trame</span>
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
                {[
                  "Électronique de puissance", 
                  "Conception PCB (ARES)", 
                  "Programmation embarquée", 
                  "Protocole NEC",
                  "CAO mécanique",
                  "Travail en équipe",
                  "Gestion de projet"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-sm rounded-lg text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Équipe */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <h3 className="text-lg font-medium mb-3">Équipe de conception</h3>
              <p className="text-muted-foreground text-sm">
                Mathieu Boubet, Yuxuan Ma, Ethan Guilloux, Jia Chen, Elou-Anne Petry, Louison Prevost-Bonnefille
              </p>
            </motion.section>

            {/* Download DDC */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="/docs/Kart_Helices_DDC.docx"
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

export default ProjetKartHelices;
