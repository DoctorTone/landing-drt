import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import DemoPage from "./components/DemoPage";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Benefits />
      <DemoPage />
      <Testimonials />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
