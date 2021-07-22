const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

//=============uglify=============
function ugjs() {
    return src('js/*.js').pipe(uglify()).pipe(rename({
        extname: '.min.js'
    })).pipe(dest('dist/js'))
}
exports.ug = ugjs

//=============css壓縮=============
function mini_css() {
    return src('css/style.css')
    .pipe(cleanCSS({compatibility: 'ie10'})) // 
    .pipe(dest('dist/css'))
}
exports.css = mini_css; 

//=============gulp sass=============
const sass = require('gulp-sass')(require('sass'));
function sassStyle() {
    return src('./sass/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('dist/css'));
} 
exports.style = sassStyle; 

//=================gulp-sourceMap=======================================
const sourcemaps = require('gulp-sourcemaps');

function sourceMap() {
    return src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('css'));
}
exports.sourceMap = sourceMap;