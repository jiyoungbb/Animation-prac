$('.images img').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    var num = $(this).attr('data-alt');

    $('.item').removeClass('active');
    $('#' + num).addClass('active');
})