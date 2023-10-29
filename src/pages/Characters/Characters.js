import React, { useState, useEffect } from "react";
import axios from "axios";

function Character() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get(
          `https://anapioficeandfire.com/api/characters?page=${page}&pageSize=10`
        );

        setCharacters((prevCharacters) => {
          const combinedCharacters = [...prevCharacters, ...response.data];

          const namedCharacters = combinedCharacters.filter(
            (character) => character.name && character.name.trim() !== ""
          );

          if (namedCharacters.length < 10 && response.data.length > 0) {
            setPage(page + 1);
          } else {
            setIsLoading(false);
          }

          return namedCharacters;
        });
      } catch (error) {
        console.error("Error fetching characters:", error);
        setIsLoading(false);
      }
    }

    fetchCharacters();
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Game of Thrones Characters</h1>
      {characters.map((character) => (
        <div key={character.url}>
          <h2>{character.name}</h2>
          {character.aliases && character.aliases.length > 0 && (
            <p>
              <strong>Aliases:</strong> {character.aliases.join(", ")}
            </p>
          )}
          {character.titles && character.titles.length > 0 && (
            <p>
              <strong>Titles:</strong> {character.titles.join(", ")}
            </p>
          )}
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          {/* can add more character attributes if the API provides more details */}
        </div>
      ))}
    </div>
  );
}

export default Character;
