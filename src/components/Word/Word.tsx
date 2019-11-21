import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";

import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

type WordProps = {
  word: string;
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 15
  }
});

export class Word extends Component<WordProps> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <MuiThemeProvider theme={theme}>
          <Typography id="worder" gutterBottom>
            <Box
              fontFamily="Roboto, Helvetica, Arial, sans-serif"
              fontSize="50pt"
              fontWeight="bold"
              color="#282c34"
            >
              {this.props.word || "Your words will appear here!"}
            </Box>
          </Typography>
        </MuiThemeProvider>
      </div>
    );
  }
}
