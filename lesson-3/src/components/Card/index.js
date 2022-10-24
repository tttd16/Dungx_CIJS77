import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="title__slide">
      <h3>{props.title__slide}</h3>
    </div>
  );
}

Card.propTypes = {
  title__slide: PropTypes.string
}

export default Card;
