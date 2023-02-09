function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='9517712d3ace9ab613935103b79f73e1';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
        .then(response => response.json())
        .then(data =>{
            var t= data['main']['temp']  
            var maxt= data['main']['temp_max']
            var mint= data['main']['temp_min']
            var humidity= data['main']['humidity']
            var pressure= data['main']['pressure']
            document.getElementById("cityname").innerHTML=city;
            document.getElementById("temp").innerHTML=t+" degree C";
            document.getElementById("maxtemp").innerHTML=maxt+" degree C";
            document.getElementById("mintemp").innerHTML=mint+" degree C";
            document.getElementById("hum").innerHTML=humidity+" ";
            document.getElementById("pressure").innerHTML=pressure;
        })       
}