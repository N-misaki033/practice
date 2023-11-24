// ポートフォリオの画像をスライドする
// 変数を定義する
let currentIndex = 0;

function scrollImages(direction) {
    const container = document.querySelector('.image-container');
    const images = document.querySelectorAll('.image');
    const arrow = document.querySelector('.arrow');

    currentIndex = (currentIndex + direction + images.length) % images.length;

    const scrollAmount = images[currentIndex].offsetLeft - container.scrollLeft;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // もし末尾に達したら→を非表示にする
    arrow.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
}
