// Banco de dados de perguntas do quiz
const questions = [
    {
        text: "Usar Inteligência Artificial para gerar um trabalho de escola inteiro e entregar como se fosse seu é ético.",
        answer: false,
        feedback: "Incorreto! Isso é plágio. O correto é usar a IA para brainstorming ou entender conceitos, criando seu próprio texto."
    },
    {
        text: "Antes de compartilhar uma notícia alarmante gerada por IA ou sobre IA, devemos checar em fontes confiáveis.",
        answer: true,
        feedback: "Correto! Evitar a propagação de desinformação (fake news) é um pilar essencial da cidadania digital."
    },
    {
        text: "Colocar fotos de outras pessoas sem permissão em ferramentas de IA para criar montagens engraçadas é uma boa prática.",
        answer: false,
        feedback: "Incorreto! Isso viola a privacidade, o direito de imagem e pode se configurar como cyberbullying."
    },
    {
        text: "Ferramentas de IA podem apresentar respostas erradas (alucinações), por isso devemos sempre revisar o que elas geram.",
        answer: true,
        feedback: "Excelente! IAs cometem erros. O pensamento crítico do cidadão digital é fundamental para filtrar essas falhas."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let canAnswer = true;

// Elementos do DOM
const questionTextEl = document.getElementById("question-text");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");

// Inicializar o jogo
function loadQuestion() {
    canAnswer = true;
    feedbackEl.textContent = "";
    feedbackEl.style.color = "initial";
    
    if (currentQuestionIndex < questions.length) {
        questionTextEl.textContent = questions[currentQuestionIndex].text;
    } else {
        // Fim de jogo
        questionTextEl.textContent = `Parabéns! Você completou o desafio. Sua pontuação final foi: ${score}/${questions.length}`;
        document.querySelector(".game-buttons").style.display = "none";
    }
}

// Validar a resposta do usuário
function checkAnswer(userChoice) {
    if (!canAnswer) return; // Impede cliques múltiplos rápidos
    canAnswer = false;

    const currentQuestion = questions[currentQuestionIndex];
    
    if (userChoice === currentQuestion.answer) {
        score++;
        scoreEl.textContent = score;
        feedbackEl.textContent = "✓ Acertou! " + currentQuestion.feedback;
        feedbackEl.style.color = "var(--primary-color)";
    } else {
        feedbackEl.textContent = "✗ Errou! " + currentQuestion.feedback;
        feedbackEl.style.color = "var(--danger)";
    }

    // Avança para a próxima pergunta após 3.5 segundos
    currentQuestionIndex++;
    setTimeout(loadQuestion, 3500);
}

// Inicia a primeira pergunta ao carregar a página
window.onload = loadQuestion;
