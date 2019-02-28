$(window).load(function () {
    $(".info-btn").click(function(){
       $('.popup').show();
    });
    $('.popup').click(function(){
        $('.popup').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.popup').hide();
    });
});