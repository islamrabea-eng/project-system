function backToTop() {
  const btn = document.querySelector(".back-to-top");

  // إظهار وإخفاء الزرار
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
      btn.style.transform = "translateY(0)";
      btn.style.opacity = "1";
    } else {
      btn.style.transform = "translateY(50px)";
      btn.style.opacity = "0";
    }
  });

  // عند الضغط يرجع لفوق
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

export { backToTop }