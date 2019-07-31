$.ajaxSetup({
  	headers: {
	    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  	}
});

$(document).ready(function () {
  	$('[data-toggle="offcanvas"]').click(function () {
    	$('.row-offcanvas').toggleClass('active')
    	$(this).find('i').toggleClass("glyphicon-menu-hamburger glyphicon-remove");
  	});
});