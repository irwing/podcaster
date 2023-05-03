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

## Pool de pruebas

| Suite | Test | Tipo | Descripción |
|-------|------|------|-------------|
|Vista Principal | Debe renderizar correctamente | Unitario | Se asegura que la vista principal se renderice correctamente |
|Vista Principal | Debe mostrar la lista de podcasts | Unitario | Se asegura que la vista principal muestre la lista de podcasts correctamente |
|Vista Principal | Debe mostrar un mensaje si no hay podcasts | Unitario | Se asegura que la vista principal muestre un mensaje si no hay podcasts disponibles |
|Vista de detalles del podcast | Debe mostrar información detallada del podcast | Unitario | Se asegura que la vista de detalles del podcast muestre la información detallada del podcast seleccionado |
|Vista de detalles del podcast | Debe mostrar un error 404 si no se encuentra el podcast | Unitario | Se asegura que la vista de detalles del podcast muestre un error 404 si no se encuentra el podcast seleccionado |
|Vista de detalles del podcast | Debe mostrar la lista de capítulos del podcast | Unitario | Se asegura que la vista de detalles del podcast muestre la lista de capítulos del podcast seleccionado |
|Vista de detalles del podcast | Debe mostrar un mensaje si no hay capítulos en el podcast | Unitario | Se asegura que la vista de detalles del podcast muestre un mensaje si no hay capítulos disponibles |
|Vista de detalles de un capítulo de podcast | Debe mostrar información detallada del capítulo | Unitario | Se asegura que la vista de detalles de un capítulo de podcast muestre la información detallada del capítulo seleccionado |
|Vista de detalles de un capítulo de podcast | Debe mostrar un mensaje sin información si el capítulo no tiene información | Unitario | Se asegura que la vista de detalles de un capítulo de podcast muestre un mensaje sin información si el capítulo no tiene información |
|Navegación | Debe permitir la navegación entre las diferentes vistas de la aplicación | Funcional | Se asegura que la navegación entre las diferentes vistas de la aplicación se realice correctamente |
|Búsqueda de podcasts | Debe permitir buscar podcasts por título | Funcional | Se asegura que la búsqueda de podcasts por título se realice correctamente |
|Búsqueda de podcasts | Debe manejar el error cuando no se encuentran resultados | Funcional | Se asegura que la búsqueda de podcasts por título muestre un mensaje de error cuando no se encuentran resultados |
|Navegación | Debe permitir seleccionar un podcast de la lista principal | e2e | Se asegura que el usuario pueda seleccionar un podcast de la lista principal y se muestren correctamente los detalles del podcast |
|Búsqueda de podcasts | Debe permitir buscar podcasts por título | e2e | Se asegura que la búsqueda de podcasts por título se realice correctamente |
|Navegación | Debe manejar el error cuando se accede a una vista inexistente | e2e | Se asegura que la aplicación maneje correctamente el error cuando se accede a una vista inexistente |
|Navegación | Debe manejar el error cuando se accede a detalles de un podcast inexistente | e2e | Se asegura que la aplicación maneje correctamente el error cuando se accede a detalles de un podcast inexistente |
|Navegación | Debe manejar el error cuando se accede a detalles de un capítulo inexistente | e2e | Se asegura que la aplicación maneje correctamente el error cuando se accede a detalles de un capítulo inexistente |



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
