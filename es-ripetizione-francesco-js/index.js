/* quando il pulsante viene cliccato diventa rosso */

const bottone = document.querySelector('button');

bottone.addEventListener('click', () => {
    bottone.classList.add('nuovobottone')
});