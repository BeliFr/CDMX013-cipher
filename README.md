# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Top Secret](#2-top-secret)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. TOP SECRET 
En este apartado viene una descripción sobre el producto, la planeacion, los usuarios a los que va dirigido; asimismo se encuentran recopilaciones del READ.me original de Laboratoria CDMX013.

¿Qué es Top Secret?

Top secret es una  aplicación diseñada para poder intercambiar mensajes de forma secreta y divertida mediante el cifrado y descifrado de la misma , con la finalidad de que solo las personas involucradas sepan el verdadero significado . Asi se conserva le secreto, el misterio y es una forma de compartir algo intimo, de gran valor sin hacerlo público hacia todos.
Al confiar en alguien nuestro TOP SECRET estamos depositando en esa persona nuestro secreto personal, le estamos entregando un pedacito de nuestro corazón.

¿Para quién esta dirigido?

La plataforma esta dirigida hacia personas que quieren enviar mensajes secretos, de forma más divertida, que solo con un número enntre los involucrados podran cifrar, descifrar y ver el verdadero mensaje.

¿Cómo lo vera el usuario?

Esta diseñada para que sea un uso en pocos pasos:
 I.- Ingresa el mensaje a cifrar en la caja de texto
 II.-  Selecciona un número para poder desplazar.(offset)
III.- Da clic al botón de cifrar o descifrar.
IV.- Comparte tu mensaje cifrado y el número con quien gustes.

Se construyo una aplicacion web que interactua con los usuarios a través del navegador utilizando HTML, CSS y JavaScript como tecnologías.

PLANEACIÓN 

Se penso en un diseño sencillo, amigable con el usuario y de fácil uso . 
Se realizo primer boceto a lápiz y papel
<img src="/images/boceto.jpg" width="700" >

Posteriormente se paso a figma y se vio la paleta de colores
<img src="/images/figma1.jpg" width="700" >
<img src="/images/figma2.jpg" width="700" >

Asimismo se realizo un logo para que sea la marca de la aplicación,con la paleta de colores, y forma de shh de mensaje en relación al secreto.
<img src="/images/logo.jpg" width="700" >

Derivado del logo, se baso en la paleta de colores , para el fondo, los textos y botones.
<img src="/images/paleta.jpg" width="700" >

<img src="/images/paletas.jpg" width="700" >


## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

- [x] **Uso de HTML semántico**
- [x] **Uso de selectores de CSS**
- [x] **Modelo de caja (box model): borde, margen, padding**
- [ ] **Uso de selectores del DOM*
- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [ ] **Manipulación dinámica del DOM**
- [x] **Tipos de datos primitivos**
- [x] **Strings (cadenas de caracteres)**
- [x] **Variables (declaración, asignación, ámbito)**
- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [x] **Uso de bucles/ciclos (while, for, for..of)**
- [x] **Funciones (params, args, return)**
- [x] **Pruebas unitarias (unit tests)**
- [ ] **Módulos de ECMAScript (ES Modules)**
- [ ] **Uso de linter (ESLINT)**
- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [x] **Git: Instalación y configuración**
- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ] **GitHub: Despliegue con GitHub Pages**
- [x] **Diseñar un producto o servicio poniendo a la usuaria en el centro**
- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**
- [x] **Seguir los principios básicos de diseño visual**

## 4. Consideraciones generales

* Al no saber naa de tecnología ha sifdo para mi un gran aprendizaje, cada feedback, OH, ayuda de compañeras y coach marcaron una notable diferencia en mis conocimientos, que aun do reforzar, practicar y tener las bases solidas. Un reto que me encanto poder afrontar con un equipo maravilloso de personas de Laboratoria, haciendome querer ser mejor persona y una gran programadora , creyendo en mi.


## .5Pistas, tips y lecturas complementarias

### Primeros pasos

1. Se descargo para trabajar
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos fue con :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   
3.Se instalo [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
  
4. Se realizo un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort
   y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. Se instalaron las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

[Link](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También una metodología para empezar a desarrollar tareas con JavaScript:

[![Resolución de problemas con JavaScript](http://i3.ytimg.com/vi/lYfEmhLmu7A/hqdefault.jpg)](https://www.youtube.com/watch?v=lYfEmhLmu7A)

[Link](https://www.youtube.com/watch?v=lYfEmhLmu7A)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Guía para Cifrado César](https://docs.google.com/presentation/d/e/2PACX-1vTQ7-8LZDHrT4Y6AOBN72Nkfz1eJAeseBHpcHX8BSq0aFCFoZmuMjluMeyFNgK9ISKxTz0H03yGfJiT/pub?start=false&loop=false&delayms=60000)
