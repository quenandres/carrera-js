import React from 'react'
import '../assets/css/ItemCharacter.css';

export const ItemCharacter = ({character}) => {
    const {name, image, gender, species, status} = character;
  return (
    <div className='ItemCharacter'>
        <h4>{name}</h4>
        <div className='info'>
            <h6>{gender}</h6>
            <h6>{species}</h6>
            <h6>{status}</h6>
        </div>
        <div className="info">
            <img className='characterImage' src={image} alt={name}/>
        </div>
    </div>
  )
}
