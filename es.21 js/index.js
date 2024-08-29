let person = {
    name:"alex",
    age:"23",
    city:"Napoli",
    job:"webdeveloper"
  }

  person.age = "25;"
  
  console.log(person)

  for(let proprieta in person) {
    let valore = person[proprieta];
    console.log("<p>proprieta: "+ proprieta + " =>" + valore + "</p>")
  }