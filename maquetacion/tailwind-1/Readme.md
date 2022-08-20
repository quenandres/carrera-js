# Curso de Tailwind CSS 1

Tailwind no tiene componentes, permite crear los propios componentes.


## _2/29 Instalación y ambiente de desarrollo_

## _3/29 Directivas de Tailwind_
Limpia todos los elementos dejandolos con estilo base
```css
@tailwind base;
```
```css
@tailwind components;
```
Genera codigo de utilerias
```css
@tailwind utilities;
```


## _4/29 Personalización y configuración_

Se pueden hacer dos cosas con el archivo de configuración de Tailwind, que son :
- Reemplazar la configuración por defecto
- Aumentar la funcionalidad agregando 'elementos' extras

## _5/29 Responsive Design, Mobile First y Utility First_

*Responsive Design*
Es la forma en la que se trata de resolver de que un sitio se vea bien en cualquier dispositivo.

*Mobile First*
Centramos el desarrollo primero para los dispositivos moviles.

*Utility First*
Es la forma en la que se nombran las clases en css
```css
bg-white /* Indicando que va a tener fondo blanco */
rounded-lg /* indicando que tendra bordes redondeados */
```
Estos busca quitar la responsabilidad del equipo en crear los nombre de las clases mas referenciados.

## _6/29 Colores_
Los elementos que pueden ser afectados por el color son:
- Fondo
- Texto
- Border
- Placeholder

```css
#Fondo
bg-
#Text
text-
#Border
border-
border-blue-
```