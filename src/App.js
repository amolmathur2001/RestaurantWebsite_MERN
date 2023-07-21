import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./Screens/Signup";
import { CardProvider } from "./Components/ContextReducer";
import Cart from "./Screens/Cart";
import OrderPlaced from "./Screens/OrderPlaced";
import StripeCheckout from "./Screens/StripeCheckout";
import MyOrders from "./Screens/MyOrders";
import MainPage from "./Screens/MainPage";
import Menu from "./Screens/Menu";
import About from "./Screens/About";
import Contact from "./Screens/Contact";

function App() {
  //This is the main page of the website
  //ek cover webiste ka lagana hai
  return (
    <div className="App">
      <CardProvider>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/createuser" element={<Signup />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/printOrder" element={<OrderPlaced />} />
              <Route
                exact
                path="/stripe-checkout"
                element={<StripeCheckout />}
              />
              <Route exact path="/myorders" element={<MyOrders />} />
              <Route exact path="/menu" element={<Menu />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contactus" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </CardProvider>
    </div>
  );
}

export default App;
