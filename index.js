
let searchtext = document.getElementById("searchtext");
let searchbtn = document.getElementById("searchbtn");
let result = document.getElementById("result");

let key = `556a476befbee4133f0ab545eabe4ab4`

let getweather = () => {
    let city = searchtext.value;
    searchtext.value = ""
    
    //loading effects

    result.innerText="Fetching Data " 
    result.innerText=" Please Wait..." 
    // if city is empty

    if (city.length==0) {
        result.innerHTML = `<h4>Please Enter a City Name</h4>`
    }

    // if city is not empty and valid

    else{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.style.display = "block"; // show HTML content
            result.innerHTML = `
            <h2 class="mt-3 text-uppercase">${data.name} - ${data.sys.country}</h2>
                
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png " 
            <h4 class="weather"> ${data.weather[0].description}</h4>
            <h1 id="temp">${data.main.temp} °C</h1>
            <hr>
            
            <div class="d-flex fs-4 justify-content-center">
                <div class=" border-end border-3 pe-4 title">Min
                    <h5>${data.main.temp_min} °C</h5>
                </div>

                <div class="ps-4 title">Max
                    <h5>${data.main.temp_max} °C</h5>
                </div>
            </div>
            <div class="pt-2" id="feel">
            <h4>Feels Like :  ${data.main.feels_like} °C</h4>
            </div>
            <hr>
            
            <div class="d-flex fs-4 justify-content-center align-item-center text-center flex-wrap">
                <div class="pe-4 title">Pressure
                <h5>${data.main.pressure} mb</h5>
                </div>
                <div class=" pe-4 title">Humidity
                    <h5>${data.main.humidity} %</h5>
                </div>
                <div class=" pe-4 title">Wind Degree
                    <h5>${data.wind.deg} °</h5>
                </div>
                <div class="title">Wind speed
                    <h5>${data.wind.speed} km/h</h5>
                </div>
            </div>
                `
        })

        //if city is not valid

        .catch(() => {
            result.innerHTML = `<h4>Enter a valid City Name</h4>
        `});
        
}
}

//  Modal popup on Page Load
  // Get the modal
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  // show the modal When the page loads, 
  window.onload = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

// modal ends

searchbtn.addEventListener('click', getweather);
searchtext.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        getweather()
    }
});