import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy, useState } from 'react';
import ReactGA from 'react-ga4';
import ScrollToTop from './hooks/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import LoadingScreen from './components/LoadingScreen';
import StickyCallToAction from './components/StickyCallToAction';
import ExitIntentPopup from './components/ExitIntentPopup';
import './App.css';

// Initialize GA4
ReactGA.initialize('G-FKYVMSFM5B');

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const LogisticsSolutions = lazy(() => import('./pages/LogisticsSolutions'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Pricing = lazy(() => import('./pages/Pricing'));
const SeoLandingPage = lazy(() => import('./pages/SeoLandingPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

// Dedicated Service Pages
const QuoteFlowAI = lazy(() => import('./pages/services/QuoteFlowAI'));
const AIAgents = lazy(() => import('./pages/services/AIAgents'));
const AIAutomation = lazy(() => import('./pages/services/AIAutomation'));
const AIChatbots = lazy(() => import('./pages/services/AIChatbots'));
const Resources = lazy(() => import('./pages/Resources'));
const AiConsultation = lazy(() => import('./pages/AiConsultation'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <ScrollToTop />
      <Analytics />
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<div className="loading-spinner"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/logistics-solutions" element={<LogisticsSolutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/s/:slug" element={<SeoLandingPage />} />
            
            {/* Dedicated Service Pages */}
            <Route path="/quoteflow-ai" element={<QuoteFlowAI />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/ai-chatbots" element={<AIChatbots />} />
            
            <Route path="/resources" element={<Resources />} />
            <Route path="/ai-consultation" element={<AiConsultation />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <StickyCallToAction />
      <ExitIntentPopup />
    </>
  );
}

export default App;
