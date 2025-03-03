// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr.length);
// console.log(arr);
// arr.forEach((elem) => {
//   console.log(elem);
// });

// let s = arr.toString();
// console.log(s);
// let count = 100;

// const ans = arr.map((ele,index)=>{
//     arr[index] = count++;
//     return count;
// })

// console.log(arr)

// console.log(ans)

// let ans = arr.join();
// console.log(ans);

// let obj = {
//   FirstName: "Monu",
//   LastName: " Rathor",
//   Enrollment: 23,
// };

// console.log(delete obj.firstName);
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = ["a", "b", "c", "d", "e"];
// let arr3 = ["monu", "kuldeep"];
// let ans = [];

// ans = arr2.concat(arr1, arr2, arr3);
// console.log(ans);

// let arr = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   ["monu", "kuldeep", ["a", "b", "c", ["$", "&", "*"]]],
// ];
// console.log(arr.flat(Infinity));

// arr.push("monu");
// arr.push("kuldeep", "pranjal", 11, 12, 13, 14, 15, 16, 17);

// arr.unshift("front11", "front22", "front33");
// arr.shift();

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr1 = arr.splice(1, 2, "monu", "kuldeep");

// console.log(arr1);

// const a = ["Apple", "Banana", "Cherry"];
// const res = a.values();

// for (let elem of res) {
//   console.log(elem);
// }

// arr.reverse();
// console.log(arr);

// let ans = arr.reduce((acc, curr) => {
//   acc += curr;
//   return acc;
// });

// console.log(ans);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr1 = arr.filter((elem) => elem > 2);
// console.log(arr1);
// console.log(obj);
// console.log(JSON.stringify(obj));

// let jsonstring = JSON.stringify(obj);
// console.log(jsonstring);

// let obj1 = JSON.parse(jsonstring);
// console.log(obj1);

// console.log(obj.name);
// console.log(obj["name"]);

// let name = "kuldeep";
// let value = 45;
// obj[name] = value;
// obj["name"] = "pradeep";
// console.log(obj);

// console.log(obj.hasOwnProperty("age"));
// console.log("age" in obj);

let obj = {
  name: "monu",
  age: 22,
};

console.log(Object.keys(obj).length);
