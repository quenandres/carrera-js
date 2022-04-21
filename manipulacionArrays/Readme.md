### ForEach 2/19


### Mutable o Inmutable 3/19
Con la imutabilidad se controlan un poco mas los cambios
- Cuando se quiere hacer una copia, unicamente se copian los elementos que se cambiaron para optimización de memoria.

### Map 4/19
El map transforma un array una vez ejecutado el map se obtiene otro array con los cambios realizados, el metodo map es inmutable.
Siempre se debe hacer un return para la respuesta de este metodo.

### Map Reloaded 5/19
Con los objetos es diferente, ya que js intenta usar la memoria para los objetos y estos son mutados asi se use el metodo map.

### Filter 6/19
Filtra elementos segun la condicional, los elementos que cumplan la condicion van a ser parte del nuevo array.
Retorna el maximo el mismo numero de elementos que el array que se esta filtrando.

### Reduce 7/19
Toma un array y lo reduce a un solo valor.

### Reduce Reloaded 8/19
Se pueden combinar varios metodos de manipulación de arrays para llevar a un resultado concreto.

### Some 9/19
La respuesta nos indica un true o un false.

### Every 10/19
Este método es el contrario a some(), devuelve true o false sí TODOS los elementos del array cumplen la condición.

### Find y FindIndex 11/19
- Find: unicamente retorna un objeto que cumpla con la condicional de lo contrario devuelve ```undefined```
- Finindex: retornar unicamente la posicion del objeto que haya cumplido con la condicional, de lo contrario retorna un ```-1```

### Includes 12/19
```
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true
```

Tambien se puede incluir un segundo parametro para definir desde donde queremos que haga la busqueda.
```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```