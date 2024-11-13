import AfricaNews from "./africaNews";
import HeroGrid from "./heroGrid";
import HeroSection from "./heroSection";
import "./home.css";
import LetestNews from "./latestNews";
import WorldNews from "./worldNews";

const Home = () => {
  return (
    <main className="bg-white py-6">
      <HeroSection />
      <HeroGrid />
      <AfricaNews />
      <WorldNews />
      <LetestNews />
    </main>
  );
};

export default Home;
