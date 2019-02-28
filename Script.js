$(document).ready(function () {
    $(".info-btn").on('click touchstart', function(){
       $('.popup').show();
    });
    $('.popup').on('click touchstart', function(){
        $('.popup').hide();
    });
    $('.popupCloseButton').on('click touchstart', function(){
        $('.popup').hide();
    });
});