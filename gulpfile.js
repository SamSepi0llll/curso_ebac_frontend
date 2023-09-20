//importação do Gulp/Gulp plugins
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const source_maps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const obfuscate = require('gulp-obfuscate')
const uglify = require('gulp-uglify')

//compilar arquivos .scss
function compilaSASS(){
    return gulp.src('./source/styles/*.scss')
    .pipe(source_maps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(source_maps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

//Compressão de imagens
function imageCompress(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

//minificar JS
function minJS(){
    return gulp.src('./source/scripts/*.js')
    .pipe(obfuscate())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSASS))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(imageCompress))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(minJS))
}
