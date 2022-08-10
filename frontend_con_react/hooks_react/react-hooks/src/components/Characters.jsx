import React, {useState, useEffect, useReducer, useMemo, useRef} from 'react';
import { ItemCharacter } from './ItemCharacter';
import '../assets/css/Characters.css';

export const Characters = () => {

    const initialState = {
      favorites: []
    }
    const favoriteReducer = (state, action) => {
      switch(action.type) {
        case 'ADD_TO_FAVORITE':
          if( !state.favorites.includes(action.payload) ) {
            return {
              ...state,
              favorites: [...state.favorites, action.payload]
            };
          }
          break;
        default:          
          return state;
      }
    }
    
    const [ characters, setCharacters ] = useState([]);
    const [ favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [ search, setSearch ] = useState('');
    const searchInput = useRef(null);
    

    const handleClick = favorite => {
      dispatch({type: 'ADD_TO_FAVORITE', payload: favorite});
    }

    useEffect(() => {    
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
      console.log(characters);
    }, []);

    const handleSearch = () => {
      setSearch(searchInput.current.value);
    }
    
    /* const filteredUsers = characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLocaleLowerCase());
    }); */

  const filteredUsers = useMemo(() => 
    characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLocaleLowerCase());
    }),
    [characters, search]
  );

  return (
    <div>
      {favorites.favorites.map(favorite => (
        <div className='icon_favorite' key={favorite.id}>
          <img src={favorite.image}/>
        </div>
      ))}
      <br />
      <div className="Search">
        <input type='text' value={search} ref={searchInput} onChange={handleSearch} />
      </div>

        {filteredUsers.map(character => (
            <>
              <h2>{character.name}</h2>
              {/* <ItemCharacter character={character}/> */}
              <button type='button' onClick={() => handleClick(character)}>Favorito</button>
            </>
        ))}
    </div>
  )
}
