"use strict";

const checkbox = document.querySelector("#checkbox"),
    form = document.querySelector("form"),
    change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
    if (localStorage.getItem("isChecked")) {
        localStorage.removeItem("isChecked");
    } else {
        localStorage.setItem("isChecked", true);
    }
});

change.addEventListener("click", () => {
    if (localStorage.getItem("bg") === "changed") {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "white";
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "red";
    }
});

const persone = {
    name: "Alex",
    age: 25,
};

// сохраняем данные в localStorage

const serializerPersone = JSON.stringify(persone);
localStorage.setItem("alex", serializerPersone);

console.log(JSON.parse(localStorage.getItem("alex")));
