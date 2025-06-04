
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";
import { generateSEOData } from "@/utils/seo-utils";
import { useLocation } from "react-router-dom";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

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
    canonicalUrl: `https://cargotopakistan.ae${location.pathname}`,
    h1: "Professional Cargo Services"
  };

  const finalSeoData = seoData || defaultSeoData;

  // Check if current page is homepage
  const isHomepage = location.pathname === '/';

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [{ name: 'Home', path: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable name
      let name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() +  word.slice(1))
        .join(' ');

      // Special handling for specific paths
      if (segment === 'services') name = 'Services';
      else if (segment === 'areas') name = 'Service Areas';
      else if (segment.startsWith('pakistan-cargo-to-')) {
        const cityName = segment.replace('pakistan-cargo-to-', '');
        name = cityName.charAt(0).toUpperCase() + cityName.slice(1) + ' Cargo';
      }

      breadcrumbs.push({
        name,
        path: currentPath,
        isLast: index === pathSegments.length - 1
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <>
      <SEOHead seoData={finalSeoData} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        
        {/* Only show on non-homepage */}
        {!isHomepage && (
          <section className="py-4 bg-gray-50 border-b">
            <div className="container-custom">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center">
                      <BreadcrumbItem>
                        {!crumb.isLast ? (
                          <BreadcrumbLink asChild>
                            <Link to={crumb.path}>{crumb.name}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>
        )}
        
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
