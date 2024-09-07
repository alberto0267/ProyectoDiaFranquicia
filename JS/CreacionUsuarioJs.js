document.addEventListener("DOMContentLoaded", () => {
  const formCreacionUsuario = document.getElementById("creacionUsuario");

  ////Pops///

  ///Pop mensaje correcto///
  const popUp = document.getElementById("popUp");
  const popContenido = document.getElementById("popContenido");
  const cerrar = document.getElementsByClassName("cerrar")[0];
  const registroCorrecto = document.getElementById("registroCorrecto");

  ////pop Error///
  const popError = document.getElementById("popError");
  const ContenidoError = document.getElementById("ContenidoError");
  const imagenError = document.getElementById("imagenError");
  const popErrorMensaje = document.getElementById("popErrorMensaje");

  formCreacionUsuario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("Nombre").value;
    const apellidos = document.getElementById("Apellidos").value;
    const numeroEmpleado = document.getElementById("numeroEmpleado").value;
    const password = document.getElementById("password").value;

    if (nombre && apellidos && numeroEmpleado && password) {
      const usuarios = {
        nombre: nombre,
        apellidos: apellidos,
        numeroEmpleado: numeroEmpleado,
        password: password,
      };

      localStorage.setItem(numeroEmpleado, JSON.stringify(usuarios));

      registroCorrecto.style.display = "block";
      popContenido.textContent = "datos registrado : " + JSON.stringify(nombre);
      cerrar.style.display = "block";
      popUp.style.display = "block";
    } else if (!nombre || !apellidos || !numeroEmpleado || !password) {
      popError.style.display = "block";
    } else {
    }
  });

  // acceso de usuario, vendria aqui alberto una vez acceda, debes crear consta
  // llamando los IdleDeadline, llamando lo que la alamcenastes en el JSON
  // lo que creaste con localStorage
  // y alli acceder, pero primero debes crear la pagina a la cual accedera

  ///Otro sector///

  const OtherSector = document.getElementById("Sector");
const OtherSectorInput = document.getElementById("OtherSector");

OtherSector.addEventListener('change', (event)=>{
  if (OtherSector.value === "Otro") {
    OtherSectorInput.style.display = "block";
    console.log('si entra');
  } else {
    OtherSectorInput.style.display = "none";
    console.log('entra en else');
  }

})
   
  
});
