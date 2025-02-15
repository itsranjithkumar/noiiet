import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Testimonials from './components/Testimonials';
// import FeaturedCategories from './components/FeaturedCategories';
import WhatsAppButton from './components/WhatsAppButton';
// import Contact from './components/Contact';
import About from './components/About';
import Industries from './components/industries';
import Solutions from './components/Solutions';  
import Services from './components/Services';
// import ContactUs from './components/ContactUs';
import Contact from './components/contact';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <Solutions />  
      <Services />
      {/* <FeaturedCategories /> */}
      <Contact />
      <WhatsAppButton />
      {/* <ContactUs /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}