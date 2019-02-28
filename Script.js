$(document).ready(function () {
    $(".info-btn").on('touch click', function(){
       $('.popup').show();
    });
    $('.popup').on('touch click', function(){
        $('.popup').hide();
    });
    $('.popupCloseButton').on('touch click', function(){
        $('.popup').hide();
    });
});