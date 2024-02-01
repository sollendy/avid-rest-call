const ulElement = document.getElementById("rest-dati");
// datiRest.innerHTML = "AAAAAAAA";
// Define the API URL
const apiUrl = 'http://time.jsontest.com/data';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then(data => {
    console.log(data);
    JSON.stringify(data, null, 2);

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const value = data[key];
  
          // Create a new <li> element for each key-value pair
          const liElement = document.createElement('li');
          liElement.innerHTML = `<li><b>${key}:</b> ${value}</li>`;
  
          // Append the <li> element to the <ul>
          ulElement.appendChild(liElement);
        }
    }
}).catch(error => {
    console.error('Error:', error);
});

console.log(Date)