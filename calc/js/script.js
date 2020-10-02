const inputRub = document.querySelector("#rub"),
    inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest(); //запрос

    // request.open(method, url, async, login, pass); - собирает настройки, которые в будущем помогут сделать запрос, method - это GET, POST и т.п., второй аругмент, это путь, async - асинхронный запрос, то есть не ждем, когда сервер даст ответ.

    request.open("GET", "js/current.json");
    //далее указываем, что именно отправляем(изображения, текст и т.п.)
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //когда все готово, можем отправить запрос на сервер
    request.send(); //body - то, что уходит на сервер, в GET body нет

    request.addEventListener("readystatechange", () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = +inputRub.value / data.current.usd;
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
});
