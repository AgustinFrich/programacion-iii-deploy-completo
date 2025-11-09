const archivoDeAmbiente = "./ambiente.json";
let apiUrl = "";

async function traer() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  console.log(json);
}

document.addEventListener("DOMContentLoaded", async () => {
  // Se puede usar fetch para traer el contenido de archivos ubicados en el mismo proyecto.
  const respuestaAmbiente = await fetch(archivoDeAmbiente);

  if (!respuestaAmbiente.ok) {
    console.log("Archivo de ambiente del front no configurado");
  }

  const ambiente = await respuestaAmbiente.json();

  // La clave está en que el archivo de ambiente mantenga los mismos atributos cambiando su valor.
  // En local api_url dirá localhost:3000, en producción dirá la url de producción, es cuestion de reemplazar ese archivo. RECORDAR que el env del front es público y no debería tener datos sensibles.
  apiUrl = ambiente.api_url;

  traer();
});
