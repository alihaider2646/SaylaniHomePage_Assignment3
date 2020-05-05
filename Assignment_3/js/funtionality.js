
// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//  Script for sticky top navbar 

var height = $('.header_top').height();
$(window).scroll(function () {
    if ($(this).scrollTop() > height) {
        $('.fixedNavbar').addClass('fixed');
    }
    else {
        $('.fixedNavbar').removeClass('fixed');

    }
});

// script for counterUp the numbers

$('.count').counterUp({
    delay: 10,
    time: 1000
});


// code for Menu Toggle 

$(document).ready(function () {
    $('.menu_toggle').click(function () {
        $('.responsiveNavbar').toggleClass('active')
    });


    // $('ul.submenu1_list li.submenu1_item').click(function () {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
});