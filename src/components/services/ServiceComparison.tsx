
const ServiceComparison = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cargo-blue mb-3">Service Comparison</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare our shipping methods to find the best option for your needs.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-cargo-blue text-white">
              <tr>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-center">Speed</th>
                <th className="px-6 py-4 text-center">Cost</th>
                <th className="px-6 py-4 text-center">Cargo Size</th>
                <th className="px-6 py-4 text-center">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 font-medium">Air Freight</td>
                <td className="px-6 py-4 text-center">Fast (2-5 days)</td>
                <td className="px-6 py-4 text-center">Higher</td>
                <td className="px-6 py-4 text-center">Small to Medium</td>
                <td className="px-6 py-4 text-center">Urgent shipments, valuable items</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 font-medium">Sea Freight</td>
                <td className="px-6 py-4 text-center">Slow (25-40 days)</td>
                <td className="px-6 py-4 text-center">Lower</td>
                <td className="px-6 py-4 text-center">Large volumes</td>
                <td className="px-6 py-4 text-center">Household goods, bulk items</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Full Container</td>
                <td className="px-6 py-4 text-center">Medium (varies)</td>
                <td className="px-6 py-4 text-center">Medium</td>
                <td className="px-6 py-4 text-center">Flexible</td>
                <td className="px-6 py-4 text-center">Local distribution in Pakistan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
