import AOS from "aos";
import "aos/dist/aos.css";

export default function aosConfig() {
  AOS.init({
    offset: 200,
    duration: 750,
    easing: "ease",
    delay: 100,
  });
  AOS.refresh();
}
