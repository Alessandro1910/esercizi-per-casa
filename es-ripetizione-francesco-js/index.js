/* quando il pulsante viene cliccato diventa rosso 

const bottone = document.querySelector('button');

bottone.addEventListener('click', () => {
    bottone.classList.add('nuovobottone')
}); */

fetch("https://miatech.it/platform/student/student-lessons?page=10") 
.then(response => response.json ())
.then (json => {
    let listaPizze = "<table border = 1 >";
    json.pizze.array.forEach(pizza => {
        listaPizze += `<tr><td> ${pizza.nome} </td><td> ${pizza.descrizione} </td></tr>`;
    });

    listaPizze += "</table>"
    document.body.innerHTML += listaPizze;
})

.catch(console.error)

