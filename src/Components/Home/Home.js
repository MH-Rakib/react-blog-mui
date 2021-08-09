import React from "react";
import { useEffect, useState } from "react";

import {
  AppBar,
  Button,
  IconButton,
  MenuIcon,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./Style";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";

const Home = () => {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  return (
    <div>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Blog Posts
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Posts details={post}></Posts>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Home;
