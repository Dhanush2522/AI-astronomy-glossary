const glossary = {
    "black hole": "A region of space where the gravitational pull is so strong that nothing, not even light, can escape from it.",
    "supernova": "A powerful and luminous explosion of a star, marking the end of its life cycle.",
    "neutron star": "A type of stellar remnant that is the collapsed core of a massive star, composed mostly of neutrons.",
    "exoplanet": "A planet that orbits a star outside our solar system.",
    "light year": "The distance that light travels in one year, approximately 5.88 trillion miles (9.46 trillion kilometers).",
    "galaxy": "A massive system of stars, stellar remnants, interstellar gas, dust, and dark matter, bound together by gravity.",
    "constellation": "A group of stars that forms a recognizable pattern in the night sky.",
    "asteroid": "A small rocky body that orbits the sun, primarily found in the asteroid belt between Mars and Jupiter.",
    "comet": "A small celestial body that, when passing close to the sun, heats up and begins to release gases, forming a glowing coma and sometimes a tail.",
    "dark matter": "A form of matter that does not emit light or energy, making it invisible and detectable only through its gravitational effects."
};

const chatBox = document.getElementById('chAat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const clearButton = document.getElementById('clear-button'); // Optional clear button

function addMessageToChat(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageElement.innerHTML = `<span class="message-text">${message}</span> <span class="timestamp">${timestamp}</span>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

function getResponse(userMessage) {
    const term = userMessage.toLowerCase().trim();
    return glossary[term] || "I'm sorry, I don't have a definition for that term.";
}

function handleSendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    addMessageToChat(userMessage, 'user');
    const response = getResponse(userMessage);
    addMessageToChat(response, 'bot');
    userInput.value = '';
}

sendButton.addEventListener('click', handleSendMessage);

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
});

clearButton?.addEventListener('click', () => {
    chatBox.innerHTML = '';
    addMessageToChat("Chat cleared. Ask me any space-related term!", 'bot');
});

// Optional bot greeting on load
window.addEventListener('DOMContentLoaded', () => {
    addMessageToChat("Hello! Ask me about any astronomy term like 'black hole', 'comet', or 'galaxy'.", 'bot');
});
