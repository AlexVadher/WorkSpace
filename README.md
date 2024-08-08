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
npm i express express-handlebars morgan mysql2 # dependencias del proyecto (obligatorias)

nppm i nodemon -D # para reiniciar el servidor automaticamente al guardar cambios en el codigo (opcional)

npm i -D dotenv # para variables de entorno en .env (opcional)
```

### 3. Crear la base de datos

#### Crear base de datos Manualmente:

1.  Se debe crear una base de datos en MySQL o MariaDB.
2.  Se debe crear una tabla llamada `empleados` con los siguientes campos:
    -   id (int, autoincremental, primary key)
    -   name (varchar(50))
    -   lastname (varchar(50))
    -   age (int)
    -   tipo_persona_id (int, foreign key)
3.  Se debe crear una tabla llamada `tipo_persona` con los siguientes campos:
    -   id (int, autoincremental, primary key)
    -   tipo (varchar(50))
4.  Se debe configurar las variables de entorno en un archivo `.env` en la raiz
    del proyecto. (opcional si va usar dotenv).

#### Crear base de datos con el script

1. Se debe configurar las variables de entorno en un archivo `.env` en la raiz
   del proyecto. (opcional si va usar dotenv).
2. Se debe ejecutar el script `query.sql` en la base de datos.

**Ubicacion Script**

```bash
crud_node_01
└── src
    ├── database
    │   └── query.sql # script para crear la base de datos y las tablas
```

### 4. Estrucutra del proyecto:

El proyecto tiene la siguiente estructura de archivos y directorios, si no se
creo de esta manera fallaste como programador. :smile: intenta de nuevo y sigue
las instrucciones.

```bash
WorkSpace/
│   ├── .env # Variables de entorno (base de datos)
│   ├── .gitignore # archivos y directorios ignorados por git
│   ├── package.json # dependencias y scripts de npm, nombre del proyecto y version
│   ├── package-lock.json # dependencias y scripts de npm bloqueados
│   └── src # directorio de la aplicacion
│       ├── node_modules # dependencias del proyecto
│       ├── database # directorio de la base de datos
│       │   └── query.sql # script para crear la base de datos y las tablas
│       ├── database.js # archivo de configuracion de la base de datos
│       ├── index.js # punto de entrada de la aplicacion
│       ├── public # archivos estaticos (css, js, imagenes)
│       │   └── img # imagenes
│       │       └── node.png # imagen logo node.js
│       ├── routes # definicion de rutas
│       │   └── personas.routes.js # rutas de la aplicacion
│       └── views # vistas de handlebars (html)
│           ├── index.hbs # vista principal
│           ├── layouts # plantillas de handlebars
│           │   └── main.hbs # plantilla principal
│           ├── partials # secciones de las vistas
│           │   └── navigation.hbs # barra de navegacion
│           └── personas # vistas de personas
│               ├── add.hbs # formulario de agregar
│               ├── edit.hbs # formulario de editar
│               └── list.hbs # lista de personas
└── README.md # instrucciones de configuracion y uso
```
