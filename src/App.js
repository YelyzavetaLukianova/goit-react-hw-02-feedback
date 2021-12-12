import "./App.css";
import { Component } from "react";
import SectionTitle from "./components/SectionTitle/SectionTitle.jsx";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const { id } = e.target;
    this.setState((prevstate) => ({ [id]: prevstate[id] + 1 }));
  };

  countTotalFeedback = () => {
    const { neutral, good, bad } = this.state;
    return neutral + good + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { neutral, good, bad } = this.state;
    const sum = neutral + good + bad;
    const result = (good * 100) / sum;
    return result ? Math.floor(result) : "no data";
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <SectionTitle />
        <FeedbackOptions handleIncrement={this.handleIncrement} />
        <Statistics
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}

export default App;
