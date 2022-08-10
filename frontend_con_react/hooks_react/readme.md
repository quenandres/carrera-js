### Que son los hooks
Es una caracteristica que salio en el 2019 en la version 16.8

## __2/45 ¿Qué son los React Hooks y cómo cambian el desarrollo con React?__
Vienen a resolver el problema de los componentes ya que no era facil compartir la logica de estado entre ellos mismos.
Un hook es una caracteristica especial que permite conectarnos con una ccaracteristicas especiales de react.

## __3/45 useState: estado en componentes creados como funciones__

Ejemplo basico de useState.

```js
import React, {useState} from 'react'

export const Header = () => {

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className='Header'>
        <h1>ReactHooks</h1>
        <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Ligth Mode'}</button>
    </div>
  );
}
```