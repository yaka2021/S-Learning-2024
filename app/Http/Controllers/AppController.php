<?php

namespace App\Http\Controllers;

class AppController extends Controller
{
    public function app(){ //ページ「index.blade.php」を返すメソッド「index」を定義
        return view("app");
    }
}
