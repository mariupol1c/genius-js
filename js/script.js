// let a = 10;
// console.log(a); // 10
// a = 20;
// console.log(a); // 20

// const b = 10;
// console.log(b); // 10

//Примитивные типы данных
// Boolean
// Number
// String
// Symbol
// undefined //без значения вообще - непонятно
// null
// BigInt

// let a = "3";
// console.log(typeof a); // String
// console.log(typeof a);
// console.log(Number.isNaN(a));
// console.log(typeof Number(a)); // Number
// a = Number(a);
// console.log(a);
// console.log(typeof a);
// console.log(Number.isNaN(a));

// console.log(Number.parseInt("5ddd")); //5
// console.log(Number.parseInt("5ddd6")); //6
// console.log(Number.parseInt("5.5ddd")); //5.5
// console.log(Number.parseInt("zzxxcc")); // NaN

// console.log(Number.parseFloat("5ddd")); //5
// console.log(Number.parseFloat("5ddd6")); //6
// console.log(Number.parseFloat("5.5ddd")); //5.5
// console.log(Number.parseFloat("zzxxcc")); // NaN

// const a = "Java" + "Script";
// console.log(a);

// let user = {
//   name: "Ivan",
//   age: 30,
//   isAdmin: true,
// };

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// console.log(Math.random() * (4 - 2) + 2);

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
let ob = {};
ob.name = "Ivan";
ob.city = "MW";
ob.age = 45;
console.log(ob);
delete UserActivation.city;
ob["like flowers"] = true;
console.log(ob);

// for (const key in ob) {
//   console.log(ob[key]);
// }
