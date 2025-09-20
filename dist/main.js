let votes = { si: 0, no: 0 };

function vote(option) {
  votes[option]++;
  renderResults();
}

function renderResults() {
  const total = votes.si + votes.no;
  const siPercent = total ? Math.round((votes.si / total) * 100) : 0;
  const noPercent = total ? Math.round((votes.no / total) * 100) : 0;
  document.getElementById("results").innerHTML = `
    <p>Sí: ${siPercent}% (${votes.si} votos)</p>
    <p>No: ${noPercent}% (${votes.no} votos)</p>
  `;
}

function sendMessage(e) {
  e.preventDefault();
  document.getElementById("status").innerText = "✅ Mensaje enviado con éxito (simulado)";
  e.target.reset();
}

function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}
