function scrollBar() {
    let header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 40) {
            header.classList.add("active")
        } else {
            header.classList.remove("active")
        }
    })

    

}

export { scrollBar }