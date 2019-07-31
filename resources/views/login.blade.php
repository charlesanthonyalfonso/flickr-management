<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Flickr Management</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link href="/css/login.css" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="login-form">
                        <h2 class="text-center">Flickr Management</h2>
                        <form id="login" method="post" action="/login">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username" name="username" required="required">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" name="password" required="required">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Log in</button>
                            </div>     
                            <div class="login-result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="/js/common.js"></script>
        <script src="/js/login.js"></script>
    </body>
</html>