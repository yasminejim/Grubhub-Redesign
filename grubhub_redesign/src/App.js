import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import FeaturedRest from "./pages/FeaturedRest";
import SignUp from "./pages/Signup";
import "./styles/App.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/resturants.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderApp from "./pages/OrderApp";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        {}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Resturants" element={<FeaturedRest />}></Route>
          <Route exact path="OrderApp" element={<OrderApp />}></Route>
          <Route exact path="/Signup" element={<SignUp />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
