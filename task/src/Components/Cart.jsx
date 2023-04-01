import Footer from "./Footer"
import Header from "./Header"
import Offersline from "./Offersline";
import Bag from "../Imgs/Bag.png"

function Cart() {
    return (
      <div  className="h-screen ">
      <Offersline/>
      <Header/>
      <p class=" font-normal tracking-normal ml-80 mt-7
      leading-normal text-2xl md:text-3xl lg:text-4xl font-serif">Bag</p>


      <div class="grid grid-cols-4 ml-80 gap-4 mt-9 border-b">
       <div class="">Product</div>
       <div class="ml-40">Price</div>
       <div class="ml-7">Quantity</div>
       <div class="ml-7">Total</div>
      </div>





      <main class="container mx-auto my-8 ml-80">
      <div class="flex flex-col mr-64">
      
          <div class="flex items-center border-b py-4 ">
          <img src={Bag} alt="Product image" class="w-24 h-24 object-cover mr-4"/>
          <div class=" mr-96 ">
            <h2 class="font-bold text-gray-600">Y Bag</h2>
            <p class="text-gray-600 cursor-pointer mt-2 underline">Remove</p>
          </div>

          <div class="mr-44 w-48">
            <p class="text-gray-500">549.00 EGP</p>
          </div>


          <div class="flex items-center border border-gray-500 border-opacity-25 shadow-sm mr-56 ">
          <div class="flex">
            <button type="button" class="px-2 py-1 bg-white text-gray-700 hover:bg-gray-400 focus:outline-none focus:shadow-outline rounded-l"
                    onclick="in">
              <span>-</span>
            </button>
            <input type="number" id="quantity" name="quantity" value="1"
                   class="px-2 py-1 text-center border-gray-300 rounded-r w-16"/>
            <button type="button" class="px-2 py-1 bg-white text-gray-700 hover:bg-gray-400 focus:outline-none focus:shadow-outline rounded-r"
                    onclick="increase()">
              <span>+</span>
            </button>
          </div>
        </div>



          
          <div class="w-64">
            <p class="text-gray-500">1,098.00 EGP</p>
          </div>
          </div>
        </div>




        <div class="flex flex-col mr-64">
      
        <div class="flex items-center border-b py-4 ">
        <img src={Bag} alt="Product image" class="w-24 h-24 object-cover mr-4"/>
        <div class=" mr-96  ">
          <h2 class="font-bold text-gray-600">Y Bag</h2>
          <p class="text-gray-600 cursor-pointer mt-2 underline">Remove</p>
        </div>

        <div class="mr-44 w-full">
        <p class="text-gray-500 line-through">549.00 EGP</p>
        <p class="text-gray-500">200.00 EGP</p>
          <p class="text-red-500 w-full">50% OFF(-350 EGP)</p>
        </div>

        <div class="flex items-center border border-gray-500 border-opacity-25 shadow-sm mr-56 ">
  <div class="flex">
    <button type="button" class="px-2 py-1 bg-white text-gray-700 hover:bg-gray-400 focus:outline-none focus:shadow-outline rounded-l"
            onclick="in">
      <span>-</span>
    </button>
    <input type="number" id="quantity" name="quantity" value="1"
           class="px-2 py-1 text-center border-gray-300 rounded-r w-16"/>
    <button type="button" class="px-2 py-1 bg-white text-gray-700 hover:bg-gray-400 focus:outline-none focus:shadow-outline rounded-r"
            onclick="increase()">
      <span>+</span>
    </button>
  </div>
</div>
         
         
        <div class="w-full">
          <p class="text-gray-500">1,098.00 EGP</p>
        </div>
        </div>
      </div>



        


      <div class="flex justify-end mt-16 px-80 py-20">
        <div class="w-40">
          <p class="text-right text-gray-500">Subtotal:  <span class="font-extrabold text-black">3,000EGP</span></p>
          <button class= "mt-9 w-40 bg-black  text-white px-6 py-2 rounded float-right">
            Checkout
          </button>
        </div>
      </div>
    </main>
      </div>
    );
  }
  
  export default Cart;


  