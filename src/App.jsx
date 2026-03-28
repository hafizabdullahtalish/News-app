import './App.css'
import Buttons from './assets/conponents/Buttons'
import Navbar from './assets/conponents/Navbar'
import Card from './assets/page/Card'
import Footer from './assets/conponents/Footer'

function App() {


  return (
    <>
     <Navbar className={'sticky top-0 z-10'}/>

     <Buttons className={'sticky top-16 z-10'}/>

    <Card/>

    <Footer/>
    </>
  )
}

export default App
