const article1 = document.getElementsByClassName('article01');
const article2 = document.getElementsByClassName('article02');
const article3 = document.getElementsByClassName('article03');

var pageactive = 1;

$('#work').click(function (e) {
    e.preventDefault();
    $('.article01').show();
    $('.article02').hide();
    $('.article03').hide();
});

$('#about').click(function (e) {
    e.preventDefault();
    $('.article01').hide();
    $('.article02').show();
    $('.article03').hide();
});

$('#contact').click(function (e) {
    e.preventDefault();
    $('.article01').hide();
    $('.article02').hide();
    $('.article03').show();
});

