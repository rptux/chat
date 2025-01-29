



const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/chat", async (req, res) => {
    const prompt = req.body.prompt;
    
    // Aqui você pode usar uma API de IA, como OpenAI ou outra, para analisar a entrada
    const response = await axios.post("https://api.openai.com/v1/completions", {
        model: "gpt-3.5-turbo",
        prompt: `Como você interpretaria as emoções nas palavras: "${prompt}"?`,
        max_tokens: 50,
    }, {
        headers: {
            "Authorization": `Bearer YOUR_OPENAI_API_KEY`
        }
    });

    const botResponse = response.data.choices[0].text.trim();
    res.json({ resposta: botResponse });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
