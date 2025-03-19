const API_URL = "https://jsonplaceholder.typicode.com/posts";
const arrayFake = []

const fetchData = async () => {
    try {
       const response = await fetch(API_URL, {
        method:"GET"
       });
       if(response.ok){
        const result = await response.json()
        const arrayFake = result
        console.log(arrayFake)
       } else {
        console.log("error server...")
       }
    } catch (error) {
        console.log(error)
    }
}

fetchData();
