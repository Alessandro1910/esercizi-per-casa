const API_URL = "https://jsonplaceholder.typicode.com/posts"; // assegnamento variabile con link

const $tbody = document.querySelector("#tbodyData"); // assegnamento variabile con elemento html corrispondente al selettore per aggiungere elementi all interno

const state = {  // assegnamento variabile con oggetto che contiene i "post",all inizo vuoto perche i post li recuperemo a riga 11. con la "fetch"
    posts: [], // const posts = []"altro modo di dichiarare"
}

const fetchData = async () => { // async function fetchData(){} "altro modo di dichiarare la funzione"
    try {
        const response = await fetch(API_URL, {  // Fetch e una funzione asincrona richiede del tempo per essere eseguita quindi richiede AWAIT
            method: "GET"
        });
        if (response.ok) {
            const result = await response.json();
            state.posts = result;
        } else{
            console.log("Server error...");
        }

    } catch (error) {
        console.log(error);
    }
} // il compito di questa funzione fetchData e recuperare i dati dei posts chiamando "URL dichiarato in variabile  API_URL"

const generateHTMLFromData = () => {// async function generateHTMLFromData(){} "altro modo di dichiarare"
    const HTMLArray = state.posts.map((post) => { // "map = converte harray in un altro harray"
        return `
        <tr>
            <td>${post.id}</td>
            <td>${post.postId}</td>
            <td>${post.name}</td>
            <td>${post.email}</td>
            <td>${post.body}</td>
        </tr>
    `;
    });

    const HTML = HTMLArray.join(""); // .join unisce una serie di stringhe in un unica stringa lunga
    return HTML; // dichiaramo che ci viene restituita un unica stringa ottenuta dalla concatenzaione di tutte le stringhe che sono all interno di HTMLArray. 
}

const renderData = () => {
    const HTML = generateHTMLFromData ();

    $tbody.innerHTML = HTML; // andiamo a scrivere dentro al TAG "$tbody" la stringa contenuta dentro la variabile "HTML" fuor'uscita dalla funzione "generateHTMLFromData" che aveva dato una serie di stringhe.
}

const init = async () => { // se una funzione e Async,quando la invoco metto "AWAIT" davanti come in questo caso,await fetchData.
    await fetchData();
    
    renderData();
}

init(); // il programma inizia adesso,fino a riga 53 abbiamo solo definito delle funzioni.