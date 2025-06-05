
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { getCanonicalUrl } from "@/utils/seo-utils";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  seoData?: any;
}

const Layout = ({ children, seoData }: LayoutProps) => {
  const location = useLocation();
  
  // Generate SEO data based on current path if not provided
  const defaultSeoData = {
    title: "Cargo to Pakistan - Professional Shipping Services",
    description: "Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery.",
    keywords: "cargo to pakistan, shipping services, uae pakistan cargo",
    canonicalUrl: getCanonicalUrl(location.pathname),
    h1: "Professional Cargo Services"
  };

  const finalSeoData = seoData || defaultSeoData;

  return (
    <>
      <SEOHead seoData={finalSeoData} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
