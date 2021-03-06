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

### Join 13/19
- Join: Se usa como metodo para unir un array con un caracter que se definal como parametro
```
const elements = ['Fire', 'Air', 'Water'];
const rta = elements.join('--');
Fire--Air--Water
```
- Split: Se usa para separar un string en array segun el parametro que se de.
```
const title = 'Curso de manipulacion de arrays';
const titleFinal = title.split(' ').join('-').toLowerCase();
curso-de-manipulacion-de-arrays
```

### Concat 14/19
Este metodo une 2 arrays creando un arreglo nuevo sin modificar los originales.
Tener muy en cuenta el uso de spread operator.

### Flat 15/19
Manipulación de arrays dentro de otros arrays
```
const matriz = [
    [1,2,3],
    [4,5,6, [12,13,14]],
    [7,8,9]
];

const rta = matriz.flat(2); // Se le debe indicar que cantidad de niveles aplanar
console.log(rta);
[
  1,  2,  3,  4, 5,
  6, 12, 13, 14, 7,
  8,  9
]
```

### FlatMap 16/19
Es una union entre el metodo float y el map

### Mutable functions 17/19
Combinacion de metodos inmutable y metodos mutables

### Sort 18/19
Es un metodo para hacer ordenamiento del array original.
```
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
[ 1, 100000, 21, 30, 4 ]

numbers.sort((a,b) => a-b );
[ 1, 4, 21, 30, 100000 ]
```