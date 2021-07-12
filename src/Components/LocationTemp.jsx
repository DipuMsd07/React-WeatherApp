import React from "react";

const LocationTemp = (props) => {
  return (
    <div className="info">
      <h2 className="location">
        <i className="fas fa-street-view"></i>
        {props.search}
      </h2>
      <h1 className="temp">{props.city.temp}&#176;C</h1>
      <h3 className="min_max">
        Min : {props.city.temp_min}&#176;C | Max : {props.city.temp_max}&#176;C
      </h3>
    </div>
  );
};

export default LocationTemp;
