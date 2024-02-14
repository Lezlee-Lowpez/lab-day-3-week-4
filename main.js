const baseURL = "https://swapi.dev/api/planets/?search=Alderaan";

const myButton = document.querySelector("button");

function giveMeData(evt) {
  // this is an object
  axios.get(`${baseURL}`).then((response) =>
    response.data.results[0].residents.forEach((element) => 
      axios.get(`${element}`).then((response) => {
        const h2 = document.createElement("h2");
        h2.textContent = response.data.name;
        document.body.appendChild(h2);
        // document.querySelector('body').appendChild(h2)
      })
    )
  );
}

myButton.addEventListener("click", giveMeData);
