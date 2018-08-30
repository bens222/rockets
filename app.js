$(document).ready(function() {
    var obj;
    $.getJSON("https://launchlibrary.net/1.2/rocket", function(data) {
        data.rockets.forEach( (elem) => {
            console.log(data);

            var list = document.getElementById('rockets')
            var newElem = document.createElement( 'li' );
            newElem.innerHTML = elem.name;
            list.appendChild( newElem );
        })
    });
});