
import { MapPin } from "lucide-react";

interface LocationProps {
  city: string;
  country: string;
  isHighlighted?: boolean;
}

const LocationItem = ({ city, country, isHighlighted = false }: LocationProps) => (
  <div className={`p-3 rounded-lg flex items-center ${
    isHighlighted ? "bg-cargo-lightBlue text-cargo-blue" : "bg-white hover:bg-gray-50"
  } shadow-sm transition-colors`}>
    <MapPin className={`h-5 w-5 mr-2 ${isHighlighted ? "text-cargo-blue" : "text-cargo-orange"}`} />
    <div>
      <p className="font-medium">{city}</p>
      <p className="text-sm text-gray-500">{country}</p>
    </div>
  </div>
);

const ServiceAreas = () => {
  const originLocations = [
    { city: "London", country: "United Kingdom" },
    { city: "Manchester", country: "United Kingdom" },
    { city: "Birmingham", country: "United Kingdom" },
    { city: "New York", country: "United States" },
    { city: "Los Angeles", country: "United States" },
    { city: "Toronto", country: "Canada" },
    { city: "Dubai", country: "UAE" },
    { city: "Sydney", country: "Australia" },
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
          <h2 className="text-3xl font-bold text-cargo-blue mb-3">Our Service Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide cargo services from major cities worldwide to all major destinations in Pakistan.
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
