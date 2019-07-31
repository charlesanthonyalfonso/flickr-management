$(document).ready(function(){
	displayCategories();
	var eventAttached = false;
	var element = null;


	function displayCategories(){
		$.ajax({
			method: 'GET',
			url: '/category',
			success: function(res){
				if( res.length ){
					$('#category-list').html('');
					res.forEach(function(category, i){
						//var html = '<a href="#" class="list-group-item category" data-id="'+category.id+'">'+category.name+'</a>';
						var html = '<span class="list-group-item gallery-category category" data-id="'+category.id+'" data-name="'+category.name+'">'+
	        							'<span class="span-editable">'+category.name+'</span>'+
	        							'<a class="btn btn-xs btn-danger pull-right btn-delete-category hide">'+
	        								'Delete'+
	        							'</a>'+
	    							'</span>'
						$('#category-list').append(html);
					})
				}
			}
		})
	}

	$(document).on('click touchstart', '.list-group-item.category', function(){
		$('.list-group-item').removeClass('active');
		$(this).addClass('active');
	})

	$('#add-category-btn').click(function(){
		$('#add-category-form').submit();
	})

	$('#add-category-form').submit(function(e){
		e.preventDefault();
		var form = $(this);
		$.ajax({
			type: 'POST',
			url: '/category',
			data: form.serialize(),
			success: function(res){
				if(res.success){
					if( $('#category-list .category').length == 0 )
						$('#category-list').html('');
					var html = '<span class="list-group-item gallery-category category" data-id="'+res.category.id+'" data-name="'+res.category.name+'">'+
        							'<span class="span-editable">'+res.category.name+'</span>'+
        							'<a class="btn btn-xs btn-danger pull-right btn-delete-category hide">'+
        								'Delete'+
        							'</a>'+
    							'</span>'
					$('#category-list').append(html);	
					$('#add-category-modal').modal('hide')
				}
				else{
					form.find('.result').html('<div class="alert alert-danger">'+res.errorMsg.name[0]+'</div>')
				}
			}
		})
	})

	$('#add-category-modal').on('hidden.bs.modal', function (e) {
	  	$(this).find('.result').html('');
	  	$(this).find('input').val('');
	})


	$('.edit-categories').on('click touchstart', function(e){
	    e.preventDefault();
	    e.stopPropagation();
		$('.category-controls').toggleClass('hide');
		$('.btn-delete-category').toggleClass('hide');
	    $('.list-group-item').removeClass('category');
	    $('.span-editable').toggleClass('editable-click');
	    $(this).addClass('hide');
	    $('.cancel-edit').removeClass('hide');
	    $('[data-toggle="modal"]').attr('disabled', 'disabled');
	    
	    var mode = 'inline';
	    if($(window).width() < 600)
	    	mode = 'popup';
		$('.span-editable').editable({
			ajaxOptions: {
			    type: 'PUT',
			    dataType: 'json'
			},
	        url: '/category',
	        pk: 1,
	        mode: mode,
	        validate: function(value) {
			    if($.trim(value) == '') {
			        return 'Name is required';
			    }
			},
	        params: function(params) {
	              params.categoryId = $(this).parent('.gallery-category').data('id');
	              params.name  = params.value;
	              return params;
	        },
	        success: function(response, newValue) {
	        	if(!response.success){
	        		return response.errorMsg['name'][0];
	        	} else{
	                /*$(".list-group-item[data-id='"+response.category.id+"']").html(
	                	'<span class="span-editable">'+response.category.name+'</span>'+
						'<a class="btn btn-xs btn-danger pull-right btn-delete-category hide">'+
							'Delete'+
						'</a>'
                    );*/
	            }
	    	}
	    });
	    // $('.span-editable').editable('option', 'enable', true);

	    if(!eventAttached){
			$('.span-editable').on('shown', function(e, editable){
				element = editable.$element.parent('.list-group-item').find('.btn-delete-category');
				element.addClass('hide');
			})

			$('.span-editable').on('hidden', function(e, editable){
				//console.log(editable);
				//editable.$element.parent('.list-group-item').find('.btn-delete-category').removeClass('hide');
				element.removeClass('hide');
			})
			eventAttached = true;
		}
	});



	$('.cancel-edit').on('click touchstart', function(e){
	    e.preventDefault();
	    e.stopPropagation();
		$('.span-editable').removeClass('editable-click');
		$('.btn-delete-category').toggleClass('hide');
		$('.category-controls').toggleClass('hide');
	    $('.span-editable').editable('destroy');
	    $('.list-group-item').addClass('category')
	    $(this).addClass('hide');
	    $('.edit-categories').removeClass('hide');
	    $(this).toggleClass('active');
	    $('[data-toggle="modal"]').removeAttr('disabled');
	})


	$(document).off('click touchstart','.btn-delete-category').on('click touchstart','.btn-delete-category', function(e){
	    e.preventDefault();
	    e.stopPropagation();
		var self = $(this);

		$.ajax({
			type : 'Delete',
			url : '/category',
			data : { id : self.parents('.gallery-category').data('id') },
			success : function(response){
				if(response.success){
					self.parents('.gallery-category').fadeOut(function(){
						self.parents('.gallery-category').remove();
						if( $('#category-list .gallery-category').length == 0 ){
							$('#category-list').html('<div class="alert alert-warning">No categories</div>');
							$('.cancel-edit').addClass('hide');
	    					$('.edit-categories').removeClass('hide');
	    					$('[data-toggle="modal"]').removeAttr('disabled');
						}
					});
				}
			}
		})
	});
})
