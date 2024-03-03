console.log("Hello World!");

const clients = ["Mango", "Poly", "Ajax"]; // Arrays
console.log(clients[0]); // Index of arrays
console.log(clients[2]);

clients[0] = "Kiwi";
console.log(clients); // Redenumirea in arrays

console.log(clients.length); // 3 --lungimea unui element ["Mango", "Poly", "Ajax"]

const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); //2
console.log(clients[lastElementIndex]); // Ajax

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

for (const client of clients) {
  console.log(client);
}
const string = "javascript";

for (const character of string) {
  console.log(character);
}

const clientNameToFind = "Poly";
let message;
let client;
for (client of clients) {
  if (client === clientNameToFind) {
    message = "Clientul exista in baza de date";
    break;
  } else {
    message = "Clientul cautat nu exista in baza de date";
  }
}
console.log(message);

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Pentru numere mai mici decât valoarea limită, va funcționa continue, iar corpul
// execuției statement se oprește.
// Se va efectua următoarea iterație.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Numărul este mai mare decât ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
