import React, { useContext, useState } from 'react'
import { Accordion, Badge, Button } from 'react-bootstrap'
import { cartContext } from '../../context/cartContext'
import ItemCount from '../itemCount/ItemCount';

function CartView() {
    const {cart, clearCart, removeFromCart, priceInItem, priceInCart, addToCart} = useContext(cartContext);

    if(cart.length === 0){
       return( 
       <div className='cartViewGroup'>
            <h1>Empty Cart</h1>
        </div>
        );
    }

    const [isInCart, setIsInCart] = useState(false);

  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(item, count);
    console.log(count);
  }

  return (
    <div className='cartViewGroup'>
        <Accordion>
            {cart.map((item)=>(
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      <img className='cartViewImage' src={`/Assets/Img/Designs/${item.idInterno}.jpg`} alt={item.title}/>  {item.title} <Badge bg='secondary'> {item.count} </Badge> 
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>{item.text}</p>
                        <h6>Each piece of love cost {item.price}</h6>
                        <ItemCount onAddToCart={onAddToCart}  stock={item.count}/>
                        <h5>Total of this Design {priceInItem(item.id)}</h5>
                        <Button onClick={() => removeFromCart(item.id)}>Remove Item</Button>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
        
        <div className='checkOutCombo'>
        <h1>Total {priceInCart()}</h1>
            <Button>Send Love</Button>
            <Button onClick={() => clearCart()}>Clear Cart</Button>
        </div>
    </div>
  )
}

export default CartView