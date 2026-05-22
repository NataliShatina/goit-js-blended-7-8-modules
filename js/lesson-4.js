// 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataAll = document.querySelectorAll("[data-topic]");
console.log(dataAll);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataFirst = document.querySelector("[data-topic");
console.log(dataFirst);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataLast = dataAll[dataAll.length - 1];
console.log(dataLast);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleH1 = document.querySelector("h1");
console.log(title);
const titleSibling = titleH1.nextElementSibling;
console.log(titleSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titleH3 = document.querySelectorAll("h3");
console.log(titleH3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
titleH3.forEach((h3) => {
  h3.classList.add("active");
  h3.style.color = "red";
});
console.log(titleH3);

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const dataNav = document.querySelector("[data-topic = navigation");
console.log(dataNav);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
dataNav.style.backgroundColor = "yellow";
console.log(dataNav);

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const textP = dataNav.querySelector("p");
console.log(textP);
textP.textContent = "Я змінив тут текст!";
console.log(textP);

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const sameElem = document.querySelector(`[data-topic = "${currentTopic}"]`);
console.log(sameElem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
sameElem.style.backgroundColor = "blue";
console.log(sameElem);
