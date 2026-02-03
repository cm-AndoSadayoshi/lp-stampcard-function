document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // デモボタンのスマートフォン対応
    const demoButton = document.querySelector('.hero-cta a');
    if (demoButton) {
        demoButton.addEventListener('click', (e) => {
            // スマートフォン判定（画面幅768px以下またはタッチデバイス）
            const isMobile = window.innerWidth <= 768 ||
                           ('ontouchstart' in window) ||
                           (navigator.maxTouchPoints > 0);

            if (isMobile) {
                e.preventDefault();
                window.location.href = 'https://prototype-stampcard-function.vercel.app/mini/home';
            }
            // PCの場合はデフォルトのhref（/demo/home）に遷移
        });
    }
});
