
import React from 'react';

interface LocationCoverageProps {
  title: string;
  locations: string[];
}

const LocationCoverage = ({ title, locations }: LocationCoverageProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-cargo-blue mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {locations.slice(0, 8).map((location, index) => (
          <div key={index} className="p-3 bg-white rounded shadow-sm">{location}</div>
        ))}
      </div>
      <p className="text-center mt-4 text-gray-600 text-sm">
        ...and all other areas
      </p>
    </div>
  );
};

export default LocationCoverage;
