// ARRAY
let array = ["Pisang", "Apel", "Mangga"];

array.push("Orange") // Nambahin data di akhir array
array.unshift("Kiwi") // Nambahin data di awal array
array.pop() // Remove data yang ada di akhir
array.shift() // Remove data yang ada di awal

// for (let i=0; i<array.length; i++) {
//   console.log(array[i]);
// }

// array.splice(0, 3) // Remove data dari index yang diinginkan

array[3] = "Kiwi"

const [ buah1, , , buah3 ] = array; // DESTRUCTURING ARRAY

console.log(`Buah pertama adalah: ${buah1}, Buah kedua adalah: ${buah3}`);

// OBJECT
let people = {
  name: 'Reza',
  age: 18,
  gender: 'Male',
  favfood: ['Mie', 'Pizza', 'Telor ceplok']
}

const { name, age } = people // DESTRUCTURING OBJECT

// people.name = "Firdaus" // -->  Assign properties
people['isFemale'] = true // -->  Assign properties

// console.log(`Hello ${name}, anda berumur ${age}\n`, array)
