// Configuration - Set your simple password here
const SECRET_PIN = "1234";

// DOM Elements
const lockScreen = document.getElementById('lock-screen');
const chatContainer = document.getElementById('chat-container');
const pinInput = document.getElementById('pin-input');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Authentication logic
function checkPassword() {
    if (pinInput.value === SECRET_PIN) {
        lockScreen.classList.add('hidden');
        chatContainer.classList.remove('hidden');
    } else {
        errorMessage.textContent = "Incorrect password. Try again.";
        pinInput.value = "";
    }
}

loginBtn.addEventListener('click', checkPassword);
pinInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

// Chat logic
function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

function handleResponse() {
    const text = userInput.value.trim();
    if (!text) return;

    // Display user message
    appendMessage(text, 'user');
    userInput.value = '';

    // Simulated API delay (Replace this simulated logic with your real Air API hook when ready)
    setTimeout(() => {
        const fallbackReply = `I received your message: "${text}". Connect your backend API to see live AI processing.`;
        appendMessage(fallbackReply, 'bot');
    }, 800);
}

sendBtn.addEventListener('click', handleResponse);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleResponse();
});
