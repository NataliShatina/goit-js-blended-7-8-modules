// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);
// bodyEl.textContent = "Hello";
// bodyEl.innerHTML = "<h1>Hello</h1>";
// bodyEl.insertAdjacentHTML("beforeend", "<h1>Hello</h1>");

// const title = document.createElement("h1");
// title.textContent = "Hello";
// title.classList.add("");
// bodyEl.append(title);

// bodyEl.style.backgroundColor = "yellow";

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.log(titleEl);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.log(listEl);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataElAll = document.querySelectorAll("[data-topic]");
console.log(dataElAll);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataFirstEl = document.querySelector("[data-topic]");
console.log(dataFirstEl);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const dataElAll = document.querySelectorAll("[data-topic]");
const lastEl = dataElAll[dataElAll.length - 1];
console.log(lastEl);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const titleEl = document.querySelector("#title");
const sibling = titleEl.nextElementSibling;
console.log(sibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titlesH3 = document.querySelectorAll("h3");
// console.log(titlesH3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const titlesH3 = document.querySelectorAll("h3");

titlesH3.forEach((h3) => {
  h3.classList.add("active");
  h3.style.color = "red";
});
console.log(titlesH3);

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liNav = document.querySelector('[data-topic="navigation"]');
console.log(liNav);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liNav.style.backgroundColor = "yellow";
console.log(liNav);

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const textLiNav = liNav.querySelector("p");
textLiNav.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо
// атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const element = document.querySelector(`[data-topic="${currentTopic}"]`);

console.log(element);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
element.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompl = document.querySelector(".completed");
console.log(titleCompl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const li = titleCompl.closest("li");

li.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
titleEl;
const p = document.createElement("p");
p.textContent = "Об'єктна модель документа (Document Object Model)";

titleEl.insertAdjacentElement("afterend", p);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// а опис (р) - "Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами
// і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P
// і готову LI закинути у кінець списку
// const list = document.querySelector(".list");
// console.log(list);

// const liNew = document.createElement("li");

// const h3New = document.createElement("h3");
// h3New.textContent = "Властивість innerHTML";

// const pNew = document.createElement("p");
// pNew.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// li.append(h3, p);
// list.append(li);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const list = document.querySelector(".list");
console.log(list);
const newItem = `<li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
      використовувати рядки з тегами і дозволити браузеру зробити всю важку
      роботу
    </p>
  </li>`;
list.insertAdjacentHTML("beforeend", newItem);
// 20 - очисти список
// list.innerHTML = "";
// !================ TASK 2=================!

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const numbContainer = document.querySelector(".number-container");

// for (let index = 0; index < 100; index++) {
//   const div = document.createElement("div");
//   const number = randomNumber();
//   div.textContent = number;
//   div.classList.add("number");
//   if (number % 2 === 0) {
//     div.classList.add("even");
//   } else {
//     div.classList.add("odd");
//   }
//   numbContainer.append(div);
// }

// !===========TASK 3===================
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector(".js-username-input");

// console.log(input);
input.addEventListener("input", () => {
  const value = input.value.trim();
  // console.log(value);
  if (value.length > 6) {
    input.classList.add("success");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("success");
  }
  userSpan.textContent = value ? value : DEFAULT_NAME;
});
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
input.addEventListener("focus", () => {
  if (input.value.trim() === "") {
    input.style.outline = "3px solid red";
  } else {
    input.style.outline = "3px solid green";
  }
});
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
input.addEventListener("blur", () => {
  if (input.value.trim() === "") {
    input.style.outline = "3px solid red";
  } else {
    input.style.outline = "3px solid lime";
  }
});
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector(".js-contact-form");
const checkbox = document.querySelector(".js-policy-checkbox");
const userSpan = document.querySelector(".js-username-output");

const DEFAULT_NAME = "Anonymous";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueInput = input.value.trim();
  const isChecked = checkbox.checked;
  if (valueInput !== "" && isChecked) {
    const data = { userName: valueInput };
    console.log(data);
  } else {
    console.log("Заповніть поле та підтвердіть згоду");
    return;
  }

  // очищення форми
  input.value = "";
  checkbox.checked = false;
  userSpan.textContent = DEFAULT_NAME;
  input.classList.remove("success", "error");
  // input.style.outline = "";
});
