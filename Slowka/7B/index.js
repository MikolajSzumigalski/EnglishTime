var xhr = new XMLHttpRequest();

xhr.onload = function() {
        if(xhr.status === 200) {
            var slowoObject = JSON.parse(xhr.responseText);
            var newSlowka = '';
            newSlowka += '<table class="w3-table w3-striped w3-centered">';
            var c = slowoObject.dictionary.length;
            for (var i = 0; i < c; i++) {
                var x = Math.floor(Math.random() * slowoObject.dictionary.length);
                newSlowka += '<tr><td onclick="myFunction('+"'slowo"+i+"'"+ ')">' + slowoObject.dictionary[x].slowo + "</td></tr>";
                newSlowka += "<tr><td id='slowo"+i+"' class='w3-hide'><b>"+ slowoObject.dictionary[x].tlumaczenie + "</b></td></tr>"; 
                slowoObject.dictionary.splice(x, 1);
        }
            newSlowka += '</table>';
            document.getElementById('slowka').innerHTML = newSlowka;
    }
}

xhr.open('GET', 'r7.json', true);
xhr.send(null);   