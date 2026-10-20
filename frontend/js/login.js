    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

try{

    const resposta = await fetch("http://localhost:3001/api/login", {

    method: "POST",

    headers: {

    "Content-Type": "application/json"

    },

    body: JSON.stringify({
    email,
    senha

    })

    });

    const json = await resposta.json();

    if (resposta.ok) {

    localStorage.setItem("token", json.token);

    //alert("Login realizado");

    mostraAlert(

        json.message,
        null,
        "sucesso",


    () => {

        //Acessando a página home
        window.location.href = "../home.html";
    }
    );

    } else {
        //alert(json.message);

        mostraAlert(

        json.message,
        null,
        "erro",
        );
    }
    }catch(error){
        mostraAlert(
            "Não foi possível conectar ao servidor",
            null,
            "erro"
        )
    }
});