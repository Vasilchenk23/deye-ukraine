import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Solution } from "../components/Solution";
import { Goals } from "../components/Goals";
import Goods from "../components/Goods";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import carouselData from "@/data/carouselData.json"

const slides = carouselData.slides; 

export default function Home() {
  return (
    <div>
      <Header/>
      <Carousel data={slides} /> 
      <Solution/>
      <Goals/>
      <Goods/>
      <Contact/>
      <Footer/>
    </div>
  );
}
