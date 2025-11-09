# Guía de deploy FRONT con HTML, CSS y JS. BACK con NODE y EXPRESS.

## Estructura del proyecto

Es la estructura más básica posible y se puede mejorar, por ejemplo, los archivos de ambiente del front se pueden mover a una carpeta.

<img width="459" height="387" alt="Captura de pantalla 2025-11-09 162540" src="https://github.com/user-attachments/assets/3d499765-530b-4e79-82f3-cce2a9139f6e" />

## Despliegue FRONT

1. Ir a render, crear su cuenta (recomendado con github para tener acceso a los repositorios facilmente). Crear un proyecto de “Static Site”. Un sitio estático son archivos subidos que se ejecutan del lado del cliente, render no ejecuta nada sobre ellos, solo los sube.

---
<img width="445" height="351" alt="Captura de pantalla 2025-11-09 155934" src="https://github.com/user-attachments/assets/95d99823-6999-4374-96dd-402fa25a0ad3" />

---

2. Si conectaron con github, verán ahí su repositorio.

---
<img width="1133" height="269" alt="image" src="https://github.com/user-attachments/assets/e30f36e6-ffdc-46f5-a36a-b7fa3e6a2673" />

---

3. En el primer apartado no hace falta cambiar nada realmente, si pueden ponerle otro nombre al proyecto o revisar que la rama del github sea la que quieran deployar. Yo le cambié el nombre al proyecto.

---
<img width="1060" height="668" alt="image" src="https://github.com/user-attachments/assets/6befb057-5a34-47b7-b255-d73bb768fb54" />

---
<img width="896" height="173" alt="image" src="https://github.com/user-attachments/assets/57b42e33-b57f-4c53-9f06-53b83c57a085" />

---

4. Esto es importante. En root directory tenemos que poner la carpeta donde están nuestros archivos. Si recordamos la estructura del proyecto que está más arriba, la carpeta del front se llama "front".

  Nótese como en publish directory pone "front/ ." -> Ese punto es importante, ya que marca que la carpeta de salida es la misma que la de entrada. En muchos frameworks se compila el frontend (por ejemplo, para pasar de typescript a javascript) y la carpeta de salida suele cambiar. Este no es nuestro caso, no hay compilación ni traspilación de código, por eso el "." indica que la carpeta es la misma. Si no se coloca dará error.

---
<img width="944" height="363" alt="image" src="https://github.com/user-attachments/assets/4bfd1a62-561b-44b4-baa6-584b93fc673a" />

---

5. Deploy!

---
<img width="275" height="158" alt="image" src="https://github.com/user-attachments/assets/713b953a-9a67-4641-b71e-e3927a349ae0" />

---

6. Ahora viene lo importante. En el proyecto hay dos archivos de ambiente: uno para desarrollo local y otro para producción. Ahora debemos configurar para que se utilize uno u otro.
A diferencia del back donde está el .env de node, acá tenemos que buscar otras soluciones. Hay más que la que voy a mostrar, esta es una.

---
<img width="1358" height="278" alt="image" src="https://github.com/user-attachments/assets/32e95d8b-f56b-48d7-a521-0b5b7ed6d627" />

---

Se definen dos archivos de ambiente. Los nombres indican su propósito. Desde código, se trae el archivo de desarrollo

---
<img width="1031" height="922" alt="image" src="https://github.com/user-attachments/assets/e9ea5c6d-a3d9-40ce-8334-d29d3b99b972" />

---

La clave está en que render nos permite definir redirecciones. Podemos, por ejemplo, hacer que cuando el código esté deployado, cuando se busque el archivo ambiente.json se retorne el archivo ambiente.produccion.json

---
<img width="905" height="575" alt="image" src="https://github.com/user-attachments/assets/07483caf-604c-49e6-aa02-702cde4b4adc" />

---
<img width="1588" height="384" alt="image" src="https://github.com/user-attachments/assets/8a928716-7338-4de7-90ba-e9381fa6d41a" />

---

Y si probamos vamos a ver que esto... no funciona.

---
<img width="1144" height="506" alt="image" src="https://github.com/user-attachments/assets/cada87d8-fb0b-41f5-a3d6-6cffd97ae76b" />

---

Esto se debe a que si ya existe un archivo en el origen (o source) de la redirección, render va a tomar ese archivo. Así que podríamos no subir nuestro archivo local, ya que no sirve de nada en producción.
Podemos, por ejemplo, agregar amibente.json a nuestro .gitignore

---
<img width="398" height="210" alt="image" src="https://github.com/user-attachments/assets/4568f430-0e24-42d2-acc3-21abd9d1ea07" />

---

Si ambiente.json ya estaba subido, podemos borrarlo desde github para que tome efecto el .gitignore, ya que el .gitignore no es destructivo, por lo que si algo ya se subió hay que eliminarlo manualmente para que no se vuelva a subir.

---
<img width="751" height="542" alt="image" src="https://github.com/user-attachments/assets/333394c0-b95f-4b69-953a-8e3e3ba3983b" />

---

Y con toda esta vuelta logramos que...

---
<img width="996" height="435" alt="image" src="https://github.com/user-attachments/assets/3a5b97d1-377c-491d-ae60-5829696d3c2c" />

---

7. Con esto habremos logrado desplegar nuestro frontend. 

## Notas despliegue Frontend

- Lo importante de este proceso son dos cosas: que podamos ver nuestro html desplegado y funcionando y que podamos diferenciar la llamada a la api de localhost a nuestra url de producción.

- Existen muchos métodos para cambiar ambientes en el frontend, la idea de hacerlo como fue hecho en esta guía es adaptarse a lo que permite render. Otros servicios permiten hacer la reescritura completa del archivo en lugar de redirigir. Otros frameworks permiten hacer la redirección dentro de su propia configuración.

- El ambiente puede tener más variables, no solo porque cambian de amibente en ambiente, sinó variables que queramos cambiar cuando el deploy ya está hecho. 

## Despliegue BACK 
