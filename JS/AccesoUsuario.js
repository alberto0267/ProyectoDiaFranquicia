document.addEventListener("DOMContentLoaded",()=>{

    // const despliegue=document.getElementsByClassName('despliegue');
    const despliegue=document.querySelector('.despliegue');
    const opciones =document.getElementById('opciones');
    console.log("probando");

if(despliegue){

    console.log("despligue funciona");

    despliegue.addEventListener("click", (event)=>{

        console.log("funciona el evento despliegue");

        if(opciones.style.display==="none" || opciones.style.display==="" ){
            opciones.style.display="block";
            console.log("aparece");
        }
        else{
           opciones.style.display = "none";
           console.log("oculta");
        }

    })
}

})