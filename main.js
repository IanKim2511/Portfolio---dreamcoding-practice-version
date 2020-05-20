"use strict";

//  Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
// JS에서 height 잡아내기
const navbarHeight = navbar.getBoundingClientRect().height;

// scroll 될때마다 function호출하기
document.addEventListener("scroll", () => {
  // scroll할때마다 scrollY값 가져옴
  //   console.log(window.scrollY);
  //   console.log(`navbarHeight: ${navbarHeight}`);

  //   1. window.scroll y값이 navbarHeight보다 크면,
  // 'navbar--dark'클래스를 추가함
  // (
  // 작으면, 제거함)

  // 2. css에 'navbar--dark'를 스타일링함

  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
