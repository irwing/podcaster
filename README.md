# Mini aplicación para escuchar podcasts musicales

Este proyecto es una mini-aplicación para escuchar podcasts musicales. La aplicación cuenta con tres vistas: vista principal, detalles de un podcast y detalles de un capítulo de un podcast.

## Navegación
 Tecnologías utilizadas
La aplicación está desarrollada en Next.js, un framework de React que permite crear aplicaciones web de servidor y cliente.

## Vistas
### Vista principal
En la vista principal se muestra una lista de los podcasts disponibles. Cada podcast cuenta con una imagen, un título y una breve descripción.

### Detalles de un podcast
En la vista de detalles de un podcast se muestra información más detallada sobre el podcast, incluyendo su imagen, título, descripción y una lista de los capítulos disponibles.

### Detalles de un capítulo de un podcast
En la vista de detalles de un capítulo de un podcast se muestra información más detallada sobre el capítulo, incluyendo su título, descripción y un reproductor para escuchar el episodio.

## Navegación
La navegación en la aplicación se realiza en el lado del cliente, sin refrescar completamente el documento principal en ningún momento.

## Instalación

Para instalar las dependencias del proyecto, se debe ejecutar el siguiente comando:

```bash
npm install
```

## Modos de desarrollo y producción
La aplicación cuenta con dos modos: modo development y modo production. En modo development se sirven los assets sin minimizar, mientras que en modo production se sirven los assets concatenados y minimizados.

Para ejecutar la aplicación en modo development, se debe utilizar el siguiente comando:

```bash
npm run dev
```

Para ejecutar la aplicación en modo production, se debe utilizar el siguiente comando:

```bash
npm run build
npm run start
```

## Issues

Si encuentras algún error o tienes alguna sugerencia, puedes crear un issue en este repositorio.