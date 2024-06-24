import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/index.jsx', //inputファイルとして「index.jsx」を指定
            ],
            refresh: true,
        }),
        react(),
    ]
});
