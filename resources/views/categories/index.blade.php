@extends('layout')

@section('content')
	<div class="gallery">
		<div class="alert alert-warning">Please select a category</div>
	</div>

	<div class="modal fade" id="add-category-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  	<div class="modal-dialog" role="document">
		    <div class="modal-content">
		      	<div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="myModalLabel">Add Category</h4>
		      	</div>
		      	<div class="modal-body">
		        	<form id="add-category-form">
		        		<div class="input-group">
						  	<input type="text" class="form-control" placeholder="Category Name" name="name">
						</div>
						<div class="result"></div>
		        	</form>
		      	</div>
		      	<div class="modal-footer">
			        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" class="btn btn-primary" id="add-category-btn">Add</button>
		      	</div>
		    </div>
	  	</div>
	</div>
@endsection

@section('scripts')
	<script>
		window.flickr_key = '<?= env('FLICKR_KEY') ?>';
	</script>
	<script type="text/javascript" src="/js/categories.js"></script>
	<script type="text/javascript" src="/js/gallery.js"></script>
@endsection