let weather = {
    "apiKey": "99e0a337dac74494bf4174502230604",
    fetchWeather: function (city) {
        fetch ("https://api.weatherapi.com/v1/current.json?key=99e0a337dac74494bf4174502230604&q=" + city +"&aqi=no")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    }, 
    displayWeather : function(data){
        const { name } = data.location;
        const { wind_kph } = data.current;
        const { temp_c, humidity } = data.current;
        const { icon } = data.current.condition;
        const { text } = data.current.condition;
        
       

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = text;
        document.querySelector(".temp").innerText = temp_c+"°C";
        document.querySelector(".humidity").innerText =  "Humidity:"+ humidity+'%' ;
        document.querySelector(".wind").innerText = "Windspeed:"+ wind_kph +"kph";
        document.querySelector(".icon").src= icon;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url(https://source.unsplash.com/1920x1080/?"+ name +")"

         },
         search:function (){
            this.fetchWeather(document.querySelector(".search-bar").value)
         }
 }

 document.querySelector(".search button").addEventListener("click",function(){ weather.search();

 })

 document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key == "Enter"){
        weather.search()
    }

 })