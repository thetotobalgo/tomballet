function page(page) {
    $('.section-main').hide();
    $(page).show();
}

$(document).ready(function () {
    $('.section-main').hide();
    $('#section-home').show();
});


var hits = 0;
var swi = 0;

var nom = document.querySelector('.nom');

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        switch (swi) {
            case 0:
                nom.innerHTML = "Tom";
                swi++;
                break;
            case 1:
                nom.innerHTML = "Tom Ballet";
                swi++;
                break;
            case 2:
                nom.innerHTML = "トム";
                swi=0;
                break;

        }


    }

}