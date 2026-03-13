import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';

/* ── Only import AI components when enabled ──────────────── */
const AI_HUB_ENABLED = import.meta.env.VITE_ENABLE_AI_HUB === 'true';

const AIHeroSection = AI_HUB_ENABLED ? React.lazy(() => import('../components/ai-hub/AIHeroSection')) : null;
const AISearchResults = AI_HUB_ENABLED ? React.lazy(() => import('../components/ai-hub/AISearchResults')) : null;
const AIAnalysisPanel = AI_HUB_ENABLED ? React.lazy(() => import('../components/ai-hub/AIAnalysisPanel')) : null;
const AILocationTrends = AI_HUB_ENABLED ? React.lazy(() => import('../components/ai-hub/AILocationTrends')) : null;
const AICTASection = AI_HUB_ENABLED ? React.lazy(() => import('../components/ai-hub/AICTASection')) : null;

let aiAPI: any = null;
if (AI_HUB_ENABLED) {
  import('../services/api').then((mod) => { aiAPI = mod.aiAPI; });
}

/* ── Backend response types ─────────────────────────────── */

export interface ScrapedProperty {
  building_name: string;
  property_type: string;
  location_address: string;
  price: string;
  description: string;
  amenities: string[];
  area_sqft: string;
  property_url?: string;
}

export interface PropertyOverview {
  name: string;
  price: string;
  area: string;
  location: string;
  highlight: string;
}

export interface PropertyAnalysis {
  overview: PropertyOverview[];
  best_value: { name: string; reason: string } | null;
  recommendations: string[];
  error?: string;
}

export interface LocationData {
  location: string;
  price_per_sqft: string;
  percent_increase: string;
  rental_yield: string;
}

export interface TrendDetail {
  location: string;
  price_per_sqft: string;
  yearly_change_pct: string;
  rental_yield_pct: string;
  outlook: string;
}

export interface LocationAnalysis {
  trends: TrendDetail[];
  top_appreciation: { location: string; reason: string } | null;
  best_rental_yield: { location: string; reason: string } | null;
  investment_tips: string[];
  error?: string;
}

export interface SearchParams {
  city: string;
  maxBudget: number;       // value in Crores
  propertyType: string;
  category: string;
}

/* ── Production landing page ────────────────────────────── */

