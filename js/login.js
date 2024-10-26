const formulario = document.getElementById("form-login");
// const formulario = document.querySelector("#form-login");

const usuarioAdmin = "toto@toto.com";
const contraseñaAdmin = "123456";

formulario.onsubmit = function (evento) {
  evento.preventDefault();
  const usuario = document.getElementById("form-email").value;
  const contraseña = document.getElementById("form-password").value;

  if (usuario === usuarioAdmin && contraseña === contraseñaAdmin) {
    alert("Bienvenido Admin");
    window.location.href = "administrador.html";
  } else {
    alert("Usuario o contraseña incorrectos");
    formulario.reset();
    document.getElementById("form-email").focus();
  }
};
