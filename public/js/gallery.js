$(document).ready(function(){
	var per_page = 50;
	var current_category = "";

	$(document).off('click touchstart', '.category').on('click touchstart', '.category', function(e){
	    e.preventDefault();
	    e.stopPropagation();
		current_category = $(this).data('name');
		getFlickrImageByCategory(current_category);
		$('.row-offcanvas').removeClass('active');
		$('[data-toggle="offcanvas"]').find('i').addClass('glyphicon-menu-hamburger').removeClass('glyphicon-remove');
	})

	function getFlickrImageByCategory(category){
		delete $.ajaxSettings.headers["X-CSRF-TOKEN"];
		$.ajax({
			method : 'GET',
			url : 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+window.flickr_key+'&text='+category+'&per_page='+per_page+'&format=json&nojsoncallback=1',
			beforeSend: function(){
				$('.gallery').html('<img class="loading" src="/img/loading.gif">');
			},
			success : function(result){
				if(result.stat == "ok"){
					$('.gallery').empty();
					$.each(result.photos.photo, function( index, value ) {
						$('.gallery').append(
							'<div class="col-xs-6 col-md-4">'+
							  	'<a href="#" class="thumbnail img-gallery" '+
							  		'data-secret="'+value.secret+'" data-id="'+value.id+'"  title="'+value.title+'" style="background: url(https://farm'+value.farm+'.staticflickr.com/'+value.server+'/'+value.id+'_'+value.secret+'.jpg)">'+
						      	'</a>'+
					    	'</div>'
					    );
					});
				}
			}
		});
		$.ajaxSettings.headers["X-CSRF-TOKEN"] = $('meta[name="csrf-token"]').attr('content');
	}

	$(document).on('click', '.img-gallery', function(e){
		e.preventDefault();
		var id = $(this).data('id');
		var secret = $(this).data('secret');

		$('.gallery').empty();
		delete $.ajaxSettings.headers["X-CSRF-TOKEN"];
		$.ajax({
			type : 'GET',
			url : 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key='+window.flickr_key+'&photo_id='+id+'&secret='+secret+'&format=json&nojsoncallback=1',
			beforeSend: function(){
				$('.gallery').html('<img class="loading" src="/img/loading.gif">');
			},
			success : function(result){
				if(result.stat == "ok"){
					$('.gallery').html('');
					$title = result.photo.title._content;
					$description = (result.photo.description._content != "") ? result.photo.description._content : "No description...";
					$('.gallery').append(
						'<a href="#" class="btn btn-primary pull-right btn-prev btn-prev-sm hidden-xs" >'+
							'<i class="glyphicon glyphicon-chevron-left"></i>'+
						'</a>'+
						'<a href="#" class="btn btn-primary pull-right btn-prev btn-prev-xs visible-xs" >'+
							'<i class="glyphicon glyphicon-chevron-left"></i> Back to gallery'+
						'</a>'+
						 '<div class="col-xs-12 col-sm-8 img-container">'+
						    '<img style="max-width: 100%" src="https://farm'+result.photo.farm+'.staticflickr.com/'+result.photo.server+'/'+result.photo.id+'_'+result.photo.secret+'.jpg">'+
					     '</div>'+
					     '<div class="col-xs-12 col-sm-4">'+
							'<h3 class="no-pads-top no-margin-top hidden-xs">Image details</h3>'+
							'<hr>'+
							'<h4 style="word-break: break-all;">'+$title+'</h4>'+
							'<span>'+$description+'</span>'+
				    	  '</div>'
				    );
				}
			}
		});
		$.ajaxSettings.headers["X-CSRF-TOKEN"] = $('meta[name="csrf-token"]').attr('content');
	})

	$(document).on('click', '.btn-prev', function(e){
	    e.preventDefault();
		$('.gallery').html('');
		getFlickrImageByCategory(current_category);
	})

})