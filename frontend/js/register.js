// ========================================
// LOCALIZA O FORMULÁRIO
// ========================================
const form = document.getElementById("registerForm");

// ========================================
// EVENTO DE ENVIO DO FORMULÁRIO
// ========================================
form.addEventListener("submit", async (e) => {
    // Impede o recarregamento
    e.preventDefault();

    // =================================
    // CAPTURA DOS DADOS
    // =================================
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    // =================================
    // VALIDAÇÃO DA SENHA (MÍNIMO DE 6 CARACTERES)
    // =================================
    if (senha.length < 6) {
        mostraAlert("A senha deve ter pelo menos 6 caracteres!", document.getElementById("senha"), "erro");
        return;
    }

    // =================================
    // VALIDAÇÃO DAS SENHAS
    // =================================
    if (senha !== confirmar) {
        mostraAlert("As senhas não coincidem!", document.getElementById("confirmar"), "erro");
        return;
    }

    try {
        // =================================
        // ENVIO PARA O BACKEND
        // =================================
        const resposta = await fetch("http://localhost:3001/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                senha
            })
        });

        // =================================
        // RECEBE A RESPOSTA
        // =================================
        const json = await resposta.json();

        // =================================
        // VERIFICA SE DEU CERTO
        // =================================
        if (resposta.ok) {
            mostraAlert(json.message, null, "sucesso", () => {
                window.location.href = "index.html";
            });
        } else {
            mostraAlert(json.message, null, "erro");
        }

    } catch (erro) {
        mostraAlert("Não foi possível conectar ao servidor", null, "erro");
    }
});