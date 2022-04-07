import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
// import Products from './pages/Products';
// import Cart from './components/Cart';
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Featured from "./Components/FeaturedRestraunts";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        {}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Feautured" element={<Featured />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          {/* <Route path = "/cart" element = {<Cart/>}></Route>  */}
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
