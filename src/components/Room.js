import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/service-1.jpeg';
import PropTypes from "prop-types";

export default function Room({service}) {
  const {name, slug, images, price} = service;

  return(
    <article className="room">
      <div className="img-container">
      <img src={images[0] || defaultImg} alt="services" />
      <div className="price-top">
        <h6>FCFA{price}00</h6>
        <p>Per Month</p>
      </div>
      <Link to={`/services/${slug}`} className="btn-primary room-link">
      Features
      </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  )
}

Room.propTypes = {
  service:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired,
  })
}