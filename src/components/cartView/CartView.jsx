import React, { useContext, useState } from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { cartContext } from "../../context/cartContext";
import ToastRafa from "../extras/toastsAndAlerts/ToastRafa";

function CartView() {
  const { cart, clearCart, removeFromCart, priceInItem, priceInCart } =
    useContext(cartContext);
  const [show, setShow] = useState(false);
  //revisar si el carro esta vacio
  if (cart.length === 0) {
    return (
      <div className="cartViewGroup">
        <h1>Empty Cart</h1>
      </div>
    );
  }
  
  //toast
  const toggleShowRafa = () => {
    setShow(!show);
  };
  //creo el mensaje a enviar al toast
  const toastMesage = `Removed from Cart`;
//sweet alert
const alertEmpty = () =>{
  Swal.fire({title:`Cart Cleared`, icon:`warning`});
}
//Output
  return (
    <div className="cartViewGroup">
      <ToastRafa
        toastMesagge={toastMesage}
        show={show}
        toggleShowRafa={toggleShowRafa}
      />
      <Accordion>
        {cart.map((item) => (
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <img
                className="cartViewImage"
                src={`/Assets/Img/Designs/${item.idInterno}.jpg`}
                alt={item.title}
              />{" "}
              {item.title} <Badge bg="secondary"> {item.count} </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <p>{item.text}</p>
              <h6>Each piece of love cost: {item.price} $</h6>
              <h5>Total of this Design: {priceInItem(item.id)} $</h5>
              <Button onClick={() => {removeFromCart(item.id); toggleShowRafa()}}>
                Remove Item
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div className="checkOutCombo">
        <h1>Total: {priceInCart()} $</h1>
        <Link to="/checkout">
          <Button>Send Love</Button>
        </Link>

        <Button onClick={() => {alertEmpty(); clearCart()}}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default CartView;
