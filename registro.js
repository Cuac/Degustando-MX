const boton = document.querySelector (".registrado");
const nombre = document.querySelector(".formulario-registro");
const correo = document.querySelector(".email");
const contraseña = document.querySelector(".contra");
const confirmacion= document.querySelector(".conf");
const ingreso = document.querySelector(".ingreso");


boton.addEventListener("click", function(){
    if(nombre.value && nombre.value.length > 2 && correo.value && contraseña.value && confirmacion.value && contraseña.value === confirmacion.value){
        const persona = {
            nom : nombre.value,
            correo1 : correo.value,
            contra : contraseña.value,
            valiContra : confirmacion.value, 
        
         };
        console.log("El usuario registrado es: ",  persona); 
        alert  ("Felicidades haz sido registrado");
        ingreso.click()
    }
    else{
        alert ("Llena los campos")
    }
});
