function sayHello() {
  document.getElementById("output").innerText = "مرحبًا بك في عالم البرمجة 👋";
}
async function askGPT() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("output");

  const apiKey = "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"; // ← استبدلها بمفتاحك الحقيقي

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
      temperature: 0.7
    })
  });

  const data = await response.json();
  output.innerText = data.choices[0].message.content;
}

