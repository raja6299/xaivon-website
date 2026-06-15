import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy, useState } from 'react';
import ScrollToTop from './hooks/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import LoadingScreen from './components/LoadingScreen';
import StickyCallToAction from './components/StickyCallToAction';
import ExitIntentPopup from './components/ExitIntentPopup';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const LogisticsSolutions = lazy(() => import('./pages/LogisticsSolutions'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Pricing = lazy(() => import('./pages/Pricing'));
const SeoLandingPage = lazy(() => import('./pages/SeoLandingPage'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
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
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <StickyCallToAction />
      <ExitIntentPopup />
    </Router>
  );
}

export default App;
