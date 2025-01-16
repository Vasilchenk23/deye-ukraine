// import { Carousel } from "../components/Carousel";
import { Solution } from "../components/Solution";
import WhyUs from "../components/WhyUs";
import Advantages from "@/components/Advantages";
import Good from "../components/Good";
import { Contact } from "../components/Contact";
import  Blog  from "@/components/Blog";
// import carouselData from "@/data/carouselData.json"

// const slides = carouselData.slides; 

export default function Home() {
  return (
    <div>
      {/* <Carousel data={slides} />  */}
      <Solution/>
      <Advantages/>
      <Good/>
      <WhyUs/>
      <Blog/>
      <Contact/>
    </div>
  );
}
