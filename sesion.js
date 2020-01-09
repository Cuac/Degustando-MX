

const boton = document.querySelector (".registrado");
const iniciado = document.querySelector(".iniciado");


const nombre = document.querySelector(".formulario-registro");
const contraseña = document.querySelector(".contraseña");

boton.addEventListener("click", function(){
    if (nombre.value === "pruebas" && contraseña.value === "1234"  ) {
        console.log("Usuario Valido");
        iniciado.click();
    }else {
        alert ("Usuario Invalido")
    }
});

