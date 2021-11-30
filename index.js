// VARIABLES
/* MULTI-LINE */
const angka = 100;
let angka1 = 10;
let sum = 0;
const hello = "Hello";
let name = "Reza"; // GLOBAL VARIABLE
let lastName = "Firdaus"; // GLOBAL VARIABLE
const age = 21;

// STRINGS
const greeting = "Hello world, selamat pagi"; // STRING
const greeting2 = `Hello ${name}, anda berumur ${age}`; // TEMPLATE LITERAL, PAKE BACKTICK (BAWAH ESC)
const greeting3 = "Hello " + name + ", anda berumur " + age; // CONCATENATION

// console.log(greeting + greeting2)

// ARITHMATIC OPERATORS (+, -, /, *, %, **)
// sum = sum + angka1; // sum += angka1
// sum++ // Increment, plus 1
// sum-- // Decrement, minus 1

// COMPARISON OPERATORS (==,!=, <, >, >=, <=,===, !==)
// IF ELSE & SWITCH STATEMENTS
// if (sum === 0) {
//   console.log(sum, "True")
// } else if (sum !== 0) {
//   console.log("false")
// } else {
//   console.log("Data invalid")
// }
//
// switch (sum) {
//   case 0:
//     console.log("Sum nilainya 0");
//     break;
//   case 1:
//     console.log("Sum nilainya 1");
//     break;
//   default:
//     console.log("Sum belum di input/invalid");
//     break;
// }

// LOOP STATEMENT
// for (sum; sum<5; sum++) {
//   console.log(sum)
// }

// while (sum < 3) {
//   sum++;
//   console.log(sum)
// }

// do {
//   console.log(sum)
//   sum++;
// } while (sum < 5)

if (0 && 1) {
  console.log(true)
}


// FUNCTION -- PARAMETERS
function combineFullname() { // --> NON VOID FUNCTION
  return `Nama lengkap anda adalah: ${name} ${lastName}`;
  // return name = "Daus"
}

function combinedFullname(name, lastName) { // --> VOID FUNCTION
  let umur = 18 // CLOSURE

  function printFullname() {
    let makanan = "Mie telor" // CLOSURE
    console.log(`Nama lengkap anda adalah: ${name} ${lastName}`)
  }
}

// ARROW FUNCTION -- DIPAKAI UNTUK HANDLING PROMISE / ASYNC FUNCTION
const getFullname = () => {
  return `Nama lengkap anda adalah: ${name} ${lastName}\n`
}

const getLastname = () => `Nama belakang anda adalah: ${lastName}`


// console.log(combineFullname())
combinedFullname("Rafli", "Ihsanuddin")
console.log(getFullname(), getLastname())

