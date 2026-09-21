
import { SERVICE_FEATURES } from "./utils";

const ServicesFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
      {SERVICE_FEATURES.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div key={index} className="text-center">
            <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm text-gray-200">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesFeatures;
