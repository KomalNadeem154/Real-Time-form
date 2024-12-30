
const nameInput = document.getElementById('name'); 
const emailInput = document.getElementById('email'); 
const messageInput = document.getElementById('message'); 

const namePreview = document.getElementById('name-preview'); 
const emailPreview = document.getElementById('email-preview'); 
const messagePreview = document.getElementById('message-preview'); 


nameInput.addEventListener('input', function () {
    namePreview.textContent = nameInput.value.trim() || '[Your name will appear here]';
});

emailInput.addEventListener('input', function () {
    emailPreview.textContent = emailInput.value.trim() || '[Your email will appear here]';
});

messageInput.addEventListener('input', function () {
    messagePreview.textContent = messageInput.value.trim() || '[Your message will appear here]';
});
 