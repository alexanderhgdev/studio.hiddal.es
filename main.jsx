let elements = document.querySelectorAll("[data-menu]");

for (let i = 0; i < elements.length; i++) {
    let main = elements[i];
    main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let andicators = main.querySelectorAll("img");
        let child = element.querySelector("ul");
        let fontColor = element.querySelector("h2");
        child.classList.toggle("hidden");
        if (child.classList[0] !== "hidden") {
            andicators[0].style.display = "block";
            andicators[1].style.display = "none";
            fontColor.style.color = "#2dd4bf";
        } else {
            andicators[0].style.display = "none";
            andicators[1].style.display = "block";
            fontColor.style.color = "#2dd4bf";
        }
    });
}