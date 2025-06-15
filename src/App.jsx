import CompaniesLogo from "./components/CompaniesLogo";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ServiceOne from "./components/ServiceOne";
import ServiceTwo from "./components/ServiceTwo";
import Testimonial from "./components/Testimonial";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CompaniesLogo />
      <ServiceOne />
      <ServiceTwo />
      <Testimonial />
      <Pricing />
    </>
  );
}

export default App;
