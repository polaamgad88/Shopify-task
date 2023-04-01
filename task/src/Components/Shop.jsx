import Footer from "./Footer"
import Header from "./Header"
import Offersline from "./Offersline";

function Shop() {
    return (
      <div className="h-screen ">
      <Offersline/>
      <Header/>
      <a href="/Product">

      <p class=" font-normal tracking-normal ml-80 mt-7
      leading-normal text-2xl md:text-3xl lg:text-4xl font-serif">Shop</p>

      
    <div className="mr-80 ml-80 mt-8">  
    <div class="mx-auto w-full md:w-500 flex items-center rounded-full border-2 border-gray-300 bg-white">
      <input type="text" placeholder="Write Something..." class="flex-1 bg-transparent focus:outline-none px-3 py-3"/>
      <button class="mx-2 bg-white text-black py-1 px-3 rounded-full">All Fields </button>
      <button class="mx-2 bg-black text-white py-1 px-3 rounded-full">Clothing</button>
      <button class="mx-2 bg-white text-black py-1 px-3 rounded-full">Bags</button>
      <button class="mx-2 bg-white text-black py-1 px-3 rounded-full">Accessories</button>

      <div class="bg-black w-8 h-8 flex items-center justify-center rounded-full">
      <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-full border
       border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      <span class="sr-only">Search</span>
  </button>
      </div>
    </div>
    </div>



    <div class="bg-white p-8 ml-72 mr-72">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    
      
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
         
    </div>
  </div>
  
  
  
  
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  
  
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  
  
  <div class="relative bg-white rounded-none overflow-hidden  h-[500px]">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="absolute inset-x-0 bottom-0 p-4 bg-white">
      <h3 class="text-gray-900 text-lg font-medium text-center">Bag</h3>
          <h3 class="text-gray-900 text-lg font-medium text-center">549.00 EGP</h3>
  
    </div>
  </div>
  
  
    </div>
  </div>
  </a>

<Footer/>

    



      </div>
    );
  }
  
  export default Shop;