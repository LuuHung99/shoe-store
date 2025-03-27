import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our products, orders, or anything else? We're
              here to help. Reach out to us using any of the methods below.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Shoe Street
                  <br />
                  Fashion District
                  <br />
                  City, Country
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">
                  Customer Service:
                  <br />
                  +1 234 567 890
                  <br />
                  Mon-Fri, 9am-5pm
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">
                  General Inquiries:
                  <br />
                  info@shoestore.com
                  <br />
                  Support: support@shoestore.com
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 8pm
                  <br />
                  Saturday: 10am - 6pm
                  <br />
                  Sunday: 11am - 5pm
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                    <p>
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                ) : null}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* In a real app, you would embed a Google Map or similar here */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <div className="text-center p-4">
                      <MapPin className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-700">
                        Map would be embedded here in a real application
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium mb-2">ShoeStore Flagship</h3>
                  <p className="text-gray-600 mb-4">
                    Our flagship store is located in the heart of the Fashion
                    District, easily accessible by public transportation. Street
                    parking is available, and there's a parking garage just a
                    block away.
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find quick answers to our most commonly asked questions. If you
                can't find what you're looking for, please contact us directly.
              </p>
            </div>

            <div className="max-w-3xl mx-auto divide-y">
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">
                  What are your shipping options?
                </h3>
                <p className="text-gray-600">
                  We offer standard shipping (3-5 business days), express
                  shipping (1-2 business days), and same-day delivery in select
                  cities. Shipping is free for orders over $100.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">
                  How do I return a product?
                </h3>
                <p className="text-gray-600">
                  Returns are free within 30 days of purchase. You can initiate
                  a return through your account or by contacting customer
                  service. The product must be in its original condition with
                  all tags attached.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">
                  Do you offer international shipping?
                </h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International
                  shipping rates and delivery times vary by location. Please
                  note that import duties and taxes may apply.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">
                  How do I find my shoe size?
                </h3>
                <p className="text-gray-600">
                  We provide a detailed size guide for each brand on our
                  website. You can also visit one of our stores for a
                  professional fitting or contact our customer service for
                  assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
