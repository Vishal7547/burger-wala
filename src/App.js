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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/action/user";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
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
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  console.log("useSelector/isAuthenticated", isAuthenticated);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      console.log("error123", error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);
  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/me" element={<Profile />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/shipping" element={<Shipping />} />
            <Route path="/confirmorder" element={<ConfirmOrder />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Route>

          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user?.role === "admin"}
                redirectAdmin="/me"
              />
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/orders" element={<Orders />} />
          </Route>
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
