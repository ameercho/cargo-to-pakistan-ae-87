
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "@/constants";

const NavigationLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold text-cargo-blue">
        {COMPANY_INFO.name}
      </span>
    </Link>
  );
};

export default NavigationLogo;
