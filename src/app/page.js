import { Carousel } from "../components/Carousel";
import { Solution } from "../components/Solution";
import { Goals } from "../components/Goals";
import Good from "../components/Good";
import { Contact } from "../components/Contact";
import  Blog  from "@/components/Blog";
import carouselData from "@/data/carouselData.json"

const slides = carouselData.slides; 

export default function Home() {
  return (
    <div>
      <Carousel data={slides} /> 
      <Solution/>
      <Goals/>
      <Good/>
      <Blog/>
      <Contact/>
    </div>
  );
}
