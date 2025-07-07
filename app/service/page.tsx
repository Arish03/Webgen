export default function Services() {
    return (
      <div className="min-h-screen bg-[#FFFBFF] text-[#1B1B2F] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 mb-12">
            We offer cutting-edge solutions to help you build stunning, professional websites effortlessly.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">Web Design</h2>
              <p className="text-gray-600">
                Get a sleek and modern website tailored to your business needs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">SEO Optimization</h2>
              <p className="text-gray-600">
                Improve your website’s search ranking with our expert SEO services.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h2>
              <p className="text-gray-600">
                Build a fully functional online store with seamless payment integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  