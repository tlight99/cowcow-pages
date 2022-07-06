const header = document.getElementById("header");
const hideMenu = document.querySelector(".hideMenu");

header.addEventListener("mouseover", () => {
  if (hideMenu.classList.contains("on")) {
    // hideMenu 클래스중에 "on"이 포함되어있다면
    hideMenu.classList.remove("on"); // 클래스 중에 on삭제
  } else {
    hideMenu.classList.add("on"); // 클래스 중에 on추가
  }
});

hideMenu.addEventListener("mouseleave", () => {
  if (hideMenu.classList.contains("on")) {
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});
