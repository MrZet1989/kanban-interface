import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Form/Form.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Newcomer from "./components/Newcomer/Newcomer.jsx";
import PopularTools from "./components/PopularTools/PopularTools.jsx";
import Trusted from "./components/Trusted/Trusted.jsx";
import SliderBlock from "./components/Slider/Slider.jsx";


function App() {

  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <PopularTools/>
      <Trusted/>
      <Newcomer/>
      <SliderBlock/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
