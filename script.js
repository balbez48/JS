"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = prompt("Сколько будет стоить данная работа?");
let rollback = 60;
let fullPrice = 12250;
let adaptive = confirm("Нужен ли адаптив на сайте?");

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));
