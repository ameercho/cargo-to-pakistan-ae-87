
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LinkItem {
  name: string;
  url: string;
  description: string;
}

interface InternalLinksSectionProps {
  title: string;
  links: LinkItem[];
  className?: string;
}

const InternalLinksSection = ({ title, links, className = "" }: InternalLinksSectionProps) => {
  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cargo-blue mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of cargo services and coverage areas throughout UAE and Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link 
              key={index}
              to={link.url}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-cargo-blue hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-cargo-blue group-hover:text-cargo-green transition-colors">
                  {link.name}
                </h3>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-cargo-blue transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinksSection;
