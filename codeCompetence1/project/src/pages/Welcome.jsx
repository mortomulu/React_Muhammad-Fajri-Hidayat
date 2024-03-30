import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import WelcomeSection from "../components/WelcomeSection";
import Contact from "../components/ContactUs";

export default function Welcome() {
  return (
    <>
      <Header />
      <WelcomeSection />
        <Contact/>
      <Footer />
    </>
  );
}
