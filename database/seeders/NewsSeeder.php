<?php
 
namespace Database\Seeders;
 
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\News;
 
class NewsSeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run(): void
    {
        for ($i=0; $i < 19; $i++) { 
            // code...
            DB::table('news')->insert([
                'title' => fake()->title(),
                'content' => fake()->paragraph(),
                'category' => fake()->sentence(),
                'author' => fake()->name(),
                'views' => fake()->randomDigit(),
                'img' => fake()->name(),
            ]);
        }
    }
}