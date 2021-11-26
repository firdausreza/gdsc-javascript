// ARRAY
let array = ["Pisang", "Apel", "Mangga"];

array.push("Orange") // Nambahin data di akhir array
array.unshift("Kiwi") // Nambahin data di awal array
array.pop() // Remove data yang ada di akhir
array.shift() // Remove data yang ada di awal

for (let i=0; i<array.length; i++) {
  console.log(array[i]);
}

// array.splice(0, 3) // Remove data dari index yang diinginkan

// OBJECT
let people = {
  name: 'Reza',
  age: 18,
  gender: 'Male',
  favfood: ['Mie', 'Pizza', 'Telor ceplok']
}

people.name = "Firdaus"

// console.log(array)