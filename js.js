// Função para abrir o pop-up
function openModal(videoSrc) {
    // Define o src do iframe no pop-up com o vídeo escolhido
    document.getElementById('modalVideo').src = videoSrc;

    // Exibe o pop-up
    document.getElementById('videoModal').style.display = "block";
}

// Função para fechar o pop-up
function closeModal() {
    // Fecha o pop-up
    document.getElementById('videoModal').style.display = "none";

    // Limpa o src do iframe para parar o vídeo ao fechar
    document.getElementById('modalVideo').src = "";
}

// Quando o usuário clicar fora do conteúdo do modal, o pop-up será fechado
window.onclick = function(event) {
    if (event.target == document.getElementById('videoModal')) {
        closeModal();
    }
}
