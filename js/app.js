$(window).scroll(function () {
	const scroll = $(window).scrollTop()
	const dh = $(document).height()
	const wh = $(window).height()
	const scrollPercent = (scroll / (dh - wh)) * 100
	$('#progressbar').css('height', scrollPercent + '%')	
})