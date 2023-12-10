import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer/cartReducer";
import { authReducer } from "./reducer/userReducer";
import { orderReducer, ordersReducer } from "./reducer/orderReducer";
import { adminReducer } from "./reducer/adminReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;
// export const server = `https://babapanipuri.onrender.com`;
export const server = `http://localhost:5000`;
