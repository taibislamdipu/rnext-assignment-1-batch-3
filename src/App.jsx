import CompaniesLogo from "./components/CompaniesLogo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ServiceOne from "./components/ServiceOne";
import ServiceTwo from "./components/ServiceTwo";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";
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
      <FAQ />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
