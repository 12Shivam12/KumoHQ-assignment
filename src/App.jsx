import './App.css'
import Animation from './components/Animation.jsx'
// import ComponentFour from './components/ComponentFour'
import ComponentThree from './components/ComponentThree'
import ComponentTwo from './components/ComponentTwo'
// import ComponentTwo from './components/ComponentTwo'
import DataBanner from './components/DataBanner'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import Home from './components/Home'
import SocialMedia from './components/SocialMedia'
// import Pricing from './components/Pricing'


function App() {

  return (
    <>
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
