<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AppController;

Route::get('{any}', [AppController::class, 'app'])->where('any', '.*'); //どのURLにアクセスしても「index.blade.php」がレンダリングされるようにルーティングを設定
