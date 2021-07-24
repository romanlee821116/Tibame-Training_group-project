const {
    src, dest, series, parallel, watch  //使用方法，src控制檔案路徑會打包到dest
} = require('gulp');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

//=================uglify===============================================
function ugjs() {
    return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('src/js/minify/')) 
}
exports.ug = ugjs

//=================css壓縮===============================================
function minicss() {
    return src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie10'})) // 
    .pipe(dest('dist/css'))
}
exports.css = minicss; 

// //=================拷貝檔案===============================================
// function copy(){
//     return src('scss/*.css') //打包所有檔案
//     .pipe(dest('css/all'))
// }
// exports.move = copy;

// //=================gulp sass=============================================
// const sass = require('gulp-sass')(require('sass'));
// function sassStyle() {
//     return src('scss/*.scss')
//         .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(dest('dist/css'));
// } 
// exports.style = sassStyle;

// //=================gulp-sourceMap=======================================
// const sourcemaps = require('gulp-sourcemaps');

// function sourceMap() {
//     return src('scss/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(dest('css'));
// }
// exports.sourceMap = sourceMap;

// //=================gulp-include=========================================
// const fileinclude = require('gulp-file-include');
// exports.html =  function includeHTML() {
//     return src('*.html')
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file'
//         }))
//         .pipe(dest('dist'));
// }

// //=================gulp-watch===========================================


// //=================gulp - sync 同步瀏覽器================================
// const browserSync = require('browser-sync');
// const reload = browserSync.reload;

// function browser(done) {
//     browserSync.init({
//         server: {
//             baseDir: "./dist",
//             index: "index.html"
//         },
//         port: 3000
//     });
//     watch(['scss/*.scss' ] , sassStyle).on('change', reload); 
//     watch(['*.html'] , html).on('change', reload); 
//     watch(['js/*.js'], ugjs).on('change', reload);
//     done();
// }
// exports.bsync = browser;