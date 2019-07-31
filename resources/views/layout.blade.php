<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Flickr Management</title>

	<link href="/bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="/bootstrap/css/bootstrap-editable.css" rel="stylesheet">
    <link href="/css/offcanvas.css" rel="stylesheet">
	<link href="/css/style.css" rel="stylesheet">
	<link href="/css/responsive.css" rel="stylesheet">
</head>
<body>
    <div class="container">
    	<div id="header">
    		<h1>
    			<span>Flickr Management</span>
				<button type="button" class="btn btn-primary btn-xs pull-right visible-xs" data-toggle="offcanvas">Toggle nav</button>
    		</h1>
    	</div>
    	<hr>
      	<div class="row row-offcanvas row-offcanvas-left">
	        <div class="col-xs-6 col-sm-4 sidebar-offcanvas" id="sidebar">
	        	<div>
		        	<button type="button" class="btn btn-success" data-toggle="modal" data-target="#add-category-modal">
					  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					</button>
					<button type="button" class="btn btn-primary edit-categories">
					  <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
					</button>
					<button type="button" class="btn btn-warning cancel-edit hide">
					  <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
					</button>
				</div>
	        	<div id="category-list" class="list-group">
	        		<div class="alert alert-warning">No categories</div>
	        	</div>
	        </div>
	        <div class="col-xs-12 col-sm-8 main-content">
	          	@yield('content')
	        </div>
      	</div>
    </div>

	<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
	<script src="/bootstrap/js/bootstrap.js"></script>
	<script src="/bootstrap/js/bootstrap-editable.js"></script>
	<script src="/js/common.js"></script>

	@yield('scripts')
</body>
</html>

