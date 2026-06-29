import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";

import Home from "./Home.tsx";

function App() {
  const generalEnquiries = " I want make an inquiry on what's available  ";
  const handleWhatsAppOrder = (productName: string = generalEnquiries) => {
    const message = `Hi! I'm interested, ${productName} from your website. Can you provide more details?`;
    const phoneNumber = "2349113086254";

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };
  return (
    <>
      <Nav handleWhatsAppOrder={handleWhatsAppOrder} />
      <Home handleWhatsAppOrder={handleWhatsAppOrder} />
      <Footer handleWhatsAppOrder={handleWhatsAppOrder} />
    </>
  );
}

export default App;
