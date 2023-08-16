import HomeHero from "../components/home-components/HeroSection";
import PhotoProfile from "../components/home-components/PhotographerProfile";
import homeImages from "../components/home-components/home-images";
import Masonry from "../components/GUI/masonry";
import Ads from "../components/home-components/homeAds";
import Packages from "../components/GUI/PackageCard";
import Footer from "../components/GUI/footer";

function HomePage() {
  return (
    <>
    <HomeHero/>
    <PhotoProfile/>
    <Masonry galleryImages={homeImages} />
    <Ads/>
    <Packages/>
    
    </>
  )};

export default HomePage;
