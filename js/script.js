const ulElement = document.getElementById("rest-dati");
// datiRest.innerHTML = "AAAAAAAA";
const localUlElement = document.getElementById("local-dati");
const lastParEl = document.getElementById("last-par-el");
//faccio la chiamata API e estrapolo i dati mediante i seguenti passaggi
// Define the API URL
const apiUrl = 'http://time.jsontest.com/data';

// Make a GET request

const data = async (url) => {
  return fetch(url).then(response => {
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
    return data;
  }).catch(error => {
    console.error('Error:', error);
  });
}

const callResult = data(apiUrl);

// const d = new Date();
// console.log(d)
// Create a new Date object representing the current date and time
const currentDate = new Date();

// Extract individual components of the date and time
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const milliseconds = currentDate.getTime();

// Create an array with the extracted date and time components
// const dateTimeArray = [year, month, day, hours, minutes, seconds, milliseconds];

const dateTimeArrayObj = {
  "date": `${month}-${day}-${year}`,
  "milliseconds_since_epoch": milliseconds,
  "time": `${hours}:${minutes}:${seconds}`,
};

// const localLi = document.createElement("li");
// Display the array
// console.log(dateTimeArray);
console.log(dateTimeArrayObj);

for (const coordinate in dateTimeArrayObj) {

  const value = dateTimeArrayObj[coordinate];
  const liLocalElement = document.createElement('li');
  liLocalElement.innerHTML = `<li><b>${coordinate}:</b> ${value}</li>`;
  localUlElement.appendChild(liLocalElement);

}
callResult.then(result => {
  // Use the data here
  console.log('Data from callResult:', result);
  console.log(result.milliseconds_since_epoch);

  const apiMilSeconds = result.milliseconds_since_epoch;
  const difference = (apiMilSeconds - milliseconds) / 1000;

  console.log(difference)
  lastParEl.innerHTML = `there is a discrepancy of ${3600 + difference} seconds between the two time coordinates.`
  // Example: Using the data in another function
  // return data(result);
});