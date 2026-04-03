"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice;
do {
  screenPrice = +prompt("Сколько будет стоить данная работа?");
} while (screenPrice === 0);

let rollback = 60;
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + getAllServicePrices();
}

const getTitle = function () {
  let firstLetter = title[0];
  if (firstLetter) {
    return (
      firstLetter.toUpperCase() + title.slice(1, title.length).toLowerCase()
    );
  } else {
    return title[0].toUpperCase() + title.slice(2, title.length).toLowerCase();
  }
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

function showTypeOf(elem = null) {
  console.log(typeof elem);
}

let allServicesPrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();
let changeTitle = getTitle();

const getRollBackMessage = function (price) {
  if (fullPrice > 30000) {
    return "Даем скидку в 10%";
  } else if (fullPrice > 15000 && fullPrice < 30000) {
    return "Даем скидку в 5%";
  } else if (fullPrice > 0 && fullPrice < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollBackMessage(fullPrice));
console.log(screens.length);
console.log(changeTitle);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));
