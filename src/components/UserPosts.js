import React from "react";
import { useParams } from "react-router-dom";
import users from "./userData";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export default function UserPosts() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === parseInt(userId));

  const handleClick = (postId) => {
    navigate(`/user/${user.id}/post/${postId}`)
  }



  return (
    <div 
    style={{ 
        background: "lightblue",
        minHeight:"100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"}}
    >
        {user.posts.map((post) => (
            <div
            key={post.id}
            style={{
                margin:"10px",
                cursor:"pointer"}}
            
            >
                <Card
              bg="primary"
              text="light"
              style={{ width: '18rem', borderRadius:"10px" }}
              onClick={() => handleClick(post.id)}
            >
              <Card.Header>{user.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {post.desc}
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
        ))}
    </div>
  );
}
