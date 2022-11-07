import logo from './logo.svg';
import './css/App.css';
import '../src/css/style.css';
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/vendor/bootstrap/css/bootstrap-reboot.min.css';
import '../src/assets/vendor/boxicons/css/boxicons.min.css';
import '../src/assets/vendor/glightbox/css/glightbox.min.css';
import '../src/assets/vendor/remixicon/remixicon.css';
import '../src/assets/vendor/swiper/swiper-bundle.min.css';

//  import '../src/assets/js/playbtn.js'; 

//compinenetes 
import Navbar from './components/navbar/Navbar';
import Acerca from './components/Acerca';
import Cuentas from './components/Cuentas';
import Hero from './components/navbar/Hero';
import Valores from './components/Valores';
import Servicios from './components/Servicios';
import Footer from './components/Footer';
import Home from './components/Home';
import Precios from './components/Precios';
import { Route, Routes } from 'react-router-dom';
import Testimonios from './components/Testimonios';
import Preguntas from './components/Preguntas';

function App() {

  return (

      <div className="App">
      <Hero/> 
      <Navbar/>
      <Routes>  
        <Route path="/" element={<><Home /><Preguntas/> <Testimonios/></>}/>
        <Route path="/servicios" element={<><Servicios/> <Precios/></>}/>
        <Route path="/acerca" element={<> <Acerca/> <Cuentas/> <Valores /></>}/>

      </Routes>  
     
     

      
    
      <Footer/>

    
     
    </div>
    
  );
}

export default App;
