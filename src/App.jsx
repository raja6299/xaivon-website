import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <ScrollToTop />
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
