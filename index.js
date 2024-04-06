// Команди NPM

// npm init - ініціалізує npm в проекті і створює файл package.json
// npm install - встановлює всі залежності, перелічені в package.json
// npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
// npm install [package-name] - встановить пакет локально у папку node_modules
// npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
// npm update - оновить всі пакети до максимально дозволеної версії

// Команди npm install і npm uninstall мають три прапорці.

// -save - вказує, що додається залежність, яка увійде до фінального продукту. Пакет буде встановлений локально, в папку node_modules і буде доданий запис в поле dependencies в package.json.
// -save-dev - вказує, що додається залежність розробки. Пакет буде встановлений локально в папку node_modules, і буде доданий запис в поле devDependencies в package.json.
// -global - вказує, що додається глобальна залежність, тобто інструмент, який доступний для будь-якого проекту. Пакет буде встановлений глобально (в систему).
// console.log("first log");
// setTimeout(() => {
//   console.log("second log");
// }, 2000);
// console.log("third log");
// const timerId = setTimeout(callback, delay, arg);
// callback - функція,виконання якої треба спланувати
// delay - час в мс
// arg - аргументи
// const button = document.querySelector(".button");

// const onclick = () => {
//   const timerId = setTimeout(() => {
//     alert("I love asynk js");
//   }, 4000);
// };

// button.addEventListener("click", onclick);

// setInterval - вкликає якусь функцію раз в якийсь час
// setInterval(callback, delay, arg);
// const buttonStart = document.querySelector(".start");
// const buttonStop = document.querySelector(".stop");
// let interval = null;
// buttonStart.addEventListener("click", () => {
//    interval = setInterval(() => {
//     console.log(`hello${Math.random()}`);
//   }, 2000);
// });
// buttonStop.addEventListener("click", () => {
//   clearInterval(interval);
// });


const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
console.log(getRandomHexColor())
const body = document.querySelector("body");
setInterval(()=>{
body.style.backgroundColor=getRandomHexColor()
},0.1)
