
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import Branding from "./pages/Branding";
import ItSolutions from "./pages/ItSolutions";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import SocialMediaMarketing from "./pages/digital-marketing/SocialMediaMarketing";
import SearchEngineOptimization from "./pages/digital-marketing/SearchEngineOptimization";
import DigitalTransformation from "./pages/digital-marketing/DigitalTransformation";
import ContentMarketing from "./pages/digital-marketing/ContentMarketing";
import OnlineAdvertising from "./pages/digital-marketing/OnlineAdvertising";
import GoogleAds from "./pages/digital-marketing/GoogleAds";
import InfluencerMarketing from "./pages/digital-marketing/InfluencerMarketing";
import OnlineReputation from "./pages/digital-marketing/OnlineReputation";
import WebsiteRedesign from "./pages/web-development/WebsiteRedesign";
import EcommerceWebsite from "./pages/web-development/EcommerceWebsite";
import MobileFriendly from "./pages/web-development/MobileFriendly";
import CustomWebsite from "./pages/web-development/CustomWebsite";
import WebHosting from "./pages/web-development/WebHosting";
import AppDevelopment from "./pages/web-development/AppDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Digital Marketing Routes */}
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/digital-marketing/social-media" element={<SocialMediaMarketing />} />
          <Route path="/digital-marketing/seo" element={<SearchEngineOptimization />} />
          <Route path="/digital-marketing/transformation" element={<DigitalTransformation />} />
          <Route path="/digital-marketing/content" element={<ContentMarketing />} />
          <Route path="/digital-marketing/advertising" element={<OnlineAdvertising />} />
          <Route path="/digital-marketing/google-ads" element={<GoogleAds />} />
          <Route path="/digital-marketing/influencer" element={<InfluencerMarketing />} />
          <Route path="/digital-marketing/reputation" element={<OnlineReputation />} />
          
          {/* Web Development Routes */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/web-development/website-redesign" element={<WebsiteRedesign />} />
          <Route path="/web-development/ecommerce" element={<EcommerceWebsite />} />
          <Route path="/web-development/mobile-friendly" element={<MobileFriendly />} />
          <Route path="/web-development/custom-design" element={<CustomWebsite />} />
          <Route path="/web-development/hosting" element={<WebHosting />} />
          <Route path="/web-development/app-development" element={<AppDevelopment />} />
          
          <Route path="/branding" element={<Branding />} />
          <Route path="/it-solutions" element={<ItSolutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
