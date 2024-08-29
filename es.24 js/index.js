const $counterValue = document.querySelector("#counter-value");
const $counterBtnAdd = document.querySelector("#counter-btn-add");
const $counterBtnRemove = document.querySelector("#counter-btn-remove");
const $settingsForm = document.querySelector("#settings");
const $numberInput = $settingsForm.querySelector('input[name="number"]');
const $upperLimitInput = $settingsForm.querySelector('input[name="upperLimit"]');
const $lowerLimitInput = $settingsForm.querySelector('input[name="lowerLimit"]');

const utilities = {
    save: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
        return JSON.parse(localStorage.getItem(key))
    } 
}

const memoryState = utilities.get("state");

const state = {
    counter: memoryState?.counter || 0, 
    upperLimit: memoryState?.upperLimit || 10,
    lowerLimit: memoryState?.lowerLimit || 0,
    number: memoryState?.number || 1,
}

const saveState = () => {
    utilities.save("state", state)
}

//scrivere la logica divisa in diverse funzioni;

// 1. seleziono gli elementi html;
// 2. dichiaro e riempio la base date (state);
// 3. creo una funzione che incrementa il contatore di 1;
// 3.1 creo una funzione che decremeta il contatore di 1;
// 4. creo una funzione che ascolta il click del bottone per eseguire le funzioni;
// 5. renderizo il nuovo valore del counter in pagina;
// 6. creo una funzione di inizializzazione (init);
// 7. eseguo la funzione init.

const incrementByOne = () => {
    if(state.counter < state.upperLimit) {
        state.counter = state.counter + state.number;
        saveState();
    }
}

const decrementByOne = () => {
    if(state.counter > state.lowerLimit) {
        state.counter = state.counter - state.number;
        saveState();
    }
}

const addEventListeners = () => {
    $counterBtnAdd.addEventListener("click", () => {
        incrementByOne();
        renderCounter();
    });

    $counterBtnRemove.addEventListener("click", () => {
        decrementByOne();
        renderCounter();
    });
}

const mount = () => {
    $numberInput.value = state.number;
    $upperLimitInput.value = state.upperLimit;
    $lowerLimitInput.value = state.lowerLimit;
}

const renderCounter = () => {
    $counterValue.innerHTML = state.counter;
}

const init = () => {
    mount();
    renderCounter();
    addEventListeners()
}

init()