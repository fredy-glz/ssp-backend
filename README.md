# Backend - Sistema para módulo de psicología de la Universidad de Guanajuato

## Descripción

Este proyecto corresponde al backend desarrollado durante mi etapa de **Servicio Social Profesional**. Fue construido como una propuesta funcional para la gestión de información dentro de un entorno clínico/psicológico, contemplando usuarios, pacientes, citas, cuestionarios, contactos y distintos tipos de acceso según el rol del usuario.

Aunque fue desarrollado en una etapa en la que apenas comenzaba a profesionalizar mi forma de programar, el proyecto ya incorpora varias bases importantes de desarrollo backend, como:

- Estructura organizada por capas
- Protección de rutas
- Autenticación con JWT
- Manejo de roles y permisos
- Base de datos relacional
- Uso de Sequelize como ORM
- Separación entre modelos, controladores, rutas y configuración

Es importante mencionar que, aunque el proyecto cuenta con una lógica bien planteada y una estructura sólida para su momento, **quedó en estado demo**, por lo que puede contener algunos bugs, mejoras pendientes o áreas que podrían refactorizarse con prácticas más avanzadas.

## Objetivo del proyecto

El objetivo principal fue construir una API que permitiera administrar información relacionada con pacientes, psicólogos, citas y otros módulos asociados, manteniendo un control de acceso según el tipo de usuario autenticado.

Además de cumplir una necesidad funcional, este proyecto representó una etapa importante en mi formación, ya que me permitió aterrizar conceptos reales de backend como autenticación, relaciones entre tablas, middleware, organización del código y consumo de base de datos desde un servidor en Node.js.

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **Sequelize**
- **MySQL / MySQL2**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **Multer**
- **CORS**
- **Body-parser**
- **Nodemon**

## Características principales

- Autenticación basada en **JSON Web Token**
- Protección de rutas mediante middleware
- Control de acceso por **roles**
- Manejo de contraseñas cifradas con **bcryptjs**
- Persistencia de datos en base de datos relacional
- Modelado de entidades con **Sequelize**
- Organización modular del proyecto
- Soporte para carga de archivos con **Multer**

## Estructura del proyecto

```bash
backend/
├── config/
│   └── db.config.js
├── controllers/
│   ├── admin.js
│   ├── controller.js
│   ├── patient.js
│   └── psicologo.js
├── database/
│   ├── config.js
│   └── dbConfig.js
├── models/
│   ├── citas.js
│   ├── patient-contact.js
│   ├── patient-cuestionario.js
│   ├── patient-schedule.js
│   ├── patient.js
│   ├── psicologo.js
│   ├── role.js
│   └── user.js
├── routes/
│   ├── index.js
│   ├── verifyJwtToken.js
│   └── verifySignUp.js
├── uploads/
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
