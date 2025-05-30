// import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin as LocationIcon } from "lucide-react"; //MapPin, Ruler, Building, Target
import ProjectGallery from "@/components/ProjectGallery";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black/70 to-black/50 absolute z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Land surveying equipment"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Land & Geospatial Surveying,
            <br />
            <span className="font-light">Done Right.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Yiscotech Global Services Limited offers expert surveying solutions
            with precision tools and licensed professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yiscotechglobal01@gmail.com, yisco4yekeen89@gmail.com ?subject=Request%20Quote"
              className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-black mb-8">About Us</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Yiscotech Global Services Limited is a licensed land surveying
                  firm offering accurate and reliable geospatial services.
                </p>
                <p>
                  With years of field experience, we support estate developers,
                  architects, engineers, and private landowners.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional surveying team at work"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Property boundary survey"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Land & Property Survey
              </h3>
              <p className="text-gray-600 text-sm">
                Precise boundary determination and property mapping
              </p>
            </div>

            <div className="text-center group">
              <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Topographic mapping equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Topographic Mapping
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed terrain and elevation mapping services
              </p>
            </div>

            <div className="text-center group">
              <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Boundary marking stakes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Boundary Reestablishment
              </h3>
              <p className="text-gray-600 text-sm">
                Professional boundary marking and verification
              </p>
            </div>

            <div className="text-center group">
              <div className="w-full h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Construction site layout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Construction Layout
              </h3>
              <p className="text-gray-600 text-sm">
                Accurate staking and layout for construction projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects / Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">
            Latest Projects
          </h2>

          <ProjectGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone size={24} className="mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+1234567890"
                className="hover:text-gray-300 transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div>
              <Mail size={24} className="mx-auto mb-4" strokeWidth={1} />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:yiscotechglobal01@gmail.com, yisco4yekeen89@gmail.com "
                className="hover:text-gray-300 transition-colors"
              >
                yiscotechglobal01@gmail.com, yisco4yekeen89@gmail.com
              </a>
            </div>

            <div>
              <LocationIcon
                size={24}
                className="mx-auto mb-4"
                strokeWidth={1}
              />
              <h3 className="font-semibold mb-2">Office</h3>
              <p className="text-gray-300">
                123 Survey Street
                <br />
                Professional District
                <br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
