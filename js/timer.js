function sayWho() {
    var who = window.prompt("Як Вас називати ?");

    function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
    }
    setTimeout(sayHi, 9500, "Вітаю на сторінці", who);
}


setTimeout(sayWho, 5500);


