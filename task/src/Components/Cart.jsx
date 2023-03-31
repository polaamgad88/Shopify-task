import Footer from "./Footer"
import Header from "./Header"
import Offersline from "./Offersline";

function Cart() {
    return (
      <div className="h-screen ">
      <Offersline/>
      <Header/>
      <p class=" font-normal tracking-normal ml-80 mt-7
      leading-normal text-2xl md:text-3xl lg:text-4xl font-serif">Cart</p>
    
      </div>
    );
  }
  
  export default Cart;