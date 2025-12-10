import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Counties from "./pages/Counties";

// Service Pages
import Leveling from "./pages/services/Leveling";
import GroundAnchors from "./pages/services/GroundAnchors";
import TieDown from "./pages/services/TieDown";
import Foundation from "./pages/services/Foundation";
import Skirting from "./pages/services/Skirting";
import CrawlSpace from "./pages/services/CrawlSpace";
import FloorLeveling from "./pages/services/FloorLeveling";
import HurricaneProtection from "./pages/services/HurricaneProtection";

// County Pages
import PolkCounty from "./pages/counties/PolkCounty";
import LakeCounty from "./pages/counties/LakeCounty";
import VolusiaCounty from "./pages/counties/VolusiaCounty";
import SumterCounty from "./pages/counties/SumterCounty";
import OrangeCounty from "./pages/counties/OrangeCounty";
import HillsboroughCounty from "./pages/counties/HillsboroughCounty";
import OsceolaCounty from "./pages/counties/OsceolaCounty";
import ManateeCounty from "./pages/counties/ManateeCounty";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/counties" element={<Counties />} />
              
              {/* Service Routes */}
              <Route path="/services/leveling" element={<Leveling />} />
              <Route path="/services/ground-anchors" element={<GroundAnchors />} />
              <Route path="/services/tie-down" element={<TieDown />} />
              <Route path="/services/foundation" element={<Foundation />} />
              <Route path="/services/skirting" element={<Skirting />} />
              <Route path="/services/crawl-space" element={<CrawlSpace />} />
              <Route path="/services/floor-leveling" element={<FloorLeveling />} />
              <Route path="/services/hurricane-protection" element={<HurricaneProtection />} />
              
              {/* County Routes */}
              <Route path="/counties/polk" element={<PolkCounty />} />
              <Route path="/counties/lake" element={<LakeCounty />} />
              <Route path="/counties/volusia" element={<VolusiaCounty />} />
              <Route path="/counties/sumter" element={<SumterCounty />} />
              <Route path="/counties/orange" element={<OrangeCounty />} />
              <Route path="/counties/hillsborough" element={<HillsboroughCounty />} />
              <Route path="/counties/osceola" element={<OsceolaCounty />} />
              <Route path="/counties/manatee" element={<ManateeCounty />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
