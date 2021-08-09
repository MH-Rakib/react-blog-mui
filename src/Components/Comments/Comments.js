import React from "react";
import ReactDOM from "react-dom";

import { Avatar, Grid, Paper } from "@material-ui/core";

// import "./styles.css";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Comments = (props) => {
  const { id, name, email, body } = props.details;

  return (
    <Paper style={{ padding: "20px 20px", marginTop: "20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{email}</h4>
          <p style={{ textAlign: "left" }}>{body}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Comments;
