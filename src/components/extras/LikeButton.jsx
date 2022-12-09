import React, { useState } from 'react'
import { BalloonHeart, BalloonHeartFill } from 'react-bootstrap-icons';
import ToastRafa from './toastsAndAlerts/ToastRafa';

function LikeButton(props) {
    const [isFavorite, setIsFavorite] = useState(false);

    //creo un estado del toast
    const[show, setShow] = useState(false);
    //creo la funcion
    const toggleShowRafa = () => {
      setShow(!show); console.log("por aqui pase");}
      //mensaje para enviar si le gusto o no en texto con condicional
      let liked = ""
      if(isFavorite == false){
        liked = "disliked"
      }else{
        liked = "liked"
      }
      //creo el mensaje a enviar al toast
      const toastMesage = `${liked} ${props.design}`

    const handleFavorite =() => {
        setIsFavorite(!isFavorite);
        toggleShowRafa();
    }

    let FavBtnIconChange = isFavorite? <BalloonHeartFill color='red' size={20}/> : <BalloonHeart/>;
  return (
    <div>
      <button onClick={handleFavorite} className="favButton">
          {FavBtnIconChange}
          
      </button>
      <ToastRafa toastMesagge={toastMesage} show={show} toggleShowRafa={toggleShowRafa}></ToastRafa>
    </div>
  )
}

export default LikeButton