import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import BookAppointment from './components/BookAppointment';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <BookAppointment />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
