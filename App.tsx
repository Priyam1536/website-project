
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CompanyPage from "./pages/CompanyPage";
import FeaturesPage from "./pages/FeaturesPage";
import ResourcesPage from "./pages/ResourcesPage";
import DocsPage from "./pages/DocsPage";
import SignInPage from "./pages/SignInPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import GetStartedPage from "./pages/GetStartedPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/getstarted" element={<GetStartedPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
