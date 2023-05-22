import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Contact from "./component/contacts/Contactus";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Cart from "./component/cart/Cart";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder.jsx";
import PaymentSuccess from "./component/cart/PaymentSuccess.jsx";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import MyOrders from "./component/myOrder/MyOrders";
import OrderDetails from "./component/myOrder/OrderDetails.jsx";
import Dashboard from "./component/admin/Dashboard";
import Users from "./component/admin/Users";
import Orders from "./component/admin/Orders";
import About from "./component/about/About";
import "./style/app.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/founder.scss";
import "./style/menu.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/cart.scss";
import "./style/shipping.scss";
import "./style/confirmOrder.scss";
import "./style/PaymentSuccess.scss";
import "./style/login.scss";
import "./style/profile.scss";
import "./style/table.scss";
import "./style/orderDetails.scss";
import "./style/dashboard.scss";
import "./style/about.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
