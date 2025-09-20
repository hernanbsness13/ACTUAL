
function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

function appendMessage(sender, text) {
  const chatWindow = document.getElementById("chat-window");
  const msg = document.createElement("div");
  msg.innerHTML = `<b>${sender}:</b> ${text}`;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;
  appendMessage("Tú", text);

  // Simulación de respuestas IA
  setTimeout(() => {
    let reply = "🤖 Lo siento, aún estoy aprendiendo.";
    if (text.toLowerCase().includes("envío")) {
      reply = "🚚 Sí, ofrecemos envío gratis en compras mayores a $20.000.";
    } else if (text.toLowerCase().includes("precio")) {
      reply = "💰 Nuestros planes empiezan desde $4.999/mes.";
    } else if (text.toLowerCase().includes("horario")) {
      reply = "🕒 Atendemos 24/7 gracias a la IA.";
    }
    appendMessage("RespondeYA", reply);
  }, 800);

  input.value = "";
}
