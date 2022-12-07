import React, { useState } from 'react'
import { BalloonHeart, BalloonHeartFill } from 'react-bootstrap-icons';

function LikeButton() {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite =() => {
        setIsFavorite(!isFavorite);
    }

    let FavBtnIconChange = isFavorite? <BalloonHeartFill color='red' size={20}/> : <BalloonHeart/>;
  return (
    <button onClick={handleFavorite} className="favButton">
        {FavBtnIconChange}
    </button>
  )
}

export default LikeButton