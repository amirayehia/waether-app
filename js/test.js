let inputValue = document.querySelector("#inpvalue");
let actionButton = document.getElementById("action");
let content = document.getElementById("content")
console.log(content);
getData ("cairo")

async function getData (country){
   let data =  await fetch (`http://api.weatherapi.com/v1/forecast.json?key=9ce05b69eef94a07a84214042220106&q=${country}&days=7`);
   let finalResult = await data.json();
//    console.log(finalResult)
//    console.log(finalResult.current.last_updated);
//    console.log(finalResult.location.name);
//    console.log(finalResult.current.condition.text);
//    console.log(finalResult.current.temp_c);
console.log(finalResult.forecast.forecastday[1].day);
 display(finalResult)




   return finalResult
}

function display (data){
    let cartona =` <div class="col-md-4 text-light item item1 bg-dark-weather p-5 mb-5">
                    <div class="head d-flex justify-content-between date mb-5">
                        <div> Date:</div>
                        <div>${data.current.last_updated}</div>
                    </div>
                        <span class="country fw-bold">${data.location.name}</span>
                        <h1 class="weather fs-1 mt-3 mb-3">${data.current.temp_c}<sup>o</sup>C <span class="icon"><img src="./imgs/${data.current.condition.text}.webp" alt=""></span></h1>
                        <span class="weather-status">${data.current.condition.text}</span>
                        <div class="options mt-3">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li><i class="fa-solid fa-umbrella"></i>20%</li>
                                <li><i class="fa-solid fa-wind"></i> 18km/h</li>
                                <li><i class="fa-solid fa-compass"></i> East</li>
                            </ul>
                        </div>
                </div>

                <div class="col-md-4 text-light item p-5  mb-5 bg-special">
                    <div class="head d-flex justify-content-between date mb-5">
                        <div> Date:</div>
                        <div>${data.forecast.forecastday[1].date}</div>
                    </div>
                        <h1 class="weather fs-1 mt-3 mb-3"> ${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C <span class="icon"><img src="./imgs/${data.forecast.forecastday[1].day.condition.text}.webp" alt=""></span></h1>
                        <span class="weather-status .special">${data.forecast.forecastday[1].day.condition.text}</span>
                        <div class="options mt-3">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li><i class="fa-solid fa-umbrella"></i>20%</li>
                                <li><i class="fa-solid fa-wind"></i> 18km/h</li>
                                <li><i class="fa-solid fa-compass"></i> East</li>
                            </ul>
                        </div>
                </div>

                <div class="col-md-4 text-light item item1 bg-dark-weather p-5 mb-5 ">
                    <div class="head d-flex justify-content-between date mb-5">
                        <div> Date:</div>
                        <div>${data.forecast.forecastday[2].date}</div>
                    </div>
                        <h1 class="weather fs-1 mt-3 mb-3"> ${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C <span class="icon"><img src="./imgs/${data.forecast.forecastday[2].day.condition.text}.webp" alt=""></span></h1>
                        <span class="weather-status">${data.forecast.forecastday[2].day.condition.text}</span>
                        <div class="options mt-3">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li><i class="fa-solid fa-umbrella"></i>20%</li>
                                <li><i class="fa-solid fa-wind"></i> 18km/h</li>
                                <li><i class="fa-solid fa-compass"></i> East</li>
                            </ul>
                        </div>
                </div>

                
                
                
                
                
                
                `
        content.innerHTML = cartona
console.log(data);
 }

actionButton.addEventListener("click", function (){
    getData (inputValue.value);
    clear ()
});

function clear (){
    inputValue.value = ''
}







