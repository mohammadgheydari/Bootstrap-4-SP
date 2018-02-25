var gulp = require('gulp');
//var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browsersync = require('browser-sync').create();
// var minifyCSS = require('gulp-csso');
// var concat = require('gulp-concat');
// var sourcemaps = require('gulp-sourcemaps');

// gulp.task('html', function(){
//   return gulp.src('client/templates/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('build/html'))
// });
gulp.task('sass', function(){
    return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    // .pipe(minifyCSS())
    .pipe(gulp.dest("src/css"))
    .pipe(browsersync.stream());
});

gulp.task('js', function(){
    return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js', 
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/wowjs/dist/wow.min.js',
    'node_modules/video.js/dist/video.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js'
])
    // .pipe(sourcemaps.init())
    // .pipe(concat('app.min.js'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/js"))
    .pipe(browsersync.stream());
});

gulp.task('serve',['sass'], function(){
    browsersync.init({
        server : "./src"
    })    
    gulp.watch(['src/scss/*.scss'],['sass']);
    gulp.watch("src/*.html").on('change',browsersync.reload);
});

gulp.task('default',[ 'sass', 'js', 'serve' ]);
