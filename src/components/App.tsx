import React, { useEffect } from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import Cart from "./Cart";
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";
import PizzaItem from "./Pizza";

const App = () => {
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer);
  //Simulate componentDidMount and unmount clean up similiar to class components
  // useEffect(() => {
  //   const listener = () => {
  //     alert("Hello");
  //   };
  //   document.addEventListener("mousedown", listener);
  //   return () => {
  //     document.removeEventListener("mousedown", listener);
  //   };
  // }, []);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
