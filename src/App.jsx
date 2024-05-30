import './App.css'
import Animation from './components/Animation.jsx'
// import ComponentFour from './components/ComponentFour'
import ComponentThree from './components/ComponentThree'
import ComponentTwo from './components/ComponentTwo'
// import ComponentTwo from './components/ComponentTwo'
import DataBanner from './components/DataBanner'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
// import Header from './components/Header.jsx'
import Home from './components/Home'
import Navbar from './components/Navbar.jsx'
import SocialMedia from './components/SocialMedia'
// import Pricing from './components/Pricing'


function App() {

  return (
    <>
    {/* <Header/> */}
    <Navbar/>
      <Home/>
      <ComponentTwo/>
      <DataBanner/>
      <ComponentThree/>
      {/* <Pricing/> */}
      <Animation/>
      {/* <ComponentFour/> */}
      <SocialMedia/>
      <Disclaimer/>
      <Footer/>
    </>
  )
}

export default App
