import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';
import PageTransition from './components/common/PageTransition';
import ScrollToTop from './components/common/ScrollToTop';
import StructuredData from './components/common/StructuredData';

// Lazy load pages for better performance (Code Splitting)
const HomePage = lazy(() => import('./pages/HomePage'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const PropertyDetailsPage = lazy(() => import('./pages/PropertyDetailsPage'));
const AIPropertyHubPage = lazy(() => import('./pages/AIPropertyHubPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));

function NotFoundPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF8]">
      <h1 className="font-playfair text-8xl font-semibold text-[#1B3A5C] mb-4">404</h1>
      <p className="font-inter text-xl text-[#5A5A5A] mb-2">Page not found</p>
      <p className="font-inter text-sm text-[#9A9890] mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="bg-[#1B3A5C] text-white font-inter font-semibold px-8 py-3 rounded-lg hover:bg-[#142D48] transition-all">
        Go to Home
      </a>
    </PageTransition>
  );
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
      <div className="w-10 h-10 border-[3px] border-[#1B3A5C] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <StructuredData type="website" />
      <StructuredData type="organization" />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/properties" element={<PageTransition><PropertiesPage /></PageTransition>} />
        <Route path="/property/:id" element={<PageTransition><PropertyDetailsPage /></PageTransition>} />
        <Route path="/ai-hub" element={<PageTransition><AIPropertyHubPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUsPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/signin" element={<PageTransition><SignInPage /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUpPage /></PageTransition>} />
        <Route path="/forgot-password" element={<PageTransition><ForgotPasswordPage /></PageTransition>} />
        <Route path="/reset/:token" element={<PageTransition><ResetPasswordPage /></PageTransition>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
        <Toaster position="top-center" richColors />
      </AuthProvider>
    </BrowserRouter>
  );
}
