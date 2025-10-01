import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
   
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
      
    </div>
  );
};

export default Index;
