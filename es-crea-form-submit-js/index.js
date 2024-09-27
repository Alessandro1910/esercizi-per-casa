let newF = document.getElementById('mioForm');

newF.addEventListener("submit", (event) => {
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;

    if(nome == "" || cognome == "") {
        alert('Compilare entrambi i campi')

    event.preventDefault();

    }
});
