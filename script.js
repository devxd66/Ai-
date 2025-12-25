let credits = 10;

async function handleAI(type) {
    const input = document.getElementById('userInput').value;
    const output = document.getElementById('outputBox');
    const creditDisplay = document.getElementById('creditCount');

    if (credits <= 0) return alert("No credits remaining!");
    if (!input) return alert("Please enter a prompt!");

    output.innerHTML = `<div class="animate-pulse text-blue-400">AI is working...</div>`;

    // Simulation of AI Response
    setTimeout(() => {
        credits--;
        creditDisplay.innerText = credits;
        
        if (type === 'text') {
            output.innerHTML = `<p class="text-gray-200 italic">"Here is your AI response for: ${input}..."</p>`;
        } else {
            // Using a high-quality placeholder image for the "Image AI" simulation
            output.innerHTML = `<img src="https://picsum.photos/seed/${encodeURIComponent(input)}/400" class="rounded-lg shadow-lg w-full">`;
        }
    }, 2000);
}
