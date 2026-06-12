import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Parcours from "./pages/Parcours";
import Projets from "./pages/Projets";
import ProjetRobotSumo from "./pages/ProjetRobotSumo";
import ProjetKartHelices from "./pages/ProjetKartHelices";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/robot-sumo" element={<ProjetRobotSumo />} />
          <Route path="/projets/kart-helices" element={<ProjetKartHelices />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
