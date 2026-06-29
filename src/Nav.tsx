import { useState, useEffect } from "react";

import { Phone, MessageCircle } from "lucide-react";
import Themebutton from "./Theme/Themebutton";
export type handle = {
  handleWhatsAppOrder: (productName?: string) => string;
};
function Nav({ handleWhatsAppOrder }: handle) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-amber-900 to-amber-700 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">
          HairsByEby
        </div>
        <div className="flex gap-4 items-center">
          <Themebutton />
          <a
            href={handleWhatsAppOrder()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
          >
            <MessageCircle size={18} />
            Order Now
          </a>
          <a
            href="tel:+2349113086234"
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Phone size={20} className="text-amber-900 dark:text-amber-400" />
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
