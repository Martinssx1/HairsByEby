import type { handle } from "./Nav";
function Footer({ handleWhatsAppOrder }: handle) {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
              HairsByEby
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Premium hair extensions for every style
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-amber-400 transition"
                >
                  Shop Now
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleWhatsAppOrder()}
                  className="hover:text-amber-400 transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 dark:text-gray-500">
              WhatsApp: +234 911 308 6234
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              Email: eekeh@35yahoo.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; 2026 HairsByEby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
