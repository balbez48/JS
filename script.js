"use strict";

let title;
let screens;
let adaptive;
let screenPrice;
let rollback = 60;
let service1;
let service2;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
  title = prompt("Как называется ваш проект?", 'Проектик');
  screens = prompt("Какие типы экранов нужно разработать?", 'Простые');
  adaptive = confirm("Нужен ли адаптив на сайте?");
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));
  Number(screenPrice);
}

const getAllServicePrices = function () {

  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", 'Да');
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", 'Да');
    }

    let price;
    while (!isNumber(price)) {
      price = prompt("Сколько это будет стоить?");
    }
    sum += Number(price);
  }
  return sum;
}

function getFullPrice(servPrices) {
  return Number(screenPrice) + servPrices;
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

asking();
let allServicesPrices = getAllServicePrices();
let fullPrice = getFullPrice(allServicesPrices);
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
