let title = 'Project123';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 4000;
let rollback = 60;
let fullPrice = 12250;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)

console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));