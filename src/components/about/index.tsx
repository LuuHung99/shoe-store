import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&q=80"
              alt="About ShoeStore"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Us
                </h1>
                <p className="text-xl max-w-3xl mx-auto">
                  We're passionate about providing the best footwear for every
                  step of your journey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600">
                Founded in 2010, ShoeStore began with a simple mission: to
                provide high-quality, comfortable, and stylish footwear for
                everyone. What started as a small boutique has grown into a
                trusted brand with customers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                  alt="Our beginnings"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Beginnings</h3>
                <p className="text-gray-600 mb-4">
                  Our founder, Jane Smith, started ShoeStore after struggling to
                  find comfortable yet stylish shoes for her active lifestyle.
                  Frustrated with having to choose between comfort and style,
                  she decided to create a brand that offered both.
                </p>
                <p className="text-gray-600 mb-4">
                  The first ShoeStore opened in a small storefront in downtown
                  Portland. With a carefully curated selection of footwear and a
                  commitment to exceptional customer service, the store quickly
                  gained a loyal following.
                </p>
                <p className="text-gray-600">
                  Today, we operate both online and through our flagship stores
                  across the country, but our commitment to quality, comfort,
                  and style remains unchanged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600">
                At ShoeStore, our values guide everything we do, from the
                products we select to the way we interact with our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We believe in offering products that are built to last. Every
                  shoe in our collection is carefully selected for its quality
                  materials and craftsmanship.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Affordability</h3>
                <p className="text-gray-600">
                  Great shoes shouldn't break the bank. We work directly with
                  manufacturers to offer fair prices without compromising on
                  quality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental impact. We
                  partner with brands that use sustainable materials and ethical
                  manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600">
                Meet the passionate individuals behind ShoeStore who work
                tirelessly to bring you the best footwear experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
                    alt="Jane Smith"
                    className="w-32 h-32 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-primary">Founder & CEO</p>
              </div>

              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="John Doe"
                    className="w-32 h-32 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-primary">Head of Design</p>
              </div>

              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Sarah Johnson"
                    className="w-32 h-32 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-primary">Marketing Director</p>
              </div>

              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                    alt="Michael Chen"
                    className="w-32 h-32 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-primary">Customer Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals to join our team.
              Check out our current openings or visit one of our stores to
              experience the ShoeStore difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="/careers">View Careers</a>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
