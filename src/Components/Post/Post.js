import { React, useState, useEffect } from "react";
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
import useStyles from "../Posts/Style";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const Post = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  console.log(comments);

  return (
    <div>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography>{post.body}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Read more...
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md">
        <Typography
          variant="h4"
          style={{ fontSize: "22px", marginTop: "30px" }}
          maxWidth="md"
        >
          Comments:
        </Typography>
        <Grid container>
          {comments.map((comment) => (
            <Grid item xs={12}>
              <Comments details={comment}></Comments>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Post;
