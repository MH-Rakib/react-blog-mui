import React from "react";
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
import { Link } from "react-router-dom";

const Posts = (props) => {
  const classes = useStyles();
  const { title, body, id } = props.details;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{body}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/post/${id}`}>
            <Button size="small" color="primary">
              Read more...
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Posts;
