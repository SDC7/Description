import React from 'react';
import '../public/style.css';

const Description = (props) => {

  return (
    <div id="description">
      <div id ="owner">
        <div className="ownerSec">
          <img className="ownerIcon" src={props.description.imageUrl}></img>
          <div className="ownerName">{props.description.Owner}</div>
        </div>
      </div>
      <div className="descriptionBox">
        <div className="sizeHeader">{props.description.full}</div>
        <div className="name">{props.description.houseName}</div>
        <div className="city">{props.description.city}</div>
        <div className="size"><i className="fa fa-home"></i>  {props.description.full}</div>
         <div className="house">{props.description.bedrooms} bedrooms {props.description.beds} beds {props.description.guests} guests {props.description.baths} baths</div>
        <div className="lockHead"><i className="fa fa-key"></i>  Self check-in </div>
        <div className= "lockOption"> Easily check yourself in with the {props.description.lock}</div>
        <div className = "lockHead"><i className="fa fa-map-marker"></i>   Great Location </div>
        <div className= "lockOption"> {props.description.rate}% of recent guests gave this home's location a 5-star rating.</div>
        <div className="description">{props.description.description}</div>
        <div className="contact">Contact host</div>
        <div className="amenitiesHead">Amenities </div>
        <div className="bullets">-{props.description.amenities}</div>

      </div>

    </div>
  )

}

export default Description;

