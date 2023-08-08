import Navbar from "../components/Navbar/Navbar";

import BioSec from "../components/AboutPage/BioSec/BioSec";
import SkillsSec from "../components/AboutPage/SkillsSec/SkillsSec";
import ExpSec from "../components/AboutPage/ExpSec/ExpSec";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <BioSec />
      <SkillsSec />
      <ExpSec />
      <Footer />
    </>
  );
}
