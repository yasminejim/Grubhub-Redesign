import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import FeaturedRest from "./pages/FeaturedRest";
// import SignUp from "./pages/SignUp";
import "./styles/App.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/resturants.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return ( 
  <Router>
    <Navbar />
    <> 
    {} 
    <Routes >
    <Route exact path = "/" element = {< Home />}>
    </Route> 
    <Route exact path = "/IconSlider" element = {<FeaturedRest />}>
    </Route> {
      /* <Route exact path="/signup" element={<SignUp />}></Route> */ } <Route exact path = "/contact" element = {<Contact />} > 
    </Route> 
    </Routes> 
    </> 
    <Footer />
    </Router>
  );
}

export default App;