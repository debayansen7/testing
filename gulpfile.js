'use strict';

/*----------------------------- Dependencies----------------------------------*/
var gulp    = require('gulp'),
    install = require('gulp-install'),
    order   = require('gulp-order'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    jade    = require('gulp-jade'),
    rename  = require('gulp-rename'),
    // copy    = require('gulp-copy'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    watch   = require('gulp-watch')
;

/*----------------------------- Named Tasks ----------------------------------*/


/*------------------------Static Server --------------------------------------*/
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        },
        port: 7000
    });
});

// gulp.task('install', function(){
//     gulp.src(['./bower.json', './package.json'])
//         .pipe(install());
// });

/*------------------------For Templates --------------------------------------*/
//For Templates
gulp.task('templates', function(){
    gulp.src('src/templates/**/index.jade')
        .pipe(jade({pretty: true}))
        // .pipe(gulp.dest('./'));
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());

});

/*------------------------For Styles -----------------------------------------*/
//For min-styles
gulp.task('minstyles', function(){
    gulp.src('src/css/lib/*.css')
        .pipe(order([
            "animate.css",
            "bootstrap.css"
        ]))
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('build/css/'))
        ;
});
//For styles
gulp.task('styles', function(){
    gulp.src('src/scss/**/main.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream())
        ;

    console.log("Style tasks Complete");
});

/*------------------------For Scripts  ---------------------------------------*/
//For min-scripts
gulp.task('minscripts', function(){
    gulp.src('src/js/lib/*.min.js')
        .pipe(order([
            "jquery-2.2.0.min.js",
            "bootstrap.min.js",
            "owl.carousel.min.js"
        ]))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('build/js/'));
});
//For main scripts
gulp.task('scripts', function(){
    gulp.src('src/js/main.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/js/'));
});

/* ------------------------ Watch task ---------------------------------------*/
gulp.task('watch', function(){
    gulp.watch('src/templates/**/*.jade',['templates']);
    gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/scss/**/*.scss',['styles']);
    // gulp.watch("build/index.html").on('change', browserSync.reload);

    console.log("Watch Task completed");
});

/* ----------------------Default task ----------------------------------------*/
// gulp.task('default', ['browser-sync','templates','minscripts','minstyles','scripts','styles','watch']);
gulp.task('default', ['templates','minscripts','minstyles','scripts','styles','watch']);
