var xhr = new XMLHttpRequest();

xhr.onload = function() {
        if(xhr.status === 200) {
            var slowoObject = JSON.parse(xhr.responseText);
            var newSlowka = '';
            for (var i = 0; i < slowoObject.dictionary.length; i++) {
                newSlowka += '<div>';
                newSlowka += slowoObject.dictionary[i].slowo;
                
        }