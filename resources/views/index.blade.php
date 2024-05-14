<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}"> <!-- CSRFトークンの挿入-->

        <title>S-Learning 2024</title>
        
        @viteReactRefresh <!-- LaravelにReactを組み込むために必要-->
        @vite(['resources/js/app.js']) <!-- jsファイルの読み込み-->
    </head>

    <body>
        <div id="app"></div> <!-- Reactのコンテナ -->
    </body>
    
</html>
