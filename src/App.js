import Home from "./Components/Home/Home";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Post from "./Components/Post/Post";
import NotFound from "./Components/NotFound/NotFound";

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
import useStyles from "./Components/Home/Style";

function App() {
  const classes = useStyles();
  return (
    <>
      {/* top bar */}
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            <a
              href="http:/home"
              style={{ textDecoration: "NONE", textDecorationColor: "white" }}
            >
              Magazine Blogs
            </a>
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/post/:id">
            <Post />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
