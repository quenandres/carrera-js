# Curso de fundamentos de Typescript
## 1/24 Por qué usar TypeScript
"Se pueden prevenir hasta un 15% de bugs en los proyectos por el analisis de codigo estatico."
"Typescript va a analizar el codigo contantemente, buscando fallas a la velocidad que el codigo sea escrito de forma instantanea."

## 2/24 TypeScript vs. JavaScript
Menos errores en producción, feedbak rapido.
Tambien se le conoce como compilador.
Entre mas facil se encuentre el error mas rapido sera resolverlo.

## 3/24 Configurando nuestro proyecto
Instalación local de ts
```
npm install typescript -D
```


## 4/24 Atrapando bugs
```
  //@ts-check
```
## 5/24 El compilador de TypeScript
El navegador solo reconoce js no reconoce ts tampoco node.
|Title|Description|
|------|-------|
|TS Code| (*.ts) (Classes, interface, Modules, Types).|
|Compilation/ Transpiling|(tsc) (Target: ES3, ES5, ES6).|
|Vanilla js|(*.js) Runs everywhere|

---

Se tienen archivos ts y el transpilador los convierte en codigo js.


## 6/24 Veamos el TSConfig.json

Creación del ts config
```bash
npx tsc --init
```

Ejecución permanente del transpilador
```bash
npx tsc --watch
```

## __7/24 Qué es el tipado en TypeScript__
__JS__
```Javascript
const age = 20;
```

__TS__
```Typescript
const age: number = 20;
```
```Javascript
const age = 20; //inferida
const age: number = 20; // explicita
```

