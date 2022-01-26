const carre = document.querySelectorAll(".carre")

carre.forEach(carre => {
carre.addEventListener("click", function() {
    console.log("clicked")
    carre.classList.toggle("active")
    })
})