document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    const btnSend = document.getElementById("btnSend");
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    if (btnSend && userInput && chatBox) {
        const appendMessage = (text, sender) => {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("mensagem", sender);
            msgDiv.textContent = text;
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        };

        const processMessage = () => {
            const text = userInput.value.trim();
            if (text === "") return;

            appendMessage(text, "user");
            userInput.value = "";

            setTimeout(() => {
                let resposta = "Entendi sua dúvida! Recomendo registrar essa ação sustentável na SoulUp para acumular pontos.";
                const lowerText = text.toLowerCase();
                
                if (lowerText.includes("dica") || lowerText.includes("ajuda")) {
                    resposta = "Aqui vai uma dica da BraTech: Desplugue aparelhos em stand-by da tomada. Isso poupa até 12% da sua conta de energia!";
                } else if (lowerText.includes("bratech") || lowerText.includes("quem são") || lowerText.includes("equipe")) {
                    resposta = "Nós somos a BraTech! Desenvolvemos soluções inteligentes de Design Engineering para alavancar a sustentabilidade.";
                } else if (lowerText.includes("soulup")) {
                    resposta = "A SoulUp é a nossa plataforma parceira que recompensa hábitos ecológicos reais do seu dia a dia.";
                }
                
                appendMessage(resposta, "avatar");
            }, 800);
        };

        btnSend.addEventListener("click", processMessage);
        userInput.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') processMessage();
        });
    }
});

function validarFormulario(event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Ops! Todos os campos precisam ser preenchidos antes do envio.");
        event.preventDefault();
        return false;
    }
    alert("Mensagem enviada com sucesso para a BraTech!");
    return true;
}