//let's get all required elements

const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

// form.onsubmit = (e) => {
//   e.preventDefault(); //preventing form from submitting
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest(); //creating new xml object
  xhr.open("POST", "message.php", true); // sending post request to message.php file
  xhr.onload = () => {
    //once ajax loaded

    if (xhr.readyState == 4 && xhr.status == 200) {
      //if ajax response status is 200 & ready status is 4 means there is no any error
      let response = xhr.responseText; //storing ajax response in a response variable
      console.log(response);
      statusTxt.style.display = "none"; //Oculta  a mensagem de status após receber a resposta
    }
  };

  let formData = new FormData(form); //creating new FormData obj. This obj is used to send form data
  xhr.send(formData); //seeding form data
};
