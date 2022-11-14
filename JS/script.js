function page(page) {
    $('.section-main').hide();
    $(page).show();
}

$(document).ready(function() {
    $('.section-main').hide();
    $('#section-about').show();
});
