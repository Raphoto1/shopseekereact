import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
        <Button variant="danger" onClick={handleSubstract}>-</Button>
        <span>{count}</span>
        <Button variant="success" onClick={handleAdd}>+</Button>
      </div>
      <div className="itemCountAddToCart">
        <Button onClick={() => onAddToCart(count)}>
            Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
