import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Text from "../Text/Text";
import Reader from "../Reader/Reader";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={10}>
          <div
            style={{
              margin: "100px 0"
            }}
          >
            <Reader></Reader>
          </div>
        </Grid>
        <Grid item xs={10}>
          <Text></Text>
        </Grid>
      </Grid>
    </div>
  );
}
