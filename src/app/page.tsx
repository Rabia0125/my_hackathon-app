import Hero from "@/components/hero";
import Editors from "@/components/editors";
import Footer from "@/components/footer";
import GreenDiv from "@/components/green_div";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/product_card";
import Whitediv from "@/components/white_div";
import Topbar from "@/components/topbar";

export default function Home(){
  return(
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Footer/> 
           
    </div>
  )
}
