$(document).ready(function () {
    $(".info-btn").on('click', function(){
       $('.popup').show();
    });
    $('.popup').on('click', function(){
        $('.popup').hide();
    });
    $('.popupCloseButton').on('click', function(){
        $('.popup').hide();
    });
    $('.menu-btn').on('click', function(){
    	$('.hidden-nav').toggleClass('hide');
    });
});