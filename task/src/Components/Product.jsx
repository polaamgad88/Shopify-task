import Footer from "./Footer"
import Header from "./Header"
import Offersline from "./Offersline";
import Bag1 from "../Imgs/Bag1.png"


function Product() {
    return (
      <div className="h-screen ">
      <Offersline/>
      <Header/>
      <a href="/Cart"> 

      <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto ml-80">
        <div class="flex flex-wrap -m-4">



          <div class="w-80 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
            <p className="text-left text-gray-500 text-3xl"> Y Bag  </p>
            <p className="text-left text-black text-3xl"> 549.00 EGP</p>
            <p className="border-b border-black border-opacity-50 mt-60 text-left text-black "> Product Info <span class="ml-36">-</span></p>
            <p className="border-b  border-black border-opacity-50 mt-2 text-left text-black w-full "> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero </p>
            <p className="border-b  border-black border-opacity-50 mt-7 text-left text-black "> Details <span class="ml-44">+</span> </p>
            <p className="border-b border-black border-opacity-50 mt-7 text-left text-black "> Refund & Return <span class="ml-28">-</span> </p>
            </div>
          </div>



          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center object-center">
              <img  class="w-full h-full "
              src={Bag1}/>
              
            </div>
          </div>




          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
            <p className="text-left mb-3 font-semibold" >Choose Size</p>
            <div class="flex">
            <label for="size-small" class="inline-flex items-center bg-gray-300 rounded-full mx-2 px-3 py-2 cursor-pointer">
    <input type="radio" id="size-small" name="size" value="small" class="hidden" />
    <span class="text-sm font-medium text-gray-900">XS</span>
  </label>
  <label for="size-small" class="inline-flex items-center bg-gray-300 rounded-full mx-2 px-3 py-2 cursor-pointer">
    <input type="radio" id="size-small" name="size" value="small" class="hidden" />
    <span class="text-sm font-medium text-gray-900">S</span>
  </label>

  <label for="size-medium" class="inline-flex items-center bg-gray-300 rounded-full mx-2 px-3 py-2 cursor-pointer">
    <input type="radio" id="size-medium" name="size" value="medium" class="hidden" />
    <span class="text-sm font-medium text-gray-900">M</span>
  </label>
  <label for="size-large" class="inline-flex items-center bg-gray-300 rounded-full mx-2 px-3 py-2 cursor-pointer">
    <input type="radio" id="size-large" name="size" value="large" class="hidden" />
    <span class="text-sm font-medium text-gray-900">L</span>
  </label>
  
</div>
<p className="text-left mb-3 font-semibold mt-6" >Choose Color</p>
<div class="flex">
  <label for="color-red" class="inline-flex items-center bg-white rounded-full w-8 h-8 border-2 border-black mx-2 px-3 py-2 cursor-pointer">
    <input type="radio" id="color-red" name="color" value="white" class="hidden" />
  </label>
  <label for="color-blue" class="inline-flex items-center bg-black rounded-full w-8 h-8 border-2 border-black mx-2 px-3 py-2 cursor-pointer">
    <input type="radio" id="color-blue" name="color" value="black" class="hidden" />
  </label>
  <label for="color-green" class="inline-flex items-center bg-green-700 rounded-full w-8 h-8 border-2 border-black mx-2 px-3 py-2 cursor-pointer">
    <input type="radio" id="color-green" name="color" value="green" class="hidden" />
  </label>
  <label for="color-green" class="inline-flex items-center bg-amber-700 rounded-full w-8 h-8 border-2 border-black mx-2 px-3 py-2 cursor-pointer">
  <input type="radio" id="color-green" name="color" value="brown" class="hidden" />
</label>
</div>

<button class="bg-black text-white font-normal py-2 px-4 rounded mr-60 mt-96">
  Out of Stock - Notify me!
</button>

          
            </div>
          </div>


         



        </div>
      </div>
    </section>

<div className="ml-60 mr-60">  
  <div class="text-2xl  text-28 leading-34 font-semibold mb-4 text-center ">
    You May Also Like
  </div>
  <div class="flex flex-wrap">
    <div class="w-1/5 p-2">
      <img src={Bag1} alt="Item 1" class="w-full"/>
      <p className="text-center text-gray-400">Bag</p>


    </div>
    <div class="w-1/5 p-2">
      <img src={Bag1} alt="Item 2" class="w-full"/>
      <p className="text-center text-gray-400">Bag</p>

    </div>
    <div class="w-1/5 p-2">
      <img src={Bag1} alt="Item 3" class="w-full"/>
      <p className="text-center text-gray-400">Bag</p>

    </div>
    <div class="w-1/5 p-2">
      <img src={Bag1} alt="Item 4" class="w-full"/>
      <p className="text-center text-gray-400">Bag</p>

    </div>
    <div class="w-1/5 p-2">
      <img src={Bag1} alt="Item 5" class="w-full "/>
      <p className="text-center text-gray-400 mb-10">Bag</p>

    </div>
  </div>
  </div>
  </a>
  <Footer/>    
  </div>
    );
  }
  
  export default Product;