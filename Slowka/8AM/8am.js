var xhr = new XMLHttpRequest();

xhr.onload = function() {
        if(xhr.status === 200) {
            var slowoObject = JSON.parse(xhr.responseText);
            var newSlowka = '';
            newSlowka += '<table class="w3-table w3-striped w3-centered">';
            for (var i = 0; i < slowoObject.dictionary.length; i++) {
                newSlowka += '<tr><td onclick="myFunction('+"'slowo"+i+"'"+ ')">' + slowoObject.dictionary[i].slowo + "</td></tr>";
                newSlowka += "<tr><td id='slowo"+i+"' class='w3-hide'><b>"+ slowoObject.dictionary[i].tlumaczenie + "</b><br>"+slowoObject.dictionary[i].zdanie +"</td></tr>";  
        }
            newSlowka += '</table>';
            document.getElementById('slowka').innerHTML = newSlowka;
    }
}

xhr.open('GET', '8am.json', true);
xhr.send(null);   