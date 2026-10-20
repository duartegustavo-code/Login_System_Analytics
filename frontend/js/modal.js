const customAlert = document.getElementById("customAlert");
const alertMensagem = document.getElementById("alertMensagem");
const btnAlertConfirm = document.getElementById("btnAlertConfirm");

let acaoConfirmacao = null;

function mostraAlert(
    mensagem, 
    elementoFoco = null, 
    tipo = "erro", 
    acao = null
) {

    alertMensagem.textContent = mensagem;

    const alertCard = 
        customAlert.querySelector(".alert-box");

    alertCard.classList.remove(
        "success",
        "error"
    )

        if (tipo === "sucesso") {

            alertCard.classList.add("success");

            alertCard.querySelector("h3").textContent = "Sucesso";
            alertCard.querySelector("h3").style.color = "green";
            alertCard.querySelector("p").style.color = "green";
            alertCard.querySelector("button").style.color = "green";
        }else{
            alertCard.classList.add("error");

            alertCard.querySelector("h3").textContent = "Aviso Importante!";
            alertCard.querySelector("h3").style.color = "red";
            alertCard.querySelector("p").style.color = "red";
            alertCard.querySelector("button").style.color = "red";
        }

        if(elementoFoco){
            customAlert.dataset.focus = elementoFoco.id;            
        } else {
            customAlert.dataset.focus = "";
        }

        acaoConfirmacao = acao;

        customAlert.style.display = "flex";

        btnAlertConfirm.addEventListener("click", 
            () => {
                customAlert.style.display = "none";
                const id = customAlert.dataset.focus;

                if(id){
                    const elemento = document.getElementById(id);

                    if(elemento){
                        elemento.focus();
                    }
                }

                if(acaoConfirmacao){
                    acaoConfirmacao();

                    acaoConfirmacao= null;
                }
            })

}