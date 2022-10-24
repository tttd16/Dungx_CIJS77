import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="title__Slide">
      <h3>{props.titleSlide}</h3>
    </div>
  );
}

Card.propTypes = {
  titleSlide: PropTypes.string
}

export default Card;
