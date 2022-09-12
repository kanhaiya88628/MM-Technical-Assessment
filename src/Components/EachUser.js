import React, { useEffect, useState } from "react";
import { Grid, Card } from "@mui/material";
import { useParams } from "react-router-dom";

const EachUser = () => {
  const [post, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  return (
    <div>
      <div className="posts-container">
        <Grid item xs={12} sm={12} md={4} className="cardItem1">
          <Card>
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.name}</h2>
              <h2 className="post-body">{post.username}</h2>
            </div>
          </Card>
        </Grid>
      </div>
    </div>
  );
};

export default EachUser;
