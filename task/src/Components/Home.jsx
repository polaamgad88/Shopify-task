import Footer from "./Footer"
import Header from "./Header"
import guyImage from "../Imgs/guyImage.png"
import girlImage from "../Imgs/girlImage.png"


function Home() {

    return (
        <div>
        <Header/>
        

        <div class="flex justify-center mt-8 mb-16  ">


        <div class="ml-28 w-1/2 h-auto p-4 m-4  relative inline-block
         object-contain ">
         <img class="border h-full w-full " src={girlImage}/>
         <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-500">
          <a href="#" class="text-white custom-font  font-normal
           text-5xl  ">Women <br/> <a href="#" class="text-gray-500 text-sm font-sans">Shop now</a> </a>
         </div>
        </div>

        
        <div class="w-1/2 h-auto p-4 m-4 bg-white mr-28
        relative inline-block object-contain">
        <img class="border h-full w-full  " src={guyImage}/> 
        <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-500">
          <a href="#" class="text-white custom-font  font-thin
           text-5xl  ">Men <br/> <a href="#" class="text-gray-500 text-sm font-sans">Shop now</a> </a>
         </div>
        </div>

        
        </div>
      <Footer/>
      </div>
    )
  }
  
  export default Home
  