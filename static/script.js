const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

const ws = new WebSocket('ws://localhost:8000/ws');

ws.onopen = function(event) {
    console.log('Connected to WebSocket');
};

ws.onmessage = function(event) {
    const message = event.data;
    displayMessage(message, 'bot');
};

ws.onclose = function(event) {
    console.log('Disconnected from WebSocket');
};

ws.onerror = function(error) {
    console.error('WebSocket error:', error);
};

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        displayMessage(message, 'user');
        ws.send(message);
        messageInput.value = '';
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender + '-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
