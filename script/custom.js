$('.btn li').click(function(){
    $('.btn li').removeClass('active')
    $(this).addClass('active')

    var num = $(this).attr('data-alt')

    $('.item').removeClass('active')
    $('#' + num).addClass('active')
})