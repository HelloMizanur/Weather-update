let apiKey = "a515190a3538df48bb886278d7a6cfeb";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// All classess and element from indix.html
let searchInput = document.querySelector('input');
let inputBtn = document.querySelector('button');
let imgIcon = document.querySelector('.img-icon');
let weather = document.querySelector('.weather');
let temp = document.querySelector('.temp');
let city = document.querySelector('.city');
let humi = document.querySelector('.humi');
let wind = document.querySelector('.wind');


async function checkWeather(inputCity){
    let response = await fetch(apiUrl + inputCity + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
    }else{
        let data = await response.json();
        temp.innerHTML = Math.round(data.main.temp) + " °C";
        city.innerHTML = data.name;
        humi.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            imgIcon.src = "assets/images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            imgIcon.src = "assets/images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            imgIcon.src = "assets/images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            imgIcon.src = "assets/images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            imgIcon.src = "assets/images/mist.png"
        }  
        document.querySelector('.error').style.display = 'none';  
    }

   
};
checkWeather("Dhaka");
inputBtn.addEventListener('click', ()=>{
    checkWeather(searchInput.value);
});