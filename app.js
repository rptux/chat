

const response = await fetch("https://hsviq7ahz8.execute-api.us-east-2.amazonaws.com/dev", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: userInput })
});
