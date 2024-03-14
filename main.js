let list = document.querySelectorAll("ul li");
let div = document.getElementsByClassName("experiment")[0];

div.style.backgroundColor = localStorage.getItem("color");

list.forEach((l) => {
    l.classList.remove("active");
});

document.querySelector(`[data-color = "${localStorage.getItem("color")}"]`).classList.add("active")

list.forEach((listItem) => {

    listItem.addEventListener("click", (li) => {
        
        list.forEach((l) => {
            l.classList.remove("active");
        });

        li.currentTarget.classList.add("active");

        div.style.backgroundColor = li.currentTarget.getAttribute("data-color");

        localStorage.setItem("color", li.currentTarget.getAttribute("data-color"));
    });
});
