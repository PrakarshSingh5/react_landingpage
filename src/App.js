//for deployment we use npm i -g vercel
//vercel login
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaqery.scss";

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
     <Route path="/services" element={<Services/>}/>

    
    
     
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
