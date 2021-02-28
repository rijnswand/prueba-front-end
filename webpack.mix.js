const mix = require('laravel-mix');

mix.disableSuccessNotifications();
mix.setPublicPath('build');

mix.js('src/js/main.js', 'js')
    .sass('src/scss/main.scss', 'css')
    .options({
        processCssUrls: false,
    })
    .version();

