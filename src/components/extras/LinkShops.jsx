import React from 'react'

function LinkShops(props) {
//revisar si esta disponible le tienda y en caso de no estarlo, ocultar
const checkShop = (shop) => {
    let contenido;
    if (shop !== "") {
        contenido = "";
        return contenido
    } else {
        contenido = "shopOut";
        return contenido;
    }
};
    return (
    <div className='shop'>
        <div className="shop">
            <a href={props.shop1}>
                <img className={checkShop(props.shop1)} src="/Assets/Icons/redbubble.png" alt="redbubble shop" />
            </a>
        </div>
        <div className="shop">
            <a href={props.shop2}>
                <img className={checkShop(props.shop2)} src="/Assets/Icons/society6_icon.png" alt="society6 shop" />
            </a>
        </div>
        <div className="shop">
            <a href={props.shop3}>
            <img className={checkShop(props.shop3)} src="/Assets/Icons/displate.png" alt="displate shop" />
            </a>
        </div>
    </div>
  )
}

export default LinkShops