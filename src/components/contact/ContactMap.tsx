
const ContactMap = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-cargo-blue mb-3">Our Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our office in Karachi, Pakistan to discuss your cargo needs in person.
          </p>
        </div>
        
        <div className="bg-white p-2 rounded-lg shadow-sm">
          {/* Placeholder for map - in a real app, you would integrate Google Maps or similar */}
          <div className="bg-gray-200 h-[400px] w-full rounded flex items-center justify-center">
            <p className="text-gray-500">Map placeholder - Google Maps would be integrated here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
