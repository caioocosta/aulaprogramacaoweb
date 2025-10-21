document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');

    // Função para alternar a classe 'is-open' ao clicar no hambúrguer
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('is-open');
        });

        // Fecha o menu se um link for clicado (melhor experiência mobile)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
            });
        });
    }
});