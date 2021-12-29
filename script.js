let btnMotrarPerro = document.getElementById("btnMostrarPerro");
let imgPerro = document.getElementById("imgdog");

btnMotrarPerro.addEventListener("click", function(){

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        const response = JSON.parse(xhr.responseText);

        imgPerro.src = response.message;
    });
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
});