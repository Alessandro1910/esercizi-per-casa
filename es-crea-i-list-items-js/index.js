
function cliccami() {   
    let pippo = document.getElementById('listaContainer') 

    let ul = document.createElement('ul') 

    for (i = 0; i < 5; i++) {                            
        let li = document.createElement('li')             
        li.textContent = "Menu-Items"
        ul.appendChild(li)               
    }

    pippo.append(ul) 
} 