
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
import BrandingInfluencer from "./pages/branding/InfluencerMarketing";
import CorporateVideo from "./pages/branding/CorporateVideo";
import VideoProduction from "./pages/branding/VideoProduction";
import AdFilm from "./pages/branding/AdFilm";
import TheatreAdvertising from "./pages/branding/TheatreAdvertising";
import VideoEditing from "./pages/branding/VideoEditing";
import GraphicDesign from "./pages/branding/GraphicDesign";

// Admin imports
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ThemeManager from "./pages/admin/ThemeManager";
import PageEditor from "./pages/admin/PageEditor";
import NavigationEditor from "./pages/admin/NavigationEditor";
import SocialCalendar from "./pages/admin/SocialCalendar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Website Routes */}
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
          
          {/* Branding Routes */}
          <Route path="/branding" element={<Branding />} />
          <Route path="/branding/influencer-marketing" element={<BrandingInfluencer />} />
          <Route path="/branding/corporate-video" element={<CorporateVideo />} />
          <Route path="/branding/video-production" element={<VideoProduction />} />
          <Route path="/branding/ad-film" element={<AdFilm />} />
          <Route path="/branding/theatre-advertising" element={<TheatreAdvertising />} />
          <Route path="/branding/video-editing" element={<VideoEditing />} />
          <Route path="/branding/graphic-design" element={<GraphicDesign />} />
          
          <Route path="/it-solutions" element={<ItSolutions />} />
          <Route path="/company" element={<Company />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="theme-manager" element={<ThemeManager />} />
            <Route path="pages/new" element={<PageEditor />} />
            <Route path="navigation" element={<NavigationEditor />} />
            <Route path="social-calendar" element={<SocialCalendar />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
