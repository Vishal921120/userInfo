import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../image/avtar.jpg"
import users from "./userData";
import { useNavigate } from "react-router-dom";

export default function UserLists() {
    const navigate = useNavigate();

    const handleShowPosts = (userId) => {
        navigate(`/user/${userId}/posts`);
      };

  return (
    <div style={{ 
      background: "black",
      minHeight: "100vh",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"}}>
        {users.map((user) =>
            (<Card key={user.id} style={{ width: "18rem",height: "24rem",  margin:"10px" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Button variant="primary" onClick={() => handleShowPosts(user.id)}>Show posts</Button>
            </Card.Body>
          </Card>)
        )}
    </div>
  );
}
