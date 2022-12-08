import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getDesigns, {
  getDesignsByStyle,
  getDesignsByShop,
} from "../../Services/FirebaseData";
import CarrouselGeneral from "../carrousel/CarrouselGeneral";
import Footer from "../extras/Footer";
import DesignCard from "./DesignCard";

function DesignListContainer(props) {
  //setear estados
  const [designs, setDesigns] = useState([]);
  const { idCategory } = useParams();
  //traer data
  async function getDesignsAsync() {
    //switch
    switch (idCategory) {
      case "Traditional":
        let responseT = await getDesignsByStyle(idCategory);
        setDesigns(responseT);
        break;
      case "Digital":
        let responseD = await getDesignsByStyle(idCategory);
        setDesigns(responseD);
        break;
      case "Photography":
        let responseP = await getDesignsByStyle(idCategory);
        setDesigns(responseP);
        break;
      case "shop1":
        let responseS1 = await getDesignsByShop(idCategory);
        setDesigns(responseS1);
        break;
      case "shop2":
        let responseS2 = await getDesignsByShop(idCategory);
        setDesigns(responseS2);
        break;
      case "shop3":
        let responseS3 = await getDesignsByShop(idCategory);
        setDesigns(responseS3);
        break;
      default:
        let response0 = await getDesigns();
        setDesigns(response0);
        break;
    }
  }

  useEffect(() => {
    getDesignsAsync();
  }, [idCategory]);

  return (
    <div>
      <CarrouselGeneral></CarrouselGeneral>
      <CardGroup className="containerDesigns row row-cols-1 row-cols-md-4 g-1">
        {designs.map((design) => {
          return (
            <DesignCard
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
            />
          );
        })}
      </CardGroup>
      <Footer></Footer>
    </div>
  );
}

export default DesignListContainer;
