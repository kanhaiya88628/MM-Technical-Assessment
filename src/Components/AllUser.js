import React, { useState, useEffect } from "react";
import { Grid, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <Grid item xs={12} sm={12} md={4} className="cardItem1">
            <Card>
              <div className="post-card" key={post.id}>
                <h2 className="post-title">{post.name}</h2>
                <h2 className="post-body">{post.username}</h2>
                <Button component={Link} to={`/users/${post.id}`}>
                  Read more
                </Button>
              </div>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
};

export default AllUser;
