
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { SEOData } from "@/types";

interface LayoutProps {
  children: React.ReactNode;
  seoData?: SEOData;
}

const Layout = ({ children, seoData }: LayoutProps) => {
  return (
    <ErrorBoundary>
      {seoData && <SEOHead seoData={seoData} />}
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;
