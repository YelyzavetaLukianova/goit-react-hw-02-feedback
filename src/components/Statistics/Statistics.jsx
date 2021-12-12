import React from "react";
import PropTypes from "prop-types";

function Statistics(props) {
  return (
    <div>
      <h2 className="Statistics__par">Statistics</h2>
      <div>
        <span className="Statistics__span">Good={props.good}</span>
        <span className="Statistics__span">Neutral={props.neutral}</span>
        <span className="Statistics__span">Bad ={props.bad}</span>
      </div>

      <h3>Total={props.countTotalFeedback()}</h3>
      <p>Positive={props.countPositiveFeedbackPercentage()}</p>
    </div>
  );
}

Statistics.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
