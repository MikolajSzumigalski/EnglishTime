var xhr = new XMLHttpRequest();

xhr.onload = function() {
        if(xhr.status === 200) {
            var slowoObject = JSON.parse(xhr.responseText);
            var newSlowka = '';
            newSlowka += '<table class="w3-table w3-striped w3-centered">';
            var c = slowoObject.dictionary.length;
            for (var i = 0; i < c; i++) {
                var x = Math.floor(Math.random() * slowoObject.dictionary.length);
                newSlowka += '<tr><td class="w3-theme-d3" onclick="myFunction('+"'slowo"+i+"'"+ ')">' + slowoObject.dictionary[x].tlumaczenie + "</td></tr>";
                newSlowka += "<tr><td id='slowo"+i+"' class='w3-hide'>"+ slowoObject.dictionary[x].slowo + "<br>"; 
                if( slowoObject.dictionary[x].gerinf == "i")
                    newSlowka += "<b>infinitive</b>"; 
                else
                    newSlowka += "<b>gerund</b>"; 
                slowoObject.dictionary.splice(x, 1);
        }
            newSlowka += '</table>';
            document.getElementById('slowka').innerHTML = newSlowka;
    }
}

xhr.open('GET', 'gerinf.json', true);
xhr.send(null);   