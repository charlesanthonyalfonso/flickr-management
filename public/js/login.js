$(document).ready(function(){
	$('#login').submit(function(e){
		e.preventDefault();
		var form = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: '/login',
			data: form,
			success: function(res){
				if(res.success){
					$('.login-result').html('<div class="alert alert-success">'+res.message+'! Please wait while redirecting</div>');
					window.location = res.redirect;
				}
				else
					$('.login-result').html('<div class="alert alert-danger">'+res.message+'</div>');
			}
		})
	})
})