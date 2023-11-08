import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        dryPaniPuri: {
          quantity: 10,
          price: 50,
        },
        dahiPaniPuri: {
          quantity: 10,
          price: 60,
        },
        specailPaniPuri: {
          quantity: 10,
          price: 70,
        },
        pudinaPaniPuri: {
          quantity: 10,
          price: 50,
        },
        paniPuriChaat: {
          quantity: 10,
          price: 50,
        },
      },
  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  dryPaniPuriIncrement: (state) => {
    state.cartItems.dryPaniPuri.quantity += 10;
  },
  dahiPaniPuriIncrement: (state) => {
    state.cartItems.dahiPaniPuri.quantity += 10;
  },
  specailPaniPuriIncrement: (state) => {
    state.cartItems.specailPaniPuri.quantity += 10;
  },
  pudinaPaniPuriIncrement: (state) => {
    state.cartItems.pudinaPaniPuri.quantity += 10;
  },
  paniPuriChaatIncrement: (state) => {
    state.cartItems.paniPuriChaat.quantity += 10;
  },

  dryPaniPuriDecrement: (state) => {
    state.cartItems.dryPaniPuri.quantity -= 10;
  },
  dahiPaniPuriDecrement: (state) => {
    state.cartItems.dahiPaniPuri.quantity -= 10;
  },
  specailPaniPuriDecrement: (state) => {
    state.cartItems.specailPaniPuri.quantity -= 10;
  },
  pudinaPaniPuriDecrement: (state) => {
    state.cartItems.pudinaPaniPuri.quantity -= 10;
  },
  paniPuriChaatDecrement: (state) => {
    state.cartItems.paniPuriChaat.quantity -= 10;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.dryPaniPuri.price *
        (state.cartItems.dryPaniPuri.quantity / 10) +
      state.cartItems.dahiPaniPuri.price *
        (state.cartItems.dahiPaniPuri.quantity / 10) +
      state.cartItems.specailPaniPuri.price *
        (state.cartItems.specailPaniPuri.quantity / 10) +
      state.cartItems.pudinaPaniPuri.price *
        (state.cartItems.pudinaPaniPuri.quantity / 10) +
      state.cartItems.paniPuriChaat.price *
        (state.cartItems.paniPuriChaat.quantity / 10);

    state.tax = state.subTotal * 0.18;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      dryPaniPuri: {
        quantity: 10,
        price: 50,
      },
      dahiPaniPuri: {
        quantity: 10,
        price: 60,
      },
      specailPaniPuri: {
        quantity: 10,
        price: 70,
      },
      pudinaPaniPuri: {
        quantity: 10,
        price: 50,
      },
      paniPuriChaat: {
        quantity: 10,
        price: 50,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      area: action.payload.area,
      city: action.payload.city,
      state: action.payload.state,
      country: action.payload.country,
      pinCode: action.payload.pinCode,
      phoneNo: action.payload.phoneNo,
    };
  },
});
