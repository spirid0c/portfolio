import { useState } from "react";
import { motion } from "framer-motion";
import { Folder, ExternalLink, Bot, Car, Hand, Brain, Trophy, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import kartHelicesImg from "@/assets/kart-helices.png";
import robotSumoTestImg from "@/assets/robot-sumo-test.png";
import prospectiaImg from "@/assets/prospectia-immo.png";

const categories = ["Tous", "SAE", "DU Robotique", "Personnel"];

const categoryColors: Record<string, string> = {
  "SAE": "bg-primary/10 text-primary border-primary/20",
  "DU Robotique": "bg-accent text-accent-foreground border-accent",
  "Personnel": "bg-secondary text-secondary-foreground border-secondary",
};

const projects = [
  {
    id: 1,
    title: "Robot Sumo",
    description: "Robot autonome pour compétition sumo. Détection d'adversaire, stratégies de combat et optimisation hardware.",
    tags: ["Robotique", "Compétition"],
    icon: Trophy,
    category: "SAE",
    year: "2024",
    status: "En cours",
    image: robotSumoTestImg,
    ddc: "/docs/Robot_Sumo_DDC.docx",
    detailPage: "/projets/robot-sumo",
  },
  {
    id: 2,
    title: "Kart à Hélices",
    description: "Conception d'un kart propulsé par hélices. Électronique de puissance, mécanique et aérodynamique.",
    tags: ["Électronique", "Mécanique"],
    icon: Car,
    category: "SAE",
    year: "2023",
    status: "Terminé",
    image: kartHelicesImg,
    ddc: "/docs/Kart_Helices_DDC.docx",
    detailPage: "/projets/kart-helices",
  },
  {
    id: 3,
    title: "Main Robotisée",
    description: "Prothèse articulée avec contrôle par capteurs. Biomécanique et systèmes embarqués.",
    tags: ["Biomécanique", "Embarqué"],
    icon: Hand,
    category: "DU Robotique",
    year: "2024",
    status: "Terminé",
    video: "/videos/main-robot.mp4",
  },
  {
    id: 4,
    title: "Robot Labyrinthe",
    description: "Robot autonome capable de résoudre un labyrinthe. Algorithmes de pathfinding et navigation.",
    tags: ["Algorithmes", "Navigation"],
    icon: Bot,
    category: "DU Robotique",
    year: "2024",
    status: "Terminé",
    video: "/videos/robot-labyrinthe.mp4",
  },
  {
    id: 5,
    title: "Prospect'iA",
    description: "Application pour agents immobiliers utilisant l'IA pour la prospection et gestion de leads.",
    tags: ["IA", "SaaS", "Web"],
    icon: Brain,
    category: "Personnel",
    year: "2024",
    status: "En ligne",
    link: "https://prospectia-immo.com",
    image: prospectiaImg,
  },
];

const Projets = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const renderMedia = (project: typeof projects[0]) => {
    if (project.video) {
      return (
        <div className="aspect-video overflow-hidden">
          <video 
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    if (project.image) {
      return (
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      );
    }
    return null;
  };

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
            <div className="flex items-center gap-3 mb-4">
              <Folder className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Mes Projets</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Projets réalisés dans le cadre de ma formation et en dehors.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <TiltCard className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                  {project.detailPage ? (
                    <Link to={project.detailPage}>
                      {renderMedia(project)}
                    </Link>
                  ) : (
                    renderMedia(project)
                  )}
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                        <project.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          project.status === 'En ligne' 
                            ? 'bg-green-500/10 text-green-500'
                            : project.status === 'En cours'
                            ? 'bg-yellow-500/10 text-yellow-500'
                            : 'bg-secondary text-muted-foreground'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {project.detailPage ? (
                      <Link to={project.detailPage}>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    )}
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className={`px-2.5 py-0.5 text-xs rounded-full border ${categoryColors[project.category] || 'bg-secondary text-muted-foreground border-border'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {project.ddc && (
                          <a
                            href={project.ddc}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label={`Télécharger le DDC de ${project.title}`}
                            title="Télécharger le DDC"
                          >
                            <FileText className="w-4 h-4 text-muted-foreground hover:text-primary" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            aria-label={`Voir ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projets;
