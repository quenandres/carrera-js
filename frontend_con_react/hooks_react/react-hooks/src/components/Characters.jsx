import React, {useState, useEffect} from 'react';
import { ItemCharacter } from './ItemCharacter';

export const Characters = () => {
    
    const [ characters, setCharacters ] = useState([]);

    useEffect(() => {    
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
      console.log(characters);
    }, [])
    

  return (
    <div>
        {characters.map(character => (
            <ItemCharacter character={character}/>
        ))}
    </div>
  )
}
