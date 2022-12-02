import React from "react";
import { Button, CardGroup } from "react-bootstrap";
import getDesigns, { sendInfo } from "../../Services/FirebaseData";
import CarrouselGeneral from "../carrousel/CarrouselGeneral";
import Footer from "../extras/Footer";
import DesignCard from "./DesignCard";

function DesignListContainer(props) {
  async function getDesignsAsync() {
    let response = await getDesigns();
    console.log(response);
  }
  getDesignsAsync();

  return (
    <div>
      <CarrouselGeneral></CarrouselGeneral>
      <CardGroup>
        <DesignCard>

        </DesignCard>
      </CardGroup>
      <Footer></Footer>
    </div>
  );
}

export default DesignListContainer;
