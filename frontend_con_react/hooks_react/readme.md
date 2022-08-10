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

## __4/45 useEffect: olvida el ciclo de vida, ahora piensa en efectos__
El efecto se ejecuta segun el parametro que pongamos
```js
useEffect(() => {    
    
}, []);
```
Cada vez que este parametro cambie [], se ejecutara nuevamente el effect.
Si esta el array vacio, simplemente se ejecutara una vez.
## __ __
## __ __
## __ __
## __ __
## __ __
## __ __