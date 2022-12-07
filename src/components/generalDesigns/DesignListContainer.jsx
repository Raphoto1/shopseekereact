import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getDesigns, { getDesignsByStyle, getDesignsByShop } from "../../Services/FirebaseData";
import CarrouselGeneral from "../carrousel/CarrouselGeneral";
import Footer from "../extras/Footer";
import DesignCard from "./DesignCard";

function DesignListContainer(props) {
  //setear estados
  const [designs, setDesigns] = useState([])
  const {idCategory} = useParams()
  //traer data
  async function getDesignsAsync() {
    if(!idCategory){
      console.log(idCategory);
    let response = await getDesigns();
    setDesigns(response)
    } else {
    let response = await getDesignsByStyle(idCategory);
    setDesigns(response)
    }
    
  }
  
  useEffect(() => {
    getDesignsAsync();
  },[idCategory]);

function handletest(shop){
  getDesignsByShop("shop3");
}

  return (
    <div>
      <Button onClick={handletest()}>carga de tienda por shop</Button>
        <CarrouselGeneral></CarrouselGeneral>
      <CardGroup className="containerDesigns row row-cols-1 row-cols-md-4 g-1">
          {designs.map((design) =>{
            return(<DesignCard
              key={design.id}
              id={design.id}
              idInterno={design.idInterno}
              imgUrl={design.photo}
              title={design.title}
              style={design.style}
              price={design.price}
              stock={design.stock}
              desc={design.text}
              shop1={design.shop1}
              shop2={design.shop2}
              shop3={design.shop3}
              />);
          })}
       </CardGroup>
      <Footer></Footer>
    </div>
  );
}

export default DesignListContainer;
