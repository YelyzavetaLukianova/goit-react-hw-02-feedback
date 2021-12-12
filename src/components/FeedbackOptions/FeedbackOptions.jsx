import React from "react";
import PropTypes from "prop-types";
import "./FeedbackOptions.css";

function FeedbackOptions(props) {
  return (
    <section className="Button__div">
      <button
        className="Button"
        type="button"
        onClick={props.handleIncrement}
        id="good"
      >
        Good
      </button>
      <button
        className="Button"
        type="button"
        onClick={props.handleIncrement}
        id="neutral"
      >
        Neutral
      </button>
      <button
        className="Button"
        type="button"
        onClick={props.handleIncrement}
        id="bad"
      >
        Bad
      </button>
    </section>
  );
}

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
