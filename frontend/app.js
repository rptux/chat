


document.getElementById("send-btn").addEventListener("click", async function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Exibe a mensagem do usuário no chat
    document.getElementById("chat-box").innerHTML += `<p><strong>Você:</strong> ${userInput}</p>`;

    // Limpa a caixa de entrada
    document.getElementById("user-input").value = "";

    // Envia a entrada do usuário para o backend (API Gateway)
    const response = await fetch("https://hsviq7ahz8.execute-api.us-east-2.amazonaws.com/dev/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: userInput })
    });

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
        // Caso ocorra erro, exibe uma mensagem de erro
        document.getElementById("chat-box").innerHTML += `<p><strong>Chatbot:</strong> Houve um erro ao processar sua solicitação.</p>`;
        return;
    }

    const data = await response.json();
    const botMessage = data.resposta;

    // Exibe a resposta do chatbot
    document.getElementById("chat-box").innerHTML += `<p><strong>Chatbot:</strong> ${botMessage}</p>`;
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
});
