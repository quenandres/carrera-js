# Curso de fundamentos de Typescript
### __1/24 Por qué usar TypeScript__
"Se pueden prevenir hasta un 15% de bugs en los proyectos por el analisis de codigo estatico."
"Typescript va a analizar el codigo contantemente, buscando fallas a la velocidad que el codigo sea escrito de forma instantanea."

### __2/24 TypeScript vs. JavaScript__
Menos errores en producción, feedbak rapido.
Tambien se le conoce como compilador.
Entre mas facil se encuentre el error mas rapido sera resolverlo.

### __3/24 Configurando nuestro proyecto__
Instalación local de ts
```
npm install typescript -D
```


### __4/24 Atrapando bugs__
```
  //@ts-check
```
### __5/24 El compilador de TypeScript__
El navegador solo reconoce js no reconoce ts tampoco node.
|Title|Description|
|------|-------|
|TS Code| (*.ts) (Classes, interface, Modules, Types).|
|Compilation/ Transpiling|(tsc) (Target: ES3, ES5, ES6).|
|Vanilla js|(*.js) Runs everywhere|

---

Se tienen archivos ts y el transpilador los convierte en codigo js.


### __6/24 Veamos el TSConfig.json__

Creación del ts config
```bash
npx tsc --init
```

Ejecución permanente del transpilador
```bash
npx tsc --watch
```

### __7/24 Qué es el tipado en TypeScript__
__JS__
```Javascript
const age = 20;
```

__TS__
```Typescript
const age: number = 20;
```

### __8/24 Tipos inferidos__
```Javascript
const age = 20; //inferida
const age: number = 20; // explicita
```

Se pueden inferir o poner de manera explicita, existe un bloqueo de uso de variables por archivo, para esto en librerias se manejan los scopes por variables ya que no se puede definir el mismo nombre de varible en otro archivo.


### __9/24 Numbers__
```typescript
(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('ProductPrice', productPrice);
  
  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1; // 29  
  console.log('customerAge', customerAge);
  
  let productInStock: number;
  console.log('productInStock', productInStock);
  if( productInStock > 10 ) {
    console.log('Is greater');    
  }

  let discount = parseInt('w');
  console.log('discount', discount);  
  if( discount <= 200 ) {
    console.log('Apply');    
  } else {
    console.log('Not Apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b010111;
  console.log('bin', bin);

  const byNumber: number = 10;
})();
```

### __10/24 Booleans__

```typescript
(() => {
  let isEnable = true;
  // isEnable = 'as';
  // isEnable = eee;
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);
  
  const random = Math.random();
  console.log('random', random);  
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);
})();
```

### __11/24 Strings__
```typescript
(() => {
  let productTitle: string = 'My amazing product';
  //productTitle = () => {return 'a';};
  productTitle = 'Change product';
  console.log('productTitle', productTitle);
  
  const productDescription = "I'm bla bla bla...";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

  const myString: string = '';
})();

```


### __12/24 Arrays__

```
(() => {
  const prices: number[] = [1,2,2,1,2,121];
  prices.push(4);
  console.log('prices');
  console.log(prices);  

  let products = ['hola', true];
  products.push(false);

  // De manera explicita le indicamos que puede aceptar estos tipos separados por el pipe
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(5);
  mixed.push('a');
  mixed.push(true);

  // Agrega Object para que podamos registrar objetos en nuestro array
  let mixedObj: (number | string | boolean | Object )[] = ['hola', true];
  mixedObj.push({});
  mixedObj.push([]);

})();

```
