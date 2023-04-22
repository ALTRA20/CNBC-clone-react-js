<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Sport', 'description' => 'News related to sports.'],
            ['name' => 'Technology', 'description' => 'News related to technology and gadgets.'],
            ['name' => 'Politics', 'description' => 'News related to politics and government.'],
            ['name' => 'Business', 'description' => 'News related to business and finance.'],
            ['name' => 'Entertainment', 'description' => 'News related to movies, music, and celebrities.'],
            ['name' => 'Science', 'description' => 'News related to science and discoveries.'],
            ['name' => 'Health', 'description' => 'News related to health and wellness.'],
            ['name' => 'Education', 'description' => 'News related to education and schools.'],
            ['name' => 'Food', 'description' => 'News related to food and recipes.'],
            ['name' => 'Travel', 'description' => 'News related to travel and tourism.'],
            // tambahkan kategori lainnya di sini
        ];
        DB::table('categories')->insert($categories);
    }
}
