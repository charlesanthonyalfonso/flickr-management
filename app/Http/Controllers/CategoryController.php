<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Validator;

class CategoryController extends Controller
{
    public function index(){
    	return view('categories/index');
    }

    public function getCategories(){
    	return Category::orderBy('created_at', 'asc')->get();
    }

    public function addCategory(Request $request){
    	$validator = Validator::make($request->all(), [
            'name' => 'required|unique:categories'
        ]);

    	if ($validator->fails()) {
            return [
            	'success'=>false, 
            	'errorMsg' => $validator->messages()
            ];
        } else {
	    	$category = Category::create(['name' => $request->name]);
	    	return [
			    'success' => true,
			    'category' => $category
			];
        }
    }

    public function updateCategory(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:categories',
        ]);


        if ($validator->fails()) {
            return [
                'success'=>false, 
                'errorMsg' => $validator->messages()
            ];
        } else {
            $category = Category::find($request->categoryId);
            $category->name = $request->value;
            $category->save();

            return [
                'success' => true,
                'category' => $category
            ];
        }
    }

    public function deleteCategory(Request $request){
        $category = Category::find($request->id);
        return ($category->delete())?['success'=>true]:['success'=>false];
    }
}
