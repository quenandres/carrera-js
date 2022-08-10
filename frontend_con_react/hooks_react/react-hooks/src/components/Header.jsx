import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

export const Header = () => {

  const [darkMode, setDarkMode] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    theme === 'ligthMode' ? setTheme("darkMode") : setTheme("ligthMode");
  }

  return (
    <div className='Header'>
        <h1>ReactHooks</h1>
        <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Ligth Mode'}</button>
    </div>
  );
}
