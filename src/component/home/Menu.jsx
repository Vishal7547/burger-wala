import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../images/burger1.png";
import burger2 from "../../images/burger2.png";
import burger3 from "../../images/burger3.png";
import paniPuri4 from "../../images/paniPuri4.png";
import paniPuri5 from "../../images/paniPuri5.png";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Menu() {
  const dispatch = useDispatch();
  const addToCartHandler = (itemNum) => {
    console.log("itemNum", itemNum);
    switch (itemNum) {
      case 1:
        dispatch({ type: "dryPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "dahiPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "specailPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 4:
        dispatch({ type: "pudinaPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 5:
        dispatch({ type: "paniPuriChaatIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "dryPaniPuriIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          delay={0.1}
          title="Dry Pani Puri"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          delay={0.5}
          title="Dahi Pani Puri"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={700}
          delay={0.8}
          title="Specail Pani Puri"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={4}
          burgerSrc={paniPuri4}
          price={900}
          delay={0.1}
          title="Pudina Pani Puri"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={5}
          burgerSrc={paniPuri5}
          price={700}
          delay={0.5}
          title="Pani Puri Chaat"
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
}

export default Menu;
