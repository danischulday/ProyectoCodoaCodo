
function validateFormRest() {     
    const apiKey = '8ae0f7bbbb06c4476ef74caa542e373a';
    const email = document.getElementById("email").value; 
    const url = `http://apilayer.net/api/check?access_key=${apiKey}&email=${encodeURIComponent(email)}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Aquí puedes manipular los datos recibidos de la API
        console.log(data);
        if (data.format_valid && data.mx_found && data.smtp_check) {
          console.log('La dirección de correo es válida.');
          return true;
        } else {
          console.log('La dirección de correo no es válida.');
          alert('La dirección de correo no es válida.');
          return false;
        }
      })
      .catch(error => {
        console.log('Error:', error);
        alert("algo salio mal");
        return false;
      });
    }

  function validateForm() {
    const nombre = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    //const mensaje = document.getElementById("mensaje").value;

    if (nombre === "") {
      alert("se debe ingresar un nombre");
      return;
    }

    if (mail === "") {
      alert("se debe ingresar una direccion de correo");
      return;
    }


    
    validateFormRest();
  }
