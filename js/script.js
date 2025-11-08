// function summ(name, price, count) {
//   return function () {
//     console.log(`Tovar ${name} stoit : ${price * count}`);
//   };
// }

// document.querySelector("#b").addEventListener("click", function () {
//   summ(
//     document.querySelector("#t").value,
//     Number(document.querySelector("#p").value),
//     Number(document.querySelector("#c").value)
//   )();
// });

// const el = {
//   name: "",
//   price: 0,
//   count: 0,
//   summ: function schowSumm() {
//     console.log(`Tovar ${this.name} stoit : ${this.price * this.count}`);
//   },
// };

// const b = {
//   name: "Banana",
//   price: 30,
//   count: 4,
// };

// el.summ.call(b);

// function info(text) {
//   return function () {
//     console.log(text);
//   };
// }
// document
//   .querySelector("#html")
//   .addEventListener("click", info("text about HTML"));

// document
//   .querySelector(".css")
//   .addEventListener("click", info("big text about CSS"));

// const student = {
//   name: "Ivan",
//   spec: "Plamber",
//   bal: "4",
//   prop: "6",
//   info: function info() {
//     console.group(`Name ${this.name}`);
//     console.log(`spec ${this.spec}`);
//     console.log(`bal ${this.bal}`);
//     console.log(`prop ${this.prop}`);
//   },
// };

// const student1 = {
//   name: "Ivan1",
//   spec: "Plamber1",
//   bal: "14",
//   prop: "16",
// };
// const student2 = {
//   name: "Ivan2",
//   spec: "Plamber2",
//   bal: "24",
//   prop: "26",
// };
// const student3 = {
//   name: "Ivan3",
//   spec: "Plamber3",
//   bal: "34",
//   prop: "36",
// };

// student.info();
// student.info.bind(student1)();
// student.info.apply(student3);

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// let y = () => {
//   alert("Ви погодились.");
// };
// let n = () => {
//   alert("Ви скасували виконання.");
// };

// ask("Ви згодні?", y, n);

// let min = (a, b) => {
//   return a < b ? a : b;
// };

// console.log(min(10, 7));

// function checkAge(age) {
// return age > 18 ? true : confirm('Батьки дозволили?');
// }

// console.log(document);

// const numberRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector("button");
// buttonRef.addEventListener("click", () => {
//   console.log(numberRef.value);
// });

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let sum = 0;
// let k = 0;
// for (let el of girls) {
//   sum += Number(el.age);
//   k++;
// }
// console.log(sum / k);
