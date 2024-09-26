import './App.css'
import Nav from './Components/Nav'
import Cards from './Components/Cards'
import Cardds from './Components/Cardds'
import Footer from './Components/Footer'
function App() {
  

  return (
    <>
  <Nav/>
  <Cards/>
  <div className="flex flex-wrap justify-center gap-4 w-[70%] m-auto">
  <div className="w-full sm:w-[48%] lg:w-[30%]">
    <Cardds
    imgg = "https://i.pinimg.com/236x/ff/9a/f7/ff9af737764ed9f8187256d87f54ba43.jpg"
    Name = "Electronic"
    parg = "TV Telvsions Air Condition Washing Audies"
    btn = "Enter"
     />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[30%] ">
    <Cardds
     imgg = "https://i.pinimg.com/236x/2c/9d/f9/2c9df95ddb5fb38d22e4d2ab2807ec8c.jpg"
     Name = "Clothing"
     parg = "Worms Mens Badget &Backbabes"
     btn = "Enter"
      />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[30%]">
  <Cardds
     imgg = "https://i.pinimg.com/736x/7f/83/f6/7f83f63c0491452e05d90ae698b85e17.jpg"
     Name = "Computer"
     parg = "Desktoop PC GAMING"
     btn = "Enter"
      />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[30%]">
    <Cardds
     imgg = "https://i.pinimg.com/236x/b0/35/8b/b0358b74cab69718a3ead010a08acd4b.jpg"
     Name = "Home & Kitchen"
     parg = "Dekoor Cookwavers Untinesill Gadget garden tools"
     btn = "Enter"
     />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[30%]">
    <Cardds
     imgg = "https://i.pinimg.com/236x/6a/fe/e5/6afee5fc4dd00328594f5c1c04093b39.jpg"
     Name = "Healthy & Buety "
     parg = "Meakup Skin care Hair Care Tools & Eqibment  "
     btn = "Enter" />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[30%]">
    <Cardds
     imgg = "https://i.pinimg.com/236x/06/74/e8/0674e8fea7dad4f865f414a8c2702fef.jpg"
     Name = "Watch"
     parg = "Pendment Neackless Watch "
     btn = "Enter" />
  </div>


  
</div>
<Footer/>



    
    </>
  )
}

export default App
