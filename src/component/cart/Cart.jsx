import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import burger1 from "../../images/burger1.png";
import burger2 from "../../images/burger2.png";
import burger3 from "../../images/burger3.png";
import paniPuri4 from "../../images/paniPuri4.png";
import paniPuri5 from "../../images/paniPuri5.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const {
    cartItems: {
      dryPaniPuri: { quantity: dryPaniPuri },
      dahiPaniPuri: { quantity: dahiPaniPuri },
      specailPaniPuri: { quantity: specailPaniPuri },
      pudinaPaniPuri: { quantity: pudinaPaniPuri },
      paniPuriChaat: { quantity: paniPuriChaat },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "dryPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "dahiPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "specailPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
        dispatch({ type: "pudinaPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 5:
        dispatch({ type: "paniPuriChaatIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "dryPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (dryPaniPuri === 0) break;
        dispatch({ type: "dryPaniPuriDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (dahiPaniPuri === 0) break;
        dispatch({ type: "dahiPaniPuriDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (specailPaniPuri === 0) break;
        dispatch({ type: "specailPaniPuriDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
        if (pudinaPaniPuri === 0) break;
        dispatch({ type: "pudinaPaniPuriDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 5:
        if (paniPuriChaat === 0) break;
        dispatch({ type: "paniPuriChaatDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (dryPaniPuri === 10) break;
        dispatch({ type: "dryPaniPuriDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Dry Pani Puri"}
          img={burger1}
          value={dryPaniPuri}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Dahi Pani Puri"}
          img={burger2}
          value={dahiPaniPuri}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Specail Pani Puri"}
          img={burger3}
          value={specailPaniPuri}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <CartItem
          title={"Pudina Pani Puri"}
          img={paniPuri4}
          value={pudinaPaniPuri}
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />
        <CartItem
          title={"Pani Puri Chaat"}
          img={paniPuri5}
          value={paniPuriChaat}
          increment={() => increment(5)}
          decrement={() => decrement(5)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
