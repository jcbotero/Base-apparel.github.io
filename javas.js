


function mistake() {
    

    field = document.getElementById("mail");
    error = document.getElementById("show");
   
    
    if ( field == true) {
       return  error.innerHTML = " "
    } else {
        error.innerHTML = "Please provide a valid name";
        field.style.background = " url('./images/icon-error.svg') no-repeat "; // asi inserto el icono al input como background 
        field.style.backgroundPosition = " 310px 12px" // asi posicion el icono-background ( horizontal - vertical)
    
    }

  }  // esta funcion me despliega en otro div el mensaje de error si la forma se llena mal //