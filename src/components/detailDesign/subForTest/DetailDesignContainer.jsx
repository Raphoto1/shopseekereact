import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSingleDesign } from "../../../Services/FirebaseData";
import DetailedDesign from "../DetailedDesign";

function DetailDesignContainer() {
  //setear estados
  const [design, setDesign] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //usar el parametro de la url para buscar el item preciso
  const { idItem } = useParams();
  //crear funcion que llame a la base con la info precisa del diseño
  async function getDesignsAsync() {
    getSingleDesign(idItem).then((respuesta) => {
      setDesign(respuesta);
      setIsLoading(false);
    });
  }
  
  useEffect(() => {
    getDesignsAsync();
  }, []);

  //Agregar condicional para loader
  if (isLoading) return <Spinner className="loaderGeneral" animation="border" size="lg" role="status"/>

  return <div className="containerDetailedDesign">
    <DetailedDesign design={design}/>
  </div>
}

export default DetailDesignContainer;
