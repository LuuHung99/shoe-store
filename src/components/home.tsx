import BannerSlider from "./home/BannerSlider";
import BestSellers from "./home/BestSellers";
import FeaturedCategories from "./home/FeaturedCategories";
import Newsletter from "./home/Newsletter";
import SpecialOffers from "./home/SpecialOffers";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <BannerSlider />
        <FeaturedCategories />
        <BestSellers />
        <SpecialOffers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
