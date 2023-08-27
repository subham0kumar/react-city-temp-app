import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

function Card() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Asansol");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=28f5af9cb10388e205229baeb6767455`;
      const res = await fetch(url);
      const resJson = await res.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  let iconStreet = <FontAwesomeIcon icon={faStreetView} />

  return (
    <div className="container">
      <div className="box">
        <div className="inputBox">
          <input
            type="search"
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p> No Data Found</p>
        ) : (
          <div>            
            <div className="cityInfo">
              <h1 className="location">
                {iconStreet}  {search}
              </h1>
              <h2 className="temp-value">{city.temp}° C</h2>
              <h3 className="temp-min-max">Min: {city.temp_min}° C | Max: {city.temp_max}° C</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
