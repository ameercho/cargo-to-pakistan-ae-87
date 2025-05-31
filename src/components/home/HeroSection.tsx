
import { ShuffleHero } from "@/components/ui/shuffle-grid";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white">
      <div className="container-custom">
        <ShuffleHero />
      </div>
    </section>
  );
};

export default HeroSection;
