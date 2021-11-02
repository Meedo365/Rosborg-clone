$(document).ready(function(){

    $("#theTarget").skippr();

});

$("#theTarget").skippr({

    transition: 'slide',
    speed: 1000,
    easing: 'easeOutQuart',
    navType: '',
    childrenElementType: 'div',
    arrows: false,
    autoPlay: true,
    autoPlayDuration: 2000,
    keyboardOnAlways: true,
    hidePrevious: false

});