"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

sass.compiler = require("node-sass");

// Arquivos HTML e CSS
const files = [
  "src/*.html",
  "src/scss/*.scss"
];

// Opções do browserSync
const options = {
  server: "./src"
};

// Pasta CSS
const cssPath = "src/css/";

// Compilar os arquivos .scss
function compilaSass() {
  return gulp
    .src(files[1])
    .pipe(sass({ outputStyle: 'compressed' }).on("error", sass.logError))
    .pipe(gulp.dest(cssPath));
}

// Comprimir imagens
function imageMin() {
  return gulp
    .src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/img'))
}

// Iniciar servidor com browserSync
function server() {
  browserSync.init(files, options);

  gulp.watch(files[1], compilaSass);
  gulp.watch(files).on("change", browserSync.reload);
}

gulp.task("sass", compilaSass);
gulp.task("image", imageMin);
gulp.task("default", server);
