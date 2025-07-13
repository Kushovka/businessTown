import Reviews from "../components/home/Reviews";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import Sub from "../components/home/Sub";
import Questions from "../components/home/Questions";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Reviews />
      <Questions />
      <CTA />
    </main>
  );
};

export default Home;
