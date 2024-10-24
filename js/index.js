function mostrarAlbumRecomendado(album) {
  const contenedorAlbum = document.createElement("div");
  contenedorAlbum.classList.add("album");

  const imagenAlbum = document.createElement("img");
  imagenAlbum.classList.add("album-cover");
  imagenAlbum.src = album.portada;
  imagenAlbum.alt = album.titulo;
  contenedorAlbum.appendChild(imagenAlbum);

  const tituloAlbum = document.createElement("p");
  tituloAlbum.classList.add("album-title");
  tituloAlbum.innerText = album.titulo;
  contenedorAlbum.appendChild(tituloAlbum);

  const artistaAlbum = document.createElement("p");
  artistaAlbum.classList.add("album-artist");
  artistaAlbum.innerText = album.banda;
  contenedorAlbum.appendChild(artistaAlbum);

  const precioAlbum = document.createElement("p");
  precioAlbum.classList.add("album-price");
  precioAlbum.innerText = album.precio;
  contenedorAlbum.appendChild(precioAlbum);

  const recomendados = document.querySelector("#section-recomended");
  recomendados.appendChild(contenedorAlbum);
}

// mostrarAlbumRecomendado(albumes[0]);
// mostrarAlbumRecomendado(albumes[1]);
// mostrarAlbumRecomendado(albumes[2]);

for (let i = 0; i < 3; i++) {
  mostrarAlbumRecomendado(albumes[i]);
}