const AIHubProductionPage: React.FC = () => {
  const features = [
    {
      icon: 'search',
      title: 'Smart Property Search',
      description: 'Search across cities with intelligent filters for budget, property type, and category.',
    },
    {
      icon: 'analytics',
      title: 'Market Analysis',
      description: 'Data-powered analysis with best value picks and personalised recommendations for your profile.',
    },
    {
      icon: 'trending_up',
      title: 'Location Trends',
      description: 'Real-time price trends, rental yields, appreciation rates, and investment insights.',
    },
    {
      icon: 'lightbulb',
      title: 'Investment Insights',
      description: 'Expert investment tips based on market data, location analysis, and historical performance.',
    },
  ];

  return (
    <div style={{ background: '#FAFAF8' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: '#FAFAF8', paddingTop: '80px' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(27,58,92,0.06) 0%, transparent 55%)',
          }}
        />
        <div className="max-w-[1280px] mx-auto px-8 pt-20 pb-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8 text-sm font-semibold"
              style={{ background: 'rgba(27,58,92,0.07)', border: '1px solid rgba(27,58,92,0.12)', color: '#1B3A5C', letterSpacing: '0.06em' }}
            >
              <span className="font-material-icons text-[#1B3A5C]" style={{ fontSize: 18 }}>insights</span>
              Market Insights Platform
            </div>

            <h1 className="font-playfair mb-5" style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.1 }}>
              Property Insights Hub
            </h1>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#5A5A5A', lineHeight: 1.75 }}>
              Smart property search, market trend analysis, rental yield data, and investment insights
              — all powered by real market data to help you make informed decisions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/properties"
                className="btn-shimmer font-semibold text-base px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all"
                style={{ background: '#1B3A5C', color: '#FFFFFF', boxShadow: '0 4px 16px rgba(27,58,92,0.22)' }}
              >
                Browse Properties
                <span className="font-material-icons text-sm">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="font-semibold text-base px-8 py-4 rounded-xl inline-flex items-center gap-2 border transition-all"
                style={{ border: '1.5px solid #1B3A5C', color: '#1B3A5C', background: 'transparent' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#1B3A5C'; (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#1B3A5C'; }}
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <div className="nest-label mb-3">What's Inside</div>
          <h2 className="font-playfair font-semibold" style={{ fontSize: 'clamp(28px,3vw,40px)', color: '#1A1A1A' }}>
            Exclusive Market Tools
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#7A7872', lineHeight: 1.75 }}>
            Our verified clients gain access to a suite of proprietary tools designed to maximise investment returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 card-lift"
              style={{ border: '1px solid #E8E6E0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(27,58,92,0.07)' }}
              >
                <span className="font-material-icons" style={{ color: '#1B3A5C' }}>{feature.icon}</span>
              </div>
              <h3 className="font-inter font-semibold text-base mb-2" style={{ color: '#1A1A1A' }}>{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7A7872' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upgrade CTA / Lead Gen */}
      <section className="py-20" style={{ background: '#1B3A5C' }}>
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="font-playfair font-semibold mb-5" style={{ fontSize: 'clamp(28px,3vw,40px)', color: '#FFFFFF' }}>
            Get Full Access to Market Intel
          </h2>
          <p className="text-sm mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
            To unlock our in-depth predictive modeling, neighborhood performance indices, and personalized 
            investment recommendations, simply connect with one of our expert advisors. We provide full 
            market data exclusivity to our serious clients.
          </p>
          
          <Link
            to="/contact"
            className="btn-shimmer font-semibold text-base px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-all"
            style={{ background: '#FFFFFF', color: '#1B3A5C', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
          >
            Schedule a Strategy Session
            <span className="font-material-icons text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

/* ── Main page component ────────────────────────────────── */

const AIPropertyHubPage: React.FC = () => {
  useSEO({
    title: 'AI Property Hub',
    description: 'AI-powered property search, market analysis, location trends, and investment insights for India real estate.',
  });

  /* ── AI Hub disabled → show "download & run locally" page ── */
  if (!AI_HUB_ENABLED) {
    return (
      <div className="bg-[#FAFAF8] min-h-screen">
        <Navbar />
        <AIHubProductionPage />
        <Footer />
      </div>
    );
  }

  /* ── Development → full AI Hub functionality ────────── */
  return <AIHubDevPage />;
};

/* ── Dev-only component (full AI functionality) ─────────── */

const AIHubDevPage: React.FC = () => {
  // ── P3-1: Resolve aiAPI via useEffect to avoid race condition ────────────────────────────────
  const [apiReady, setApiReady] = useState(false);
  const [aiApiRef, setAiApiRef] = useState<any>(null);

  useEffect(() => {
    if (!AI_HUB_ENABLED) return;
    import('../services/api').then((mod) => {
      setAiApiRef(() => mod.aiAPI);
      setApiReady(true);
    });
  }, []);

  // Search
  const [searchParams, setSearchParams] = useState<SearchParams>({
    city: '',
    maxBudget: 2,
    propertyType: 'Flat',
    category: 'Residential',
  });

  // Results
  const [properties, setProperties] = useState<ScrapedProperty[]>([]);
  const [analysis, setAnalysis] = useState<PropertyAnalysis | null>(null);
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [locationAnalysis, setLocationAnalysis] = useState<LocationAnalysis | null>(null);

  // UI flags
  const [searchLoading, setSearchLoading] = useState(false);
  const [trendsLoading, setTrendsLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [trendsError, setTrendsError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasLoadedTrends, setHasLoadedTrends] = useState(false);
  // For P1-1: auto-open key modal on 403
  const [openKeyModal, setOpenKeyModal] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);


  /* ── Handlers ────────────────────────────────────────── */

  /** P1-1 — Turn an axios error into a user-friendly message. */
  const friendlyError = (err: any, fallback: string): { msg: string; isKeyError: boolean } => {
    const status = err?.response?.status;
    const serverMsg = err?.response?.data?.message || '';
    const serverCode = err?.response?.data?.error || '';

    if (status === 403 || serverCode === 'KEYS_REQUIRED') {
      return { msg: 'Your API keys are missing or invalid. Please add your GitHub Models and Firecrawl keys.', isKeyError: true };
    }
    if (status === 429 || serverCode === 'RATE_LIMIT_EXCEEDED') {
      return { msg: 'Rate limit reached — you’ve used 10 AI searches this hour. Please wait before searching again.', isKeyError: false };
    }
    if (status === 503 || serverCode === 'FIRECRAWL_ERROR') {
      return { msg: 'The property scraping service is temporarily unavailable. Please try again in a few minutes.', isKeyError: false };
    }
    if (status === 404) {
      return { msg: serverMsg || 'No results found for your search criteria.', isKeyError: false };
    }
    return { msg: serverMsg || fallback, isKeyError: false };
  };

  const handleSearch = async (params: SearchParams) => {
    if (!apiReady || !aiApiRef) return;
    setSearchParams(params);
    setSearchLoading(true);
    setSearchError(null);
    setProperties([]);
    setAnalysis(null);
    setHasSearched(true);
    // Reset trends on new search
    setLocations([]);
    setLocationAnalysis(null);
    setHasLoadedTrends(false);

    try {
      const maxPriceInRupees = params.maxBudget * 10_000_000; // Cr → ₹
      const response = await aiApiRef.search({
        city: params.city,
        price: { min: 0, max: maxPriceInRupees },
        type: params.propertyType,
        category: params.category,
      });

      const data = response.data;
      setProperties(data.properties || []);
      setAnalysis(data.analysis || null);

      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      const { msg, isKeyError } = friendlyError(err, 'Search failed. Please try again.');
      setSearchError(msg);
      if (isKeyError) setOpenKeyModal(true); // P1-1: auto-open key modal on 403
    } finally {
      setSearchLoading(false);
    }
  };

  // P2-2: Trends are NOT auto-fired. User explicitly clicks "Load Location Trends".
  const fetchTrends = async (city: string) => {
    if (!apiReady || !aiApiRef) return;
    setTrendsLoading(true);
    setTrendsError(null);
    setLocations([]);
    setLocationAnalysis(null);
    setHasLoadedTrends(true);

    try {
      const response = await aiApiRef.locationTrends(city);
      const data = response.data;
      setLocations(data.locations || []);
      setLocationAnalysis(data.analysis || null);
    } catch (err: any) {
      const { msg, isKeyError } = friendlyError(err, 'Failed to load location trends.');
      setTrendsError(msg);
      if (isKeyError) setOpenKeyModal(true);
    } finally {
      setTrendsLoading(false);
    }
  };


  /* ── Render ──────────────────────────────────────────── */

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <Navbar />

      {/* Hero — search form */}
      {AIHeroSection && (
        <React.Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-12 h-12 border-4 border-[#1B3A5C] border-t-transparent rounded-full animate-spin" /></div>}>
          <AIHeroSection
            onSearch={handleSearch}
            loading={searchLoading}
            externalOpenModal={openKeyModal}
            onModalClosed={() => setOpenKeyModal(false)}
          />
        </React.Suspense>
      )}

      {/* Results (only shown after first search) */}
      <div ref={resultsRef}>
        {hasSearched && AISearchResults && AIAnalysisPanel && (
          <React.Suspense fallback={null}>
            <AISearchResults
              properties={properties}
              loading={searchLoading}
              error={searchError}
              city={searchParams.city}
            />

            <AIAnalysisPanel
              analysis={analysis}
              loading={searchLoading}
              error={searchError}
              city={searchParams.city}
            />
          </React.Suspense>
        )}
      </div>

      {/* P2-2: Location trends — explicit button, not auto-fired */}
      {hasSearched && !searchLoading && properties.length > 0 && AILocationTrends && (
        <React.Suspense fallback={null}>
          {!hasLoadedTrends ? (
            <section className="bg-[#FAFAF8] py-10 border-t border-[#E6E0DA]">
              <div className="max-w-[1200px] mx-auto px-6 text-center">
                <p className="font-inter text-sm text-[#6b7280] mb-4">
                  Want to see price trends and rental yields for {searchParams.city}?
                </p>
                <button
                  onClick={() => fetchTrends(searchParams.city)}
                  className="inline-flex items-center gap-2 bg-[#1B3A5C] hover:bg-[#C05621] text-white font-inter font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-[#1B3A5C]/20"
                >
                  <span className="text-base">&#x1F4C8;</span>
                  Load Location Trends
                </button>
              </div>
            </section>
          ) : (
            <AILocationTrends
              locations={locations}
              analysis={locationAnalysis}
              loading={trendsLoading}
              error={trendsError}
              city={searchParams.city}
            />
          )}
        </React.Suspense>
      )}

      {AICTASection && (
        <React.Suspense fallback={null}>
          <AICTASection />
        </React.Suspense>
      )}
      <Footer />
    </div>
  );
};

export default AIPropertyHubPage;

