import React, { useContext } from 'react'
import { Cart } from 'react-bootstrap-icons';
import { cartContext } from '../../context/cartContext';
import {Link} from 'react-router-dom'

function CartWidget() {
  const myContext = useContext(cartContext)
  return (
    <div>
       <Link to="/cart">
        <Cart color='white' size={25}/>
        <span className='cartNumber'>{myContext.itemsInCart()}</span>
       </Link>
    </div>
  )
}

export default CartWidget