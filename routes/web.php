<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', 'LoginController@loginView')->name('login');
Route::get('/logout', 'LoginController@logout')->name('logout');
Route::post('/login', 'LoginController@login');


Route::group(['middleware' => 'auth'], function()
{
	Route::get('/', 'CategoryController@index');
	Route::get('/category', 'CategoryController@getCategories');
	Route::post('/category', 'CategoryController@addCategory');
	Route::put('/category', 'CategoryController@updateCategory');
	Route::delete('/category', 'CategoryController@deleteCategory');
});