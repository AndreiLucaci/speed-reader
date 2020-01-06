import React, { Component } from "react";

import { Word } from "../Word/Word";

import { connect } from "react-redux";
import { mapStateToProps } from "./connect.config";

type ReaderProps = {
  text: string;
  wpm: number;
};

type ReaderState = {
  currentWord: string;
  interval: number;
  intervalId?: NodeJS.Timeout;
  words: string[];
};

class Reader extends Component<ReaderProps, ReaderState> {
  private milisecondNumerator = 60000;

  constructor(props: ReaderProps) {
    super(props);

    this.state = {
      currentWord: "",
      interval: 0,
      intervalId: undefined,
      words: []
    };

    this.tick = this.tick.bind(this);
    this.computeInterval = this.computeInterval.bind(this);
  }

  componentWillReceiveProps(nextProps: ReaderProps) {
    this.initWords(nextProps);
    this.computeInterval(nextProps);
  }

  initWords(props: ReaderProps = this.props) {
    this.setWords(props.text.split(/[\s\r\n]+?/gm).map(x => x.trim()).filter(x => x));
  }

  setWords(array: string[]) {
    this.setState({
      words: array
    });
  }

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  computeInterval(props: ReaderProps = this.props) {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }

    const interval = this.milisecondNumerator / props.wpm;
    const intervalId = setInterval(this.tick, interval);

    if (interval) {
      this.setState({
        interval,
        intervalId
      });
    }
  }

  tick() {
    this.nextWord();
  }

  nextWord() {
    const array: string[] = [...this.state.words];

    if (array.length) {
      this.setState({
        currentWord: array.shift() || "",
        words: array
      });
    }
  }

  render() {
    return (
      <div>
        <Word word={this.state.currentWord} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Reader);
