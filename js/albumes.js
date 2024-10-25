function renderizarAlbumes(album) {
  const contenedorAlbum = document.createElement("div");
  contenedorAlbum.classList.add("gallery-album");

  const tituloAlbum = document.createElement("p");
  tituloAlbum.classList.add("gallery-album-title");
  tituloAlbum.innerText = album.titulo;
  contenedorAlbum.appendChild(tituloAlbum);

  const contenedorAlbumBody = document.createElement("div");
  contenedorAlbumBody.classList.add("gallery-album-body");
  contenedorAlbum.appendChild(contenedorAlbumBody);

  const imagenAlbum = document.createElement("img");
  imagenAlbum.classList.add("gallery-album-imagen");
  imagenAlbum.src = album.portada;
  imagenAlbum.alt = "Nombre del album: " + album.titulo;
  contenedorAlbumBody.appendChild(imagenAlbum);

  const contenedorAlbumBody2 = document.createElement("div");
  contenedorAlbumBody2.classList.add("gallery-album-body2");
  contenedorAlbumBody.appendChild(contenedorAlbumBody2);

  const contenedorAlbumData = document.createElement("div");
  contenedorAlbumData.classList.add("gallery-album-data");
  contenedorAlbumBody2.appendChild(contenedorAlbumData);

  const descripcionAlbum = document.createElement("p");
  descripcionAlbum.classList.add("gallery-album-description");
  descripcionAlbum.innerText = album.descripcion;
  contenedorAlbumBody2.appendChild(descripcionAlbum);

  const precioAlbum = document.createElement("p");
  precioAlbum.classList.add("gallery-album-price");
  precioAlbum.innerText = "$" + album.precio + ".99";
  contenedorAlbumBody2.appendChild(precioAlbum);

  const artistaAlbum = document.createElement("p");
  artistaAlbum.classList.add("gallery-album-artist");
  artistaAlbum.innerText = album.banda;
  contenedorAlbumData.appendChild(artistaAlbum);

  const generoAlbum = document.createElement("p");
  generoAlbum.classList.add("gallery-album-genre");
  generoAlbum.innerText = album.genero;
  contenedorAlbumData.appendChild(generoAlbum);

  const contenedorGaleria = document.getElementById("section-gallery");
  contenedorGaleria.appendChild(contenedorAlbum);
}

for (let i = 0; i < albumesActualizados.length; i++) {
  renderizarAlbumes(albumesActualizados[i]);
}
