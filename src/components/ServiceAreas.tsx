
import { MapPin } from "lucide-react";

interface LocationProps {
  city: string;
  country: string;
  isHighlighted?: boolean;
}

const LocationItem = ({ city, country, isHighlighted = false }: LocationProps) => (
  <div className={`location-card ${
    isHighlighted ? "bg-cargo-lightBlue text-cargo-blue" : "bg-white hover:bg-gray-50"
  }`}>
    <MapPin className={`h-5 w-5 mr-2 ${isHighlighted ? "text-cargo-blue" : "text-cargo-orange"}`} />
    <div>
      <p className="font-medium">{city}</p>
      <p className="text-sm text-gray-500">{country}</p>
    </div>
  </div>
);

const ServiceAreas = () => {
  const originLocations = [
    { city: "Dubai", country: "UAE", isHighlighted: true },
    { city: "Abu Dhabi", country: "UAE", isHighlighted: true },
    { city: "Sharjah", country: "UAE" },
    { city: "Ajman", country: "UAE" },
    { city: "Ras Al Khaimah", country: "UAE" },
    { city: "Fujairah", country: "UAE" },
    { city: "Umm Al Quwain", country: "UAE" },
    { city: "Al Ain", country: "UAE" },
  ];

  const destinationLocations = [
    { city: "Karachi", country: "Pakistan", isHighlighted: true },
    { city: "Lahore", country: "Pakistan", isHighlighted: true },
    { city: "Islamabad", country: "Pakistan", isHighlighted: true },
    { city: "Peshawar", country: "Pakistan" },
    { city: "Quetta", country: "Pakistan" },
    { city: "Faisalabad", country: "Pakistan" },
    { city: "Multan", country: "Pakistan" },
    { city: "Sialkot", country: "Pakistan" },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Service Areas</h2>
          <p className="section-description">
            We provide cargo services from major cities in the UAE to all major destinations in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-cargo-blue mb-4 flex items-center">
              <span className="bg-cargo-blue text-white rounded-full w-7 h-7 inline-flex items-center justify-center mr-2 text-sm">
                1
              </span>
              Origin Locations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {originLocations.map((location, index) => (
                <LocationItem
                  key={`origin-${index}`}
                  city={location.city}
                  country={location.country}
                  isHighlighted={location.isHighlighted}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cargo-blue mb-4 flex items-center">
              <span className="bg-cargo-green text-white rounded-full w-7 h-7 inline-flex items-center justify-center mr-2 text-sm">
                2
              </span>
              Destination Locations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destinationLocations.map((location, index) => (
                <LocationItem
                  key={`destination-${index}`}
                  city={location.city}
                  country={location.country}
                  isHighlighted={location.isHighlighted}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
