import ArrivalSection from "../../components/ArrivalSection/ArrivalSection";
import ClientSection from "../../components/ClientSection/ClientSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroArea from "../../components/HeroArea/HeroArea";
import OurProducts from "../../components/OurProductsPage/OurProducts/OurProducts";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";
import WhySection from "../../components/WhySection/WhySection";

function HomePage() {
  return (
    <>
      <Header />
      <HeroArea />
      <WhySection />
      <ArrivalSection />
      <OurProducts />
      <SubscribeSection />
      <ClientSection />
      <Footer />
    </>
  );
}

export default HomePage;
