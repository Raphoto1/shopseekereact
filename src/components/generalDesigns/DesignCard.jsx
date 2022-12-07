import React from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import LikeButton from "../extras/LikeButton";
import LinkShops from "../extras/LinkShops";

function DesignCard(props) {
  const urlDetail = `/detail/${props.id}`;
  return (
    <div className="col">
      <Card className="h-100" style={{ width: "100%" }}>
        <LikeButton />
        <Card.Img
          className="overfloe-auto"
          variant="top"
          src={`/Assets/Img/Designs/${props.idInterno}.jpg`}
          alt={props.title}
        />
        <Card.Body className="text-center align-content-end align-items-end">
          <Card.Header as="h3">{props.title}</Card.Header>
          <Card.Text>{props.desc}</Card.Text>
          <h4>Style</h4>
          <Card.Text className="text-muted">{props.style}</Card.Text>
          <div className="stockChange">
            <h6>How much love is available for this design</h6>
            <Card.Text>{props.stock} Units</Card.Text>
          </div>
          <h6>Each pice of love cost</h6>
          <Card.Text>{props.price}$</Card.Text>
          <Link to={urlDetail}>
            <Button>Check Details</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <LinkShops
            shop1={props.shop1}
            shop2={props.shop2}
            shop3={props.shop3}
          />
        </Card.Footer>
      </Card>
    </div>
  );
}

export default DesignCard;
