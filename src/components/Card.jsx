import React from 'react';

const Card = (props) => {
  return (
    <section className='card'>
      <img className='card-img' src={props.imageUrl} />
      <div className='card-info'>
        <p className='location'>{props.location}</p>
        <a className='maps-link' href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <h2 className='card-title bold'>{props.title}</h2>
        <p className='bold'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='card-desc'>{props.description}</p>
      </div>
    </section>
  );
};

export default Card;
