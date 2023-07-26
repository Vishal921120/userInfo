import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import image from "../image/users.jpg"

export default function HomePage() {
  const navigate = useNavigate();

  const handleShowPosts = () => {
    navigate(`/users/`);
  };
  return (
    <div
      style={{
        background: "lightgrey",
        minHeight: "100vh",
        display: "flex",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <Card
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Button variant="primary" onClick={() => handleShowPosts()}>
            Show all Users
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
