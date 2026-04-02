"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?"));
let rollback = 60;
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

const getAllServicePrices = function additionalServices() {
  return servicePrice1 + servicePrice2;
}

function getFullPrice() {
  return screenPrice + allServicesPrices;
}

const getTitle = function changeTitle() {
  let firstLetter = title[0];
  if (firstLetter) {
    return firstLetter.toUpperCase + title.substring(1);
  };
}

const func1 = function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}

let allServicesPrices = additionalServices();
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(
  fullPrice - fullPrice * (rollback / 100),
);
console.log(`servicePercentPrice - ${servicePercentPrice}`);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));
