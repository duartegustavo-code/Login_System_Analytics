async function carregarDashboard() {
try {
const resposta = await fetch(
"data/dados_dashboard.json"
);
if (!resposta.ok) {
throw new Error(
"Não foi possível carregar os indicadores."
);
}
const dados = await resposta.json();
document.getElementById("por_ano").textContent = dados.por_ano.toLocaleString("pt-BR");
document.getElementById("macro").textContent = dados.macro.toLocaleString("pt-BR");
document.getElementById("ufs").textContent = dados.ufs.toLocaleString("pt-BR");
document.getElementById("meses").textContent = dados.meses.toLocaleString("pt-BR");
} catch (erro) {
console.error(erro);
document.getElementById("por_ano").textContent = "Indisponível";}}
carregarDashboard();

//Gráfico do projeto//

const municipios = ["São Paulo", "Paraná", "Minas Gerais", "Rio Grande do Sul", "Santa Catarina"];
const quantidades = [941, 399, 318, 307, 254];
const elementoGrafico = document.getElementById(
"graficoPrincipal"
);
new Chart(elementoGrafico, {
type: "bar",
data: {
labels: municipios,
datasets: [{
label: "Quantidade de registros",
data: quantidades
}]
},
options: {
responsive: true,
plugins: {
legend: {
display: false
}
},
scales: {
y: {
beginAtZero: true
}
}
}
});

document.getElementById("btnSair").addEventListener(
"click",
function () {
// Adapte à implementação de autenticação existente.
localStorage.removeItem("token");
window.location.href = "index.html";
}
);