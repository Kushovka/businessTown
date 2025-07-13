import Connect from "../components/contact/Connect";
import CTA from "../components/contact/CTA";
import Discover from "../components/contact/Discover";
import Explore from "../components/contact/Explore";
import GetInTouch from "../components/contact/GetInTouch";
import Sub from "../components/contact/Sub";

const Contact = () => {
  return (
    <main>
      <GetInTouch />
      <Sub />
      <Connect />
      <Discover />
      <Explore />
      <CTA />
    </main>
  );
};

export default Contact;
