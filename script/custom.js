$('.title').click(function(){
	$(this).addClass('active')
	$(this).siblings('.title').removeClass('active')

	$(this).siblings('.desc').stop().slideUp()
	$(this).next('.desc').stop().slideDown()

	var img = $(this).attr('data-img')
	$('.imgae img').attr('src', img)
})