# CRUD Node.js Project

Este proyecto es un CRUD básico utilizando Node.js, Handlebars, Morgan, MySQL y
Nodemon.

![alt text](<crud_node_01/src/public/img/Captura desde 2024-08-07 17-02-58.png>)

## Requisitos:

-   Node.js (v20.16.0 o superior)
-   MySQL o MariaDB (v10.4.11 o superior)
-   Git (v2.17.1 o superior)

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/AlexVadher/WorkSpace.git
```

**Nota:** si no tienes instalado git, puedes descargar el repositorio en formato
zip.

### 2. Instalar las dependencias

```bash
npm i express express-handlebars morgan mysql2 # dependencias del proyecto (obligatorias).

npm i nodemon -D # para reiniciar el servidor automaticamente (opcional).

npm i -D dotenv # para variables de entorno en .env (opcional).
```

### 3. Crear la base de datos

#### Crear base de datos Manualmente:

1.  Se debe crear una base de datos en MySQL o MariaDB.
2.  Se debe crear una tabla llamada `Personas` con los siguientes campos:
    -   id (int, autoincremental, primary key)
    -   name (varchar(50))
    -   lastname (varchar(50))
    -   age (int)
    -   tipo_persona_id (int, foreign key)
3.  Se debe crear una tabla llamada `Tipos_Personas` con los siguientes campos:
    -   id (int, autoincremental, primary key)
    -   tipo (varchar(50))
4.  Se debe configurar las variables de entorno en un archivo `.env` en la raiz
    del proyecto. (opcional si va usar dotenv).

#### Crear base de datos con el script

1. Se debe ejecutar el script `query.sql` en el cliente o Gestor de su
   preferencia.

**Ubicacion Script**

```bash
crud_node_01
└── src
    ├── database
    │   └── query.sql # script para crear la base de datos y las tablas.
```

### 4. Estrucutra del proyecto:

El proyecto tiene la siguiente estructura de archivos y directorios, si no se
creo de esta manera fallaste como programador. Intenta de nuevo y sigue las
instrucciones. :satisfied: :v:

```bash
WorkSpace
│
├── crud_node_01 # proyecto node.js.
│   ├──── node_modules # dependencias del proyecto.
│   ├──── src # directorio de la aplicacion.
│   │     │
│   │     ├── database # directorio de la base de datos.
│   │     │   └── query.sql # script para crear la base de datos y las tablas.
│   │     │
│   │     ├── public # archivos estaticos (css, js, imagenes).
│   │     │   └── img # imagenes.
│   │     │       └── node.png # imagen logo node.js,
│   │     │
│   │     ├── routes # definicion de rutas.
│   │     │   └── personas.routes.js # rutas de la aplicacion.
│   │     │
│   │     ├── views # vistas de handlebars (html).
│   │     │    ├── index.hbs # vista principal.
│   │     │    │
│   │     │    ├── layouts # plantillas de handlebars.
│   │     │    │   └── main.hbs # plantilla principal.
│   │     │    │
│   │     │    ├── partials # secciones de las vistas.
│   │     │    │   └── navigation.hbs # barra de navegacion.
│   │     │    │
│   │     │    └── personas # vistas de personas.
│   │     │        ├── add.hbs # formulario de agregar.
│   │     │        ├── edit.hbs # formulario de editar.
│   │     │        └── list.hbs # lista de personas.
│   │     │
│   │     │
│   │     │
│   │     ├── database.js # archivo de configuracion de la base de datos.
│   │     └── index.js # punto de entrada de la aplicacion.
│   │
│   │
│   ├── .env # Variables de entorno (base de datos).
│   ├── .gitignore # archivos y directorios ignorados por git.
│   ├── package.json # dependencias y scripts de npm, nombre del proyecto y version.
│   └── package-lock.json # dependencias y scripts de npm bloqueados.
│
├── guias # guias de project.
└── README.md # instrucciones de configuracion y uso.
```

### Guias de Project:

1. [Node JS V.1](<guias/Node js + express + MySQL_v1.pdf>)
2. [Node JS V.2](<guias/Node js + express + MySQL_v2.pdf>)

### Recursos:

-   [Node.js](https://nodejs.org/es/)
-   [Express](https://expressjs.com/es/)
-   [Handlebars](https://handlebarsjs.com/)
-   [Morgan](https://www.npmjs.com/package/morgan)
-   [MySQL](https://www.mysql.com/)
-   [Nodemon](https://www.npmjs.com/package/nodemon)
-   [dotenv](https://www.npmjs.com/package/dotenv)

Autor: Alex Vadher
