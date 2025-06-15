import CompaniesLogo from "./components/CompaniesLogo";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServiceOne from "./components/ServiceOne";
import ServiceTwo from "./components/ServiceTwo";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CompaniesLogo />
      <ServiceOne />
      <ServiceTwo />
    </>
  );
}

export default App;
