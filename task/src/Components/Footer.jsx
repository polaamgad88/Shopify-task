function Footer() {

    return (
     
      <footer 
        class="bg-neutral-100 text-center border-t-2 text-neutral-600 dark:bg-white dark:text-black lg:text-left">
    
        <p class="flex items-center justify-center font-light text-3xl opacity-60 h-16 bg-white text-trueGray-500">LOGO</p>


      <div class=" grid-1 grid 1 md:grid-cols-4 lg:grid-cols-4 mx-1 py-10 text-center md:text-left">
        
      <div class="ml-44 ">
          <h6
            class="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
            Navigate
          </h6>
          <div class="grid grid-cols-1  opacity-1 font-normal">
          <div class=" mt-2 ">Shop all</div>
          <div class=" mt-2">New Arrivals</div>
          <div class=" mt-2">Best Sellers</div>
          <div class=" mt-2">Bags</div>
          <div class=" mt-2">Clothing</div>
          <div class=" mt-2">Accessories</div>
        </div>
        </div>
  
  
        <div class="-ml-16">
        <h6
          class="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
          Services
        </h6>
        <div class="grid grid-cols-1  opacity-1 font-normal">
        <div class=" mt-2 ">Shipping & Returns</div>
        <div class=" mt-2">Privacy Policy</div>
        <div class=" mt-2">Term & Conditions</div>
        <div class=" mt-2">Size Guide</div>
        <div class=" mt-2">Cookie Policy</div>
        <div class=" mt-2">Contact Us</div>
      </div>
      </div>
  
  
  
  
        
      <div class="-ml-64">
      <h6
        class="mb-4  items-center justify-center font-bold uppercase md:justify-start">
        Social
      </h6>
      <div class="grid grid-cols-1  opacity-1 font-normal ">
      <div class=" mt-2 ">Facebook</div>
      <div class=" mt-2">Instgram</div>
      <div class=" mt-2">Twitter</div>
      
    </div>
    </div>
  
  
    <div class="-ml-16">
    <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">Subscribe</h6>
    <p class="mb-4 flex items-center justify-center md:justify-start">Sign up to recieve news about LOGO <br/> collections, events and sales. </p>
    
    
  
    <form>
    <div class="flex ">
        <label for="search-dropdown" class="border-gray-400 Border border-opacity-75 mb-2 text-sm font-medium text-gray-900 sr-only ">Your Email</label>
        
        <div class="relative w-64">
            <input type="email"  class="block p-2.5 
            w-full  text-sm text-gray-900 bg-white rounded-3xl border-gray-400" placeholder="Email Address" required/>
  
  
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium
             text-white bg-black rounded-3xl border 
              focus:outline-none">
              <span>&#10132;</span>
              </button>
        </div>
    </div>
  </form>
  
  
  
  
    </div>
  
  
       
      </div>
  
   
  
  
  
    <div class="bg-neutral-200 p-6 text-center dark:bg-white font-bold">
      
  
    <span>2020 LOGO. All rights reserved</span>
    </div>
  
    
    </footer>
    )
  }
  
  export default Footer
  