import React, { useState, useEffect } from "react";
import axios from "axios";

function Houses() {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await axios.get(
          "https://www.anapioficeandfire.com/api/houses"
        );
        setHouses(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching houses:", error);
        setIsLoading(false);
      }
    }

    fetchHouses();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Game of Thrones Houses</h1>
      {houses.map((house) => (
        <div key={house.url}>
          <h2>{house.name}</h2>
          <p>
            <strong>Region:</strong> {house.region || "Unknown"}
          </p>
          <p>
            <strong>Coat of Arms:</strong> {house.coatOfArms || "Not available"}
          </p>
          {house.words && (
            <p>
              <strong>Words:</strong> {house.words}
            </p>
          )}
          {/* You can add more house attributes if the API provides more details */}
        </div>
      ))}
    </div>
  );
}

export default Houses;
