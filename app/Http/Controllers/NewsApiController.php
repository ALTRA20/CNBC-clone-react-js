<?php

namespace App\Http\Controllers;

use App\Models\news;
use Illuminate\Http\Request;

class NewsApiController extends Controller
{
    public function index()
    {
        $data = news::all();

        return response()->json($data, 200);
    }

    public function show($id)
    {
        $data = news::findOrFail($id);

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = news::create($request->all());

        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    {
        $data = news::findOrFail($id);
        $data->update($request->all());

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        news::findOrFail($id)->delete();

        return response()->json('Deleted Successfully', 200);
    }

    public function popular($limit)
    {
        $minimalViews=1000;
        if ($limit) {
            return $popular = News::where('views', '>=', $minimalViews)->take($limit)->get();
        }else{
           return $popular = News::where('views', '>=', $minimalViews)->get();
        }
    }
}
