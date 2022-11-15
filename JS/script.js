function page(page) {
    $('.section-main').hide();
    $(page).show();
}

$(document).ready(function () {
    $('.section-main').hide();
    $('#section-home').show();
});

var swi = 0;
var nom = document.querySelector('.nom');

$('.bubble-wrapper').click(function (e) { 
    e.preventDefault();
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
});
