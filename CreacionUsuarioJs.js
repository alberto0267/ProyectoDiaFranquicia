document.addEventListener('DOMContentLoaded',() =>{

    
    const formCreacionUsuario = document.getElementById('creacionUsuario');
    const popUp = document.getElementById('popUp');
    const popContenido = document.getElementById('popContenido');
    const cerrar = document.getElementsByClassName('cerrar')[0];
    const registroCorrecto=document.getElementById('registroCorrecto');
    
    formCreacionUsuario.addEventListener('submit' , (event) =>{
        event.preventDefault();
        const nombre = document.getElementById('Nombre').value;
        const apellidos= document.getElementById('Apellidos').value;
        const numero = document.getElementById('numeroEmpleado').value;
        const password= document.getElementById('password').value;
       
        if (nombre && apellidos &&  numero && password){
    
            const usuarios = {
    
                nombre:nombre,
                apellidos:apellidos,
                numero: numero,
                password:password
            };
            // alert('datos registrado : ' + JSON.stringify(usuarios));
            registroCorrecto.style.display="block";
            popContenido.textContent = 'datos registrado : ' +  JSON.stringify(usuarios);
           cerrar.style.display="block";
        }
        else{
            alert('Falta alguns dato');
        }
        popUp.style.display = "block";
        
   
    })
   


})