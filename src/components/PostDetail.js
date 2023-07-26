import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import users from "./userData";

export default function PostDetails() {
  const { userId, postId } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));
  const post = user.posts.find((post) => post.id === parseInt(postId));

  return (
    <div
      style={{
        background: "orange",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1 style={{color:"white"}}>{user.name}</h1>
      <Card
        style={{
          height: "40vh",
          width: "60%",
        }}
        body
      >
        {post.desc}
      </Card>
    </div>
  );
}
