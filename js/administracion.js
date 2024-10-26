//Renderizado de tabla
function renderizarFila(album) {
  const filaAlbum = document.createElement("tr");

  const titulo = document.createElement("td");
  titulo.innerText = album.titulo;
  filaAlbum.appendChild(titulo);

  const portada = document.createElement("td");
  const imagen = document.createElement("img");
  imagen.src = album.portada;
  imagen.alt = album.titulo;
  imagen.width = 20;
  imagen.height = 20;
  portada.appendChild(imagen);
  filaAlbum.appendChild(portada);

  const descripcion = document.createElement("td");
  descripcion.innerText = album.descripcion;
  filaAlbum.appendChild(descripcion);

  const precio = document.createElement("td");
  precio.innerText = "$" + album.precio;
  filaAlbum.appendChild(precio);

  const banda = document.createElement("td");
  banda.innerText = album.banda;
  filaAlbum.appendChild(banda);

  const genero = document.createElement("td");
  genero.innerText = album.genero;
  filaAlbum.appendChild(genero);

  const disponible = document.createElement("td");
  disponible.innerText = album.disponible;
  filaAlbum.appendChild(disponible);

  const tabla = document.querySelector("#table-albums");
  //   const tabla = document.getElementById("table-albums");
  tabla.appendChild(filaAlbum);
}

function renderizarTabla(baseDeDatos) {
  for (let i = 0; i < baseDeDatos.length; i++) {
    renderizarFila(baseDeDatos[i]);
  }
}

renderizarTabla(albumesActualizados);

//captura de datos
const formularioAlbumes = document.querySelector("#form-albumes");
formularioAlbumes.onsubmit = function (evento) {
  evento.preventDefault();
  const titulo = document.querySelector("#titulo").value;
  const portada = document.querySelector("#portada").value;
  const descripcion = document.querySelector("#descripcion").value;
  const precio = document.querySelector("#precio").valueAsNumber;
  const banda = document.querySelector("#banda").value;
  const genero = document.querySelector("#genero").value;
  const disponible = document.querySelector("#disponible").checked;

  const album = {
    titulo: titulo,
    portada: portada,
    descripcion: descripcion,
    precio: precio,
    banda: banda,
    genero: genero,
    disponible: disponible,
  };

  //actualizo array
  albumesActualizados.push(album);
  //actualizo localStorage
  const albumesJSON = JSON.stringify(albumesActualizados);
  localStorage.setItem("albumes", albumesJSON);
  //traerme el localStorage
  const albumesStorage = localStorage.getItem("albumes");
  const albumesStorageJSON = JSON.parse(albumesStorage);

  //resetear el formulario
  formularioAlbumes.reset();
  document.getElementById("titulo").focus();
  //renderizar tabla actualizada
  renderizarTabla(albumesStorageJSON);
};
