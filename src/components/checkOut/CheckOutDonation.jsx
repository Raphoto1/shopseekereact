import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../Services/FirebaseData";

function CheckOutDonation() {
  //Traigo info que necesito de context
  const { cart, priceInCart, clearCart } = useContext(cartContext);
  let navigate = useNavigate();
  //funcion para mandar a fire o a futuro a paypal TESTEADO Y SI FUNCIONA
  async function handleCheckout(data) {
    //empaqueto lo que voy a mandar a fire
    const order = {
      buyer: data,
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };
    console.log(order);
    //envio la info a fire
    const orderId = await createOrder(order);
    clearCart();
    navigate(`/thankyou/${orderId}`);
  }
  //se guarda la info del usuario en un estado
  const [data, setData] = useState({
    name: "",
    email: "",
    insta: "",
  });
  //control de form
  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
    console.log(newData);
  }
  //submit ahndle
 function onSubmit(evt) {
    evt.preventDefault()
    console.log(data);
   handleCheckout(data);
  }

  return (
    <div>
      <div className="checkOutInfo">
        <h1>Total {priceInCart()}</h1>
        <button>test de handle</button>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          value={data.name}
          name="name"
          type="text"
          onChange={onInputChange}
        />
        <label htmlFor="email">email</label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
        <label htmlFor="insta">Instagram</label>
        <input
          value={data.insta}
          name="insta"
          type="text"
          onChange={onInputChange}
        />
        <button disabled={data.name === "" || data.email === ""} type="submit">
          Send Love
        </button>
      </form>
    </div>
  );
}

export default CheckOutDonation;
