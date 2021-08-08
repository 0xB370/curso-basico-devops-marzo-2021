# Desafio final del curso de DevOps

Para darle un cierre a las clases de Craftech, los invitamos a intentar completar estas pequeñas tareas que resumen lo visto en el curso!

### Resumen

Se cuenta con el diseño de una aplicación para prestamos por internet. El backend fue construido con [Django](https://www.djangoproject.com/) utilizando [Python v3.7](https://www.python.org/), la cual se encuentra [acá](backend/) y el frontend fue construido con [React.js](https://es.reactjs.org/), la cual se encuentra [acá](frontend/).

Se necesita:

1. Armar un diagrama de los componentes que se involucran (Base de datos, deployments, etc) como si estuviera deployado en AWS.

1. Dockerizar las aplicaciones Frontend y Backend

1. Armar un docker-compose que nos permita levantar la aplicación entera y sus dependencias

1. Armar los manifiestos de Kubernetes para deployar las aplicaciones y sus dependencias en un cluster (Utilizar minikube como ref)

1. Diseñar un pipeline de CI/CD de la aplicación frontend y backend que nos permita deployar en 2 entornos (dev y prod)

### Resolución

Se propone la siguiente topología:

![Image description](https://i.imgur.com/dC7gGS2.png)

El despliegue se realizará haciendo uso de EKS (Elastic Container Service for Kubernetes), un balanceador de carga que evite que las instancias se vean desbordadas de peticiones, y usando los servicios RDS y S3 para la persistencia (instancias separadas para el despliegue en dev y en prod).

El flujo de trabajo planteado es el siguiente:
- Cuando un miembro del equipo de desarrollo realiza un push/merge, se disparará un proceso que correrá los tests unitarios, los cuales, en caso de fallar, no tendrán permitido mergear a las ramas dev o main, debido a que están protegidas.
- Luego, se procede a hacer un build de la imagen de Docker con el fin de actualizar el repositorio en la Registry.
- En caso de que el push/merge se haya realizado en la rama dev o main, se realizará el despliegue en el namespace challenge-dev o challenge-prd respectivamente.
- Finalmente, se enviará una notificación de Slack informando sobre el estado con el que terminó el proceso, el cual también se puede consultar en el badge integrado al README de este repositorio.