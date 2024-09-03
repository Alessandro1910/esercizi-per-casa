const API_URL = "https://jsonplaceholder.typicode.com/posts";

const $tbody = document.querySelector("#tbodyData");

const state = {
    posts: [],
}

const fetchData = async () => {
    try {
        const response = await fetch(API_URL, {
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
}

const generateHTMLFromData = () => {
    const HTMLArray = state.posts.map((post) => {
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

    const HTML = HTMLArray.join("");
    return HTML;
}

const renderData = () => {
    const HTML = generateHTMLFromData ();

    $tbody.innerHTML = HTML;
}

const init = async () => {
    await fetchData();
    
    renderData();
}

init();