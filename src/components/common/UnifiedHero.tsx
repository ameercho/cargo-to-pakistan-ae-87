
import { HeroSectionProps } from "@/types";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const UnifiedHero = ({ 
  title, 
  subtitle, 
  breadcrumbs = [], 
  showCTA = false, 
  backgroundImage,
  className = "" 
}: HeroSectionProps) => {
  const gradientClasses = "bg-gradient-to-br from-cargo-blue to-cargo-green";
  
  return (
    <section className={`py-16 text-white ${gradientClasses} ${className}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 text-gray-100">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {crumb.href ? (
                      <Link 
                        to={crumb.href} 
                        className="hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-medium">{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <ChevronRight className="ml-2 h-4 w-4" />
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTA Button */}
          {showCTA && (
            <div className="mt-8">
              <Link 
                to="/contact"
                className="inline-block bg-cargo-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UnifiedHero;
