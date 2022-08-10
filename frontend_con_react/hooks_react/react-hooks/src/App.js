import {useState} from 'react'
import { Characters } from './components/Characters';
import { Header } from './components/Header';
import ThemeContext from './context/ThemeContext';
import './App.css';


function App() {

  const [theme, setTheme] = useState('ligthMode');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={'App ' + theme}>
        <Header/>
        <Characters/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
