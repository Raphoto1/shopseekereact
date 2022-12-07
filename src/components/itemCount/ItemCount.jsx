import React, { useState } from "react";

function ItemCount({ stock, onAddToCart }) {
  //setear el estado de la cuenta
  const [count, setCount] = useState(1);
  //se agrega el manejador del agregador
  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }
  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }
  return (
    <div className="itemCountContainer">
      <div className="itemCountControl">
        <button onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="itemCountAddToCart">
        <button onClick={() => onAddToCart(count)}>
            Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
