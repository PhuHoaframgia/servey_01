const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {

    mix.sass('app.scss')
   .sass('new-style.scss', 'public/user/css/new-style.css')
   .sass('style.scss', 'public/user/css/style.css')
   .sass('socialize-bookmarks.scss', 'public/user/css/socialize-bookmarks.css')
   .sass('home.scss', 'public/user/css/home.css')
   .sass('admin-style-1.scss', 'public/admin/css/admin-style-1.css')
   .sass('admin-pages.scss', 'public/admin/css/admin-pages.css')
   .webpack('app.js')
   .scripts('chart.js', 'public/admin/js/chart.js')
   .scripts('question.js', 'public/user/js/question.js')
   .scripts('function.js', 'public/user/js/function.js')
   .scripts('jquery.bxslider.min.js', 'public/user/js/jquery.bxslider.min.js')
   .scripts('check.min.js', 'public/user/js/check.min.js')
   .scripts('jquery.wizard.js', 'public/user/js/jquery.wizard.js')
   .scripts('component.js', 'public/user/js/component.js')
   .scripts('step-wizard.js', 'public/user/js/step-wizard.js')
   .scripts('survey.js', 'public/admin/js/survey.js')
   .scripts('form-request.js', 'public/admin/js/form-request.js')
   .scripts('admin-script.js', 'public/admin/js/admin-script.js')
   .copy('resources/assets/fonts', 'public/admin/fonts')
   .copy('resources/assets/images', 'public/user/images')
   .copy([
            'public/bower/bootstrap/dist/css/bootstrap.css',
            'public/bower/bootstrap/dist/css/bootstrap.min.css'
         ], 'public/admin/css')
   .copy([
            'public/bower/bootstrap/dist/js/bootstrap.min.js',
            'public/bower/bootstrap/dist/js/bootstrap.js',
            'public/bower/jquery/dist/jquery.js'
         ], 'public/admin/js')
   .copy([
            'public/bower/jquery/dist/jquery.min.js',
            'public/bower/skel/dist/skel.min.js',
            'resources/assets/js/util.js',
            'resources/assets/js/main.js'
         ], 'public/user/js')
   .browserSync({
        proxy: 'http://localhost:8000/',
        proxy: 'http://survey.com/'
    });
});
