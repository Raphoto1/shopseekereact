import { createContext, useState } from "react";

//Iniciamos el contexto
export const cartContext = createContext();

//crear contexto
export function CartContextProvider({ children }) {
  //prueba de conexion de context
  const testContext = "Hola si me ven en context";
  //crear el estado del carrito
  const [cart, setCart] = useState([]);
  //agregar al carrito y revisar si ya existe aumentar la cantidad del diseño
  function addToCart(design, count) {
    //revisar si esta en el carrito
    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === design.id
    );
    //copiar el array del carrito
    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      design.count = count;
      newCart.push(design);
      setCart(newCart);
    }
  }

  function removeFromCart(designId) {
    const newCart = [...cart];
    let filtered = newCart.filter((design) => design.id !== designId);
    setCart(filtered);
  }

  function itemsInCart() {
    let totalItemsInCart = 0;
    cart.forEach(
      (itemInCart) => (totalItemsInCart = totalItemsInCart + itemInCart.count)
    );
    return totalItemsInCart;
  }

function priceInCart(){
  let totalpriceInCart = 0;
  cart.forEach(
    (design) =>
    (totalpriceInCart = totalpriceInCart + design.price * design.count)
  );
  return totalpriceInCart;
}

function priceInItem(designId){
  let totalPriceItem = 0;
  let filtered = cart.filter((design) => design.id === designId);
  totalPriceItem = filtered[0].price * filtered[0].count;
  return totalPriceItem;
}

  function alreadyInCart(id) {}

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        itemsInCart,
        priceInItem,
        priceInCart,
        testContext,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
