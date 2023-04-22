<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Categories;

class CategoriesController extends Controller
{
    public function index(Request $request)
    {
        // get parameter category from url
       $categoryParams = $request->category;

       // get id category from tabel category with $categoryParams
       $category_id = Categories::where('name', '=', $categoryParams)->value('id');

       // get news based on category_id
       $news = News::where('category_id', '=', $category_id)->get();

       // dd($category_id);
       $categoriesDb = Categories::all();
        $dataNews=[];
            $index=0;
        foreach ($categoriesDb as $category) {
            $newsByCategory = News::where('category_id', '=', $category->id)->get();
            // Lakukan sesuatu dengan $category
            // Contoh: mencetak nama kategori
            // dd($newsByCategory);
            $dataNews[$category->name]= (object)[
                'data' => $dataNews
            ];

        }

        $popular = News::where('views', '>=', 1000)->get();
        // dd($popular);
        $recently = News::orderBy('created_at', 'desc')->latest()->get();

       return Inertia::render('Category', [
            'news' => $news,
            'newsByCategory' => $dataNews,
            'popularNews' => $popular,
            'recentlyNews' => $recently,
            'categories' => $categoriesDb
       ]);
    }
}
