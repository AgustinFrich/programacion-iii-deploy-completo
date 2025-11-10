# Guía de deploy FRONT con HTML, CSS y JS. BACK con NODE y EXPRESS.

## Estructura del proyecto

Es una estructura básica y se puede mejorar, por ejemplo, los archivos de ambiente del front se pueden mover a una carpeta.

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

1. Para el back tenemos que hacer un "Web Service"

---
<img width="417" height="479" alt="image" src="https://github.com/user-attachments/assets/16685063-a5ed-49a3-b146-f083876f4b65" />

---

2. Elegimos repositorio

---
<img width="1230" height="255" alt="image" src="https://github.com/user-attachments/assets/57f33413-2b9b-43a9-891f-ea9107ce6376" />

---

3. Lo mismo que con el front: no hace falta tocar nada, podemos cambiar el nombre o rama del github. El lenguaje es NODE.

---
<img width="1152" height="739" alt="image" src="https://github.com/user-attachments/assets/2e00bb3a-581d-468c-895d-d768bb882562" />

---

4. Hay dos formas de configurar el arranque:

4.1 La forma más directa, configurar todo en render.
- La carpeta root es donde está nuestro package.json
- El build command en este caso es solamente ```npm install``` o ```npm i``` para avrebiar
- El comando de arranque es ```node --env-file=.env index.js``` igual que como lo haríamos en local (sin el --watch ya que no hay cambios que observar)

---
<img width="1068" height="331" alt="image" src="https://github.com/user-attachments/assets/c495c462-864c-43eb-a5ea-f02bd4da9edc" />

---

4.2 La alternativa es en el comando de arranque, donde podríamos poner ```npm start``` que lo que hace es ejecutar el script start de nuestro package.json

---
<img width="986" height="126" alt="image" src="https://github.com/user-attachments/assets/267d291f-9c17-418e-a0cb-118e257c7ed3" />

---

Y luego configurar el script "start" en el package.json

---
<img width="694" height="171" alt="image" src="https://github.com/user-attachments/assets/a23ab073-ee81-4e82-a878-e52f4bbd8b61" />

---

El comando al final es el mismo, la única diferencia es que con la segunda opción se puede controlar mejor desde el package y no depender de cambiar la configuración de render.

5. La opción gratis. En esta cursada no ponemos un peso.

---
<img width="1274" height="186" alt="image" src="https://github.com/user-attachments/assets/516b69e9-ecc8-4da0-9bed-8e659401619f" />

---

6. Variables de ambiente. Esto se hace en la partede avanzada -> secret file:

---
<img width="1050" height="382" alt="image" src="https://github.com/user-attachments/assets/30e0fcf5-9cd9-464d-949c-8c6e3a8a1bc6" />

---
<img width="1063" height="675" alt="image" src="https://github.com/user-attachments/assets/d9a570b3-1430-4a59-b361-4c0383ebc3be" />

---

Si falta alguna variable o no sabemos el valor final, lo podemos modificar después.

7. Deploy!

---
<img width="266" height="138" alt="image" src="https://github.com/user-attachments/assets/b57bdfb5-6e67-4ea2-9531-ffb9c39f72e9" />

---

8. A diferencia de la subida estática que es solo subir archivos, esta vez hay que esperar a que se instalen todos los paquetes de node y levante el servidor, lo cuál puede llegar a tardar unos minutos (sobre todo la primera vez que no hay caché guardado para acelerar el proceso).

---
<img width="827" height="546" alt="image" src="https://github.com/user-attachments/assets/eaac4607-2462-4ea4-ae1c-ff3840e6abc7" />

---

## Notas backend

- A partir de acá, solo nos queda configurar bien los ambientes para que tengan los valores reales.

- Render permite la subida de archivos con multer pero los elimina cuando el deploy se da de baja.

- El deploy se da de baja automáticamente si no se usa por un tiempo. Luego se vuelve a iniciar cuando recibe una nueva petición pero puede tartar un minuto en arrancar.

# Cierre

Vamos a configurar todo bien para que todo quede funcionando.

1. Cambio la api_url de mi front, pusheo el nuevo archivo de ambiente y ya debería conectar.

---
<img width="775" height="260" alt="image" src="https://github.com/user-attachments/assets/e3d08ccf-3a72-4a71-b011-0e3c19889ca4" />

---

2. Cambio el .env desde render del back.

---
<img width="324" height="643" alt="image" src="https://github.com/user-attachments/assets/9c69f6fc-065e-4e48-809d-06ccb75fea6d" />

---
<img width="1884" height="370" alt="image" src="https://github.com/user-attachments/assets/a950a0cb-3e2a-4570-9b28-fb32d833e660" />

---
<img width="1114" height="544" alt="image" src="https://github.com/user-attachments/assets/bb976e2f-4fa1-4088-b636-4daeeffda5a5" />

---

<img width="301" height="146" alt="image" src="https://github.com/user-attachments/assets/bb8e1a45-7819-4be9-9216-11f3d151855e" />
---

3. Esperamos a que se hagan las builds y probamos...

<img width="570" height="255" alt="image" src="https://github.com/user-attachments/assets/cc0ec70b-7f9d-4291-a3d1-7d71b83e4085" />

URL FRONT: https://prog-iii-front.onrender.com/

URL BACK: https://prog-iii-back.onrender.com/

# Final

Cualquier duda, consulta, opinión, corrección pueden aviar y se modifica o se agrega al readme. 
Incluso pueden enviar un pull request con cambios sugeridos.
Gracias y saludos!
