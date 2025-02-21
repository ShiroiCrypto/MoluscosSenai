// Gera um número aleatório entre 1 e 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3; // Número de tentativas
let previousGuess = null; // Para armazenar o palpite anterior

document.getElementById('check-guess').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const messageElement = document.getElementById('message');
    const winImage = document.getElementById('win-image');
    const attemptsElement = document.getElementById('attempts');

    // Verifica se o palpite é válido
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageElement.textContent = 'Por favor, insira um número entre 1 e 10.';
        return;
    }

    // Diminui o número de tentativas
    attempts--;

    // Verifica se o palpite está correto
    if (userGuess === randomNumber) {
        messageElement.textContent = 'Parabéns! Você adivinhou o número!';
        winImage.style.display = 'block'; // Exibe a imagem
        attemptsElement.textContent = ''; // Limpa as tentativas restantes
    } else {
        // Dicas
        if (previousGuess !== null) {
            if (Math.abs(userGuess - randomNumber) < Math.abs(previousGuess - randomNumber)) {
                messageElement.textContent = 'Está quente! Tente um número ' + (userGuess < randomNumber ? 'maior' : 'menor') + '.';
            } else {
                messageElement.textContent = 'Está frio! Tente um número ' + (userGuess < randomNumber ? 'maior' : 'menor') + '.';
            }
        } else {
            messageElement.textContent = 'Tente um número ' + (userGuess < randomNumber ? 'maior' : 'menor') + '.';
        }

        previousGuess = userGuess; // Atualiza o palpite anterior
        attemptsElement.textContent = 'Tentativas restantes: ' + attempts;

        // Verifica se o jogador ficou sem tentativas
        if (attempts === 0) {
            messageElement.textContent = 'Você perdeu! O número era ' + randomNumber + '. Você se deu mal!';
            winImage.style.display = 'none'; // Esconde a imagem
            document.getElementById('check-guess').disabled = true; // Desabilita o botão
        }
    }
});