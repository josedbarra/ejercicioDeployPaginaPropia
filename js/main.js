const txtNombre = document.getElementById("txtNombre");
const btnGuardar = document.getElementById("btnGuardar");
const alertValidaciones = document.getElementById("alertValidaciones");
btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
        alertValidaciones.innerHTML="";
        alertValidaciones.style.display="none";
    if (txtNombre.value.length<2){
        alertValidaciones.innerHTML="El nombre no es correcto";
        alertValidaciones.style.display="block";
        return false;

    }//if

    localStorage.setItem("nombre", txtNombre.value);
    

});