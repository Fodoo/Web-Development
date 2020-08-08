"use strict";

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");

/* box.style.backgroundColor = "blue";
box.style.width = "500px"; */

btns[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";

// Как назначить несколько инлайн стилей? Через csstext:

box.style.cssText = "background-color: blue; width: 500px";

// Произвести одни и те же действия с несколькими элементами:

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "blue";
}

// или лучше вот так:

hearts.forEach((item) => {
    item.style.backgroundColor = "blue";
});

// создание элемента
const div = document.createElement("div");

//создание ткстового узла - элемента без оболочки тега:
/* const text = document.createTextNode("Тут был я"); */

div.classList.add("black");

//append - подставляет элемент в конец родителя и отображает на странице

wrapper.append(div);

//prepend - подставляет элемент в начало родителя и отображает на странице

/* wrapper.prepend(div); */

//before, after

/* hearts[0].before(div);

hearts[0].after(div); */

//удаление элемента

/* circle[0].remove(); */

//замена одного элемента другим

/* hearts[0].replaceWith(circle[0]); */

div.innerHTML = "<h1>Hello World</h1>";
