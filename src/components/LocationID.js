import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import updateLoca from "./updateLoca"

export default function LocationId(props) {
  const { id } = useParams();
  const [LocationId, setLocationId] = useState([]);
  const URL = `https://travelbackend.fly.dev/location/${id}`;
  const getLoca = async () => {
    try {
      const response = await fetch(URL);
      const locationData = await response.json();
      setLocationId(locationData);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();

  const updateLocation = async () => {
    console.log('update button being hit updateLocation() LocationId.js ')
    try {
      const options = {
        method: "PUT",
      };

      const response = await fetch(URL, options);
      const updatedLocation = await response.json();

      navigate(`/location/${id}/update`);
    } catch (err) {
      navigate(URL);
    }
  };

  const removeLocation = async () => {
    try {
      const options = {
        method: "DELETE",
      };

      const response = await fetch(URL, options);
      const deletedLocation = await response.json();

      navigate("/");
    } catch (err) {
      navigate(URL);
    }
  };
  useEffect(() => {
    getLoca();
  }, []);

  return (
    <div>
      <div className="container">
        <img src={LocationId.images} />
        <div>{LocationId.location}</div>
        <div>{LocationId.information}</div>
        <div>{LocationId.attractions}</div>
        <div>{LocationId.cost}</div>
        <div>
          <button className="delete" onClick={removeLocation}>
            Remove Location
          </button>
          <Link to="/location/`${id}`/update"> 
          <button className="update" onClick={updateLocation}>
            Update Location
          </button>
          </Link>
          <Link to="/">
            <button>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
