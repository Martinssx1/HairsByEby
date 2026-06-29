import { useState } from "react";
import type { handle } from "./Nav";

import { Phone, MessageCircle, Star, ArrowRight } from "lucide-react";

interface HairProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

function Home({ handleWhatsAppOrder }: handle) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const posters = [
    {
      title: "100% Human Hair",
      desc: "Premium quality human hair that feels and looks natural",
    },
    {
      title: "Fast Delivery",
      desc: "Quick shipping within Lagos and nationwide delivery available",
    },
    {
      title: "Expert Support",
      desc: "Chat with our hair experts for style advice and recommendations",
    },
  ];

  const hairProducts: HairProduct[] = [
    {
      id: 1,
      name: "Silky Straight",
      description: "Premium straight human hair with natural shine",
      price: 45000,
      image: "IMG_0455.PNG",
      category: "straight",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Bouncy Curls",
      description: "Defined curly texture for volume and style",
      price: 52000,
      image: "IMG_0456.PNG",
      category: "curly",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Wavy Crown",
      description: "Soft waves for a natural, elegant look",
      price: 48000,
      image: "IMG_0457.PNG",
      category: "wavy",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Colored Lengths",
      description: "Pre-colored hair with rich tones",
      price: 55000,
      image: "IMG_0458.PNG",
      category: "colored",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Virgin Closure",
      description: "Natural hairline closure for seamless blend",
      price: 38000,
      image: "IMG_0460.PNG",
      category: "closures",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Frontal Lace",
      description: "Full lace frontal with baby hairs",
      price: 65000,
      image: "IMG_0463.PNG",
      category: "closures",
      rating: 5.0,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? hairProducts
      : hairProducts.filter((p) => p.category === selectedCategory);

  const categories = [
    "all",
    "straight",
    "curly",
    "wavy",
    "colored",
    "closures",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 dark:bg-amber-900/30 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 dark:bg-amber-900/20 rounded-full blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-sm font-semibold text-amber-900 dark:text-amber-400 tracking-widest uppercase">
              Premium Hair Collection
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 dark:from-amber-400 dark:via-amber-300 dark:to-amber-400 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="text-amber-900 dark:text-amber-400">
              Hair Story
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium quality human hair extensions for every style. From silky
            straight to bouncy curls, find your perfect match with our curated
            collection.
          </p>
          {/*browse collection*/}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-amber-900 dark:bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-800 dark:hover:bg-amber-500 transition-all duration-300 hover:shadow-lg"
            >
              Browse Collection
            </button>
            <a
              href={handleWhatsAppOrder()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-amber-900 dark:border-amber-400 text-amber-900 dark:text-amber-400 rounded-full font-semibold hover:bg-amber-50 dark:hover:bg-gray-900 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-900 dark:text-amber-400 mb-4">
              Our Collection
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Handpicked hair extensions for every style and preference
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                  selectedCategory === cat
                    ? "bg-amber-900 dark:bg-amber-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-amber-900 dark:text-amber-400 border-2 border-amber-900 dark:border-amber-400 hover:bg-amber-50 dark:hover:bg-gray-700"
                }`}
              >
                {cat === "all" ? "All Hair" : cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6 bg-white dark:bg-gray-800">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredProduct === product.id
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    />
                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                        hoveredProduct === product.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    ></div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-full text-sm font-semibold text-amber-900 dark:text-amber-400 shadow-lg">
                    ₦{product.price.toLocaleString()}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Order Button */}
                  <a
                    href={handleWhatsAppOrder(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      hoveredProduct === product.id
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-amber-900 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-600"
                    }`}
                  >
                    <MessageCircle size={18} />
                    Order on WhatsApp
                    <ArrowRight
                      size={18}
                      className={`transition-transform duration-300 ${
                        hoveredProduct === product.id ? "translate-x-1" : ""
                      }`}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-amber-900 dark:text-amber-400 mb-16 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {posters.map((feature, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-amber-50 dark:from-gray-800 to-white dark:to-gray-900 border border-amber-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">
                  {i === 0 ? "✨" : i === 1 ? "🚚" : "💬"}
                </div>
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-amber-900 dark:bg-amber-950">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl mb-8 text-amber-50 dark:text-amber-100">
            Join thousands of satisfied customers. Chat with us on WhatsApp for
            personalized recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={handleWhatsAppOrder("I want to know more!")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </a>
            <a
              href="tel:+2349113086234"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
