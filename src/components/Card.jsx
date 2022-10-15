import React from 'react';

// Images
import pin from '../images/pin.png';

const Card = (props) => {
  return (
    <section className='card'>
      <img className='card-img' src={props.imageUrl} />
      <div className='card-info'>
        <div className='card-location'>
          <img className='pin-img' src={pin} />
          <p className='location light'>{props.location}</p>
          <a className='maps-link light' href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className='card-title bold'>{props.title}</h2>
        <p className='date bold'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='card-desc light'>{props.description}</p>
      </div>
    </section>
  );
};

export default Card;
