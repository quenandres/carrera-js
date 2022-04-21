const numbers = [1,30,49,29,10,13];


const rta2 = numbers.every(item => item <= 40);
console.log(rta2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 9,
    },
];

// Determinar si todos son menores de edad
const rta_team = team
//.map(player => player)
.every(player => player.age < 18);

console.log(rta_team);