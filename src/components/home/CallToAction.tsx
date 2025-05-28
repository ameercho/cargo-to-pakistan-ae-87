import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-12 bg-cargo-green text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4 text-neutral-50">Ready to Ship to Pakistan?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get started today and experience our reliable cargo services.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-cargo-orange hover:bg-orange-600 text-white tap-target" size="lg">
            Get a Free Quote
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 tap-target" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
