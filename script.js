(function ($) {
    $('button').on('click', function () {
        
        // var lang = document.getElementById("language").value.substring(0,2);
        var lang = document.getElementById("language").value.split(" ")[0];

        var city = document.getElementById("cityname").value;
        console.log(lang)
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b955c17001d48948951b77aff7b9828a&units=metric&lang='+ lang, function (data) {

        console.log(data.name)
        console.log(data.sys.country)
        console.log(data.main.temp)
        console.log(data.main.humidity)
        console.log(data.wind.speed)
        console.log(data.weather[0]['description'])

        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
                
        cell1.innerHTML = data.name;
        cell2.innerHTML = data.sys.country;
        cell3.innerHTML = data.main.temp;
        cell4.innerHTML = data.main.humidity;
        cell5.innerHTML = data.wind.speed;
        cell6.innerHTML = data.weather[0]['description'];
        });
    });
}(jQuery));
