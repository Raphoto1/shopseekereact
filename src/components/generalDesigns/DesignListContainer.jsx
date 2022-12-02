import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getDesigns, { sendInfo } from "../../Services/FirebaseData";
import CarrouselGeneral from "../carrousel/CarrouselGeneral";
import Footer from "../extras/Footer";
import DesignCard from "./DesignCard";

function DesignListContainer(props) {
  //setear estados
  const [designs, setDesigns] = useState([])
  const {idCategory} = useParams()
  //traer data
  async function getDesignsAsync() {
    let response = await getDesigns();
    console.log(response);
    setDesigns(response)
  }
  
  useEffect(() => {
    getDesignsAsync();
  },[idCategory]);

  return (
    <div>
      <CarrouselGeneral></CarrouselGeneral>
      <CardGroup>
        {designs.map((design) =>{
          return(<DesignCard
            key={designs.id}
            idInterno={designs.idInterno}
            imgUrl={designs.photo}
            title={designs.title}
            style={designs.style}
            desc={designs.text}
            shop1={designs.shop1}
            shop2={designs.shop2}
            shop3={designs.shop3}
            />);
        })}
        
      </CardGroup>
      <Footer></Footer>
    </div>
  );
}

export default DesignListContainer;
