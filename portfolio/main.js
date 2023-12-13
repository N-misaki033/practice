window.onload = function () {
  setTimeout( () => {
    const loader = document.getElementById("loader");
    loader.classList.add("loaded");
    const openpage = document.getElementById("openpage");
    openpage.classList.add("opened")
  },1300);
};


const header = document.querySelector('header');

if (header) { // ヘッダーが存在する場合のみ処理を実行
  window.addEventListener("scroll", () => {
    header.style.opacity = "1"; // または任意の適切な opacity の値
  });
};
  


