// Obter elementos HTML relevantes
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Abrir a janela modal com a imagem clicada
function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

// Fechar a janela modal
function closeModal() {
    modal.style.display = 'none';
}

// Adicionar evento de clique para cada item da galeria
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.querySelector('img').src;
        openModal(imageSrc);
    });
});

// Adicionar evento de clique para o botão de fechar
closeBtn.addEventListener('click', () => {
    closeModal();
});

// Fechar a janela modal ao clicar fora da imagem
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});