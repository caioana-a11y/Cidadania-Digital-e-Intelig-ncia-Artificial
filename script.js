// Aguarda o carregamento do DOM para evitar erros de execução
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Funcionalidade: Modo Escuro (Acessibilidade) ---
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    
    btnDarkMode.addEventListener("click", function () {
        // Altera a classe no body para disparar as variáveis CSS modificadas
        document.body.classList.toggle("dark-mode");
        
        // Atualiza o texto do botão para melhor experiência do usuário
        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "Modo Claro";
        } else {
            btnDarkMode.textContent = "Modo Escuro";
        }
    });

    // --- 2. Funcionalidade: Validação Dinâmica do Quiz ---
    const formQuiz = document.getElementById("form-quiz");
    const containerResultado = document.getElementById("resultado-quiz");

    formQuiz.addEventListener("submit", function (evento) {
        // Evita que a página recarregue ao submeter o formulário
        evento.preventDefault();

        // Captura a opção selecionada usando o nome do grupo de inputs radio
        const respostaSelecionada = formQuiz.elements["quiz-answer"].value;

        // Validação se o usuário clicou sem selecionar nenhuma opção
        if (!respostaSelecionada) {
            containerResultado.textContent = "Por favor, selecione uma das alternativas antes de verificar!";
            containerResultado.className = "erro"; // Aplica estilo de erro do CSS
            return;
        }

        // Processamento das variáveis e exibição da resposta na tela (Manipulação de DOM)
        if (respostaSelecionada === "correta") {
            containerResultado.textContent = "Parabéns! Resposta Correta. Verificar fontes oficiais e agências de checagem é o passo mais seguro para combater a desinformação em massa.";
            containerResultado.className = "acerto"; // Aplica classe verde de acerto
        } else {
            containerResultado.textContent = "Resposta Incorreta. Lembre-se: compartilhar sem checar ou apenas engajar com comentários negativos aumenta o alcance da desinformação (efeito algoritmo). Sempre cheque antes!";
            containerResultado.className = "erro"; // Aplica classe vermelha de erro
        }
    });
});
