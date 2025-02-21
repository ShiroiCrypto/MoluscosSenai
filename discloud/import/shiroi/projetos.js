// script.js

// Exibe o conteúdo e oculta a tela de carregamento após 6 segundos
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 6000); // Tempo em milissegundos (6000ms = 6s)
});

// Exibe a tela de carregamento ao sair da página
window.addEventListener("beforeunload", () => {
    document.getElementById("loading-screen").style.display = "flex";
});
