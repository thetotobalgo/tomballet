const article1 = document.getElementsByClassName('article01');
const article2 = document.getElementsByClassName('article02');
const article3 = document.getElementsByClassName('article03');

var pageactive = 1;

$('#work').click(function (e) {
    e.preventDefault();

    if (pageactive == 2) {
        article1[0].style.transform = "translateX(-100%)";
        article2[0].style.transform = "translateX(-100%)";
        article3[0].style.transform = "translateX(-100%)";
    }
    if (pageactive == 3)
    {
        article1[0].style.transform = "translateX(-200%)";
        article2[0].style.transform = "translateX(-200%)";
        article3[0].style.transform = "translateX(-200%)";
    }
    pageactive = 1;

});

$('#about').click(function (e) {
    e.preventDefault();
    if (pageactive == 1) {
        article1[0].style.transform = "translateX(100%)";
        article2[0].style.transform = "translateX(100%)";
        article3[0].style.transform = "translateX(100%)";
    }
    if (pageactive == 3)
    {
        article1[0].style.transform = "translateX(-100%)";
        article2[0].style.transform = "translateX(-100%)";
        article3[0].style.transform = "translateX(-100%)";
    }
    pageactive = 2;
});

$('#contact').click(function (e) {
    e.preventDefault();

});

