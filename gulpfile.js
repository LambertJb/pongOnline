const gulp = require('gulp'),
  ts = require('gulp-typescript'),
  plumber = require('gulp-plumber');


function scripts () {
  return gulp.src('server/**/*.ts')
    .pipe(ts({
      skipLibCheck: true
    }))
    .pipe(plumber())
    .pipe(gulp.dest('./server/dist'));
}

function watch (){
    gulp.watch(['./server/**/*.ts'], scripts);
}

function build() {
  return scripts();
}


exports.tsc = scripts;
exports.watch = watch;
exports.default = build;


