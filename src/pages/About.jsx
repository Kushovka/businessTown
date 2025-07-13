import AboutCTA from "../components/about/AboutCTA";
import MeetTeam from "../components/about/MeetTeam";
import NavExp from "../components/about/NavExp";
import OurAchiev from "../components/about/OurAchiev";
import OurClients from "../components/about/OurClients";
import OurStory from "../components/about/OurStory";
import OurValues from "../components/about/OurValues";

const About = () => {
  return (
    <main>
      <OurStory />
      <OurValues />
      <OurAchiev />
      <NavExp />
      <MeetTeam />
      <OurClients />
      <AboutCTA />
    </main>
  );
};

export default About;
