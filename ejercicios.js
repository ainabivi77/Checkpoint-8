// Ejercicio 1. Cree un bucle for en JS que imprima cada nombre de esta lista. myList = ["velma", "scout", "jane", "john", "harry"]
const myList = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < myList.length; i++) {
  console.log(myList[i]);
}


// Ejercicio 2. Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
const myList2 = ["velma", "exploradora", "jane", "john", "harry"];

let i = 0;
while (i < myList2.length) {
  console.log(myList2[i]);
  i++;
}


// Ejercicio 3. Cree una función de flecha que devuelva "Hola mundo".

const saludo = () => {
    return "Hola mundo";
  };
  
  console.log(saludo());
  