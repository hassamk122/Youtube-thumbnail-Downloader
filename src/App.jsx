
import About from "./Component/About"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import HowToUse from "./Component/HowToUse"
import ThumbnailDownloader from "./Component/ThumbnailDownloader"
function App() {


  return (
    <>
      hassa kiani hassam kiani waj
    </>


    <div className="min-h-screen min-w-full bg-yt-black scroll-smooth ">
      <Header/>
      <ThumbnailDownloader/>
      <HowToUse/>
      <About/>
      <Footer/>
    </div>

    </>
  )
}

export default App
