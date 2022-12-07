import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { cartContext } from '../../context/cartContext';
import LikeButton from '../extras/LikeButton';
import LinkShops from '../extras/LinkShops'
import ItemCount from '../itemCount/ItemCount';

function DetailedDesign({design}) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    setIsInCart(count);
    addToCart(design, count);
    console.log(count);
  }

  return (
    <Card className='cardDetailedDesign'>
      <LikeButton/>
          <Card.Img variant="top" src={`/Assets/Img/Designs/${design.idInterno}.jpg`} alt={design.title} />
          <Card.Body>
            <Card.Title>{design.title}</Card.Title>
            <Card.Text>
              {design.text}
            </Card.Text>
            <Card.Text>
              {design.style}
            </Card.Text>
            <ItemCount onAddToCart={onAddToCart}  stock={design.stock}/>
          </Card.Body>
          <Card.Footer>
          <LinkShops
            shop1={design.shop1}
            shop2={design.shop2}
            shop3={design.shop3}
            />
          </Card.Footer>
      </Card>
  )
}

export default DetailedDesign