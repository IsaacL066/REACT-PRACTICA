document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Nombre: " + firstName + "<br>Apellido: " + lastName;
});
