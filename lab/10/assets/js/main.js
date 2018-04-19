// Insert your actual API request URL below
fetch('http://api.openweathermap.org/data/2.5/weather?zip=11206&APPID=3045a98701b5390a40228fcfab1abae9&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });

    //RENDER FUNCTION SETUP
    //-------------

    var tempSpan = document.querySelector('.temp')
    var windSpeedSpan = document.querySelector('.wind-speed')
    var windDirSpan = document.querySelector('.wind-dir')
    var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
    var weatherVane = document.querySelector('.weather-vane')

  function render (data) {
    console.log('render');
    //log the data in it's entirety
    console.log('data');

    //log & insert the temperature
    console.log(data.main.temp);
    tempSpan.innerText = data.main.temp

    //log&insert the wind wind WindSpeed
    console.log(data.wind.speed)
    windSpeedSpan.innerText = data.wind.speed

    //log & insert the wind direction
    console.log(data.wind.deg)
    windDirSpan.innerText = data.wind.deg

    //set bg color based on temp
    document.body.style.backgroundColor = 'hsl('+data.wind.deg + ',50%,50%)'

    //rotate the weather vane based on wind direction
    weatherVaneWrapper.style.transform = 'rotate('+data.wind.deg + 'deg)'

    //set animation duration of weathervane based on wind WindSpeed
     weatherVane.style.animationDuration = 5 /data.wind.speed + 's'

}
