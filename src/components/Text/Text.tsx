import React, { Component } from "react";

import { compose } from "recompose";
import { connect } from "react-redux";

import { mapDispatchToProps } from "./connect.config";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider, { Mark } from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

type TextState = {
  text: string;
  wpm: number;
};

type TextProps = {
  setReader: (text: string, wpm: number) => void;
};

const createWpm = (value: number): Mark => ({
  value,
  label: valueToText(value)
});

const valueToText = (value: number) => `${value} WPM`;

const enhance = compose(connect(undefined, mapDispatchToProps));

class Text extends Component<TextProps, TextState> {
  minWpm = 100;
  maxWpm = 1000;

  constructor(props: any) {
    super(props);

    this.state = {
      text: "",
      wpm: this.minWpm
    };

    this.initializeMarks();

    this.handleTextOnChange = this.handleTextOnChange.bind(this);
    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
  }

  handleTextOnChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      text: event.target.value.trim()
    });
  }

  handleSliderChange = (event: any, newValue: any) => {
    this.setState({
      wpm: newValue
    });
  };

  handleButtonOnClick() {
    this.props.setReader(this.state.text, this.state.wpm);
  }

  wpms: Mark[] = [];

  initializeMarks() {
    for (let i = this.minWpm; i <= this.maxWpm; i += 50) {
      this.wpms.push(createWpm(i));
    }
  }

  render() {
    const styles = {
      textarea: {
        width: "100%",
        height: "25vh"
      }
    };

    return (
      <div>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={10}>
            <TextField
              id="reading-text-input"
              label="The text that should be displayed"
              multiline
              rows="10"
              defaultValue=""
              style={styles.textarea}
              margin="normal"
              variant="outlined"
              onChange={this.handleTextOnChange}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography id="discrete-slider-always" gutterBottom>
              Adjust WPM (words per minute) speed
            </Typography>
            <Slider
              defaultValue={this.wpms[0].value}
              getAriaValueText={valueToText}
              aria-labelledby="discrete-slider-always"
              max={this.maxWpm}
              min={this.minWpm}
              step={50}
              marks={this.wpms}
              valueLabelDisplay="on"
              onChange={this.handleSliderChange}
              style={{ margin: "50px 0" }}
            ></Slider>
          </Grid>
          <Grid item xs={10}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleButtonOnClick}
            >
              Start reading
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default enhance(Text);
