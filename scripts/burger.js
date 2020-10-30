$(document).ready(function() {
    $('.mobile-menu__burger').click(function(event){
        $('.nav-menu__list, .header-top').toggleClass('open');
        $('body').toggleClass('lock');
    })


});