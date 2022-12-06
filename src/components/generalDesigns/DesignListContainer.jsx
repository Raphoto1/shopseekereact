import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, CardGroup, Col, Container, Row } from "react-bootstrap";
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
      <CardGroup className="row row-cols-1 row-cols-md-4 g-1">
          {designs.map((design) =>{
            return(<DesignCard
              key={design.id}
              id={design.id}
              idInterno={design.idInterno}
              imgUrl={design.photo}
              title={design.title}
              style={design.style}
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
