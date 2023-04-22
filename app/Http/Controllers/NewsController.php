<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Categories;


class NewsController extends Controller
{
    //
    public function index()
    {
        $categoriesDb = Categories::all();
        $categories=[];
            $index=0;
        foreach ($categoriesDb as $category) {
            $newsByCategory = News::where('category_id', '=', $category->id)->get();
            // Lakukan sesuatu dengan $category
            // Contoh: mencetak nama kategori
            // dd($newsByCategory);
            $categories[$category->name]= (object)[
                'data' => $newsByCategory
            ];

        }


        $news = News::all();
        $popular = News::where('views', '>=', 1000)->get();
        // dd($popular);
        $recently = News::orderBy('created_at', 'desc')->latest()->get();
        $dataWillTakes = 30;

        

        return Inertia::render('Homepage', [
            'title' => 'Homepage',
            'news' => $news,
            'popularNews' => $popular,
            'recentlyNews' => $recently,
            'categories' => $categoriesDb,
            'newsByCategory' => $categories
        ]);
    }



    public function detail(Request $request)
    {
        $newsKey = request()->input('code');
        $detailNews = News::where('title', 'like', '%'.$newsKey.'%')->get()->toArray();
        $popular = News::where('views', '>=', 1000)->get();
        $detailNewsCategory = $detailNews[0]['category_id'];
        $detailNewsId = $detailNews[0]['id'];
        $newsRelated = News::where('category_id', 'like', $detailNewsCategory)->whereNotIn('id', [$detailNewsId])->get()->toArray();

        
        $categoriesDb = Categories::all();
        $categories=[];
        foreach ($categoriesDb as $category) {
            $newsByCategory = News::where('category_id', '=', $category->id)->get();
            $categories[$category->name]= (object)[
                'data' => $newsByCategory
            ];

        }

        // dd($technologyCategoryNews);
        return Inertia::render('DetailNews', [
            'detailNews' => $detailNews,
            'popularNews' => $popular,
            'newsRelated' => $newsRelated,
            'categories' => $categoriesDb,
            'newsByCategory' => $categories
        ]);
    }

    public function search(Request $request)
    {        
        $newsKey = request()->input('code');
        $newsDetail = News::where('title', 'like', '%'.$newsKey.'%')
                            ->orWhere('content', 'like', '%'.$newsKey.'%')
                            ->orWhere('category', 'like', '%'.$newsKey.'%')
                            ->orWhere('author', 'like', '%'.$newsKey.'%')
                            ->orWhere('img', 'like', '%'.$newsKey.'%')
                            ->get();
    }
}
