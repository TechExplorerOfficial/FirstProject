document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let statusMessage = '';

    if (name && email && message) {
        statusMessage = 'Mensagem enviada com sucesso!';
    } else {
        statusMessage = 'Por favor, preencha todos os campos.';
    }

    document.getElementById('statusMessage').textContent = statusMessage;
});