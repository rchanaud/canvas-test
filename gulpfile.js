var gulp    = require('gulp');
var babel   = require('gulp-babel');
var plumber = require('gulp-plumber');

gulp.task('js', function () {
    return gulp.src('./src/js/main.js')
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function(){
    gulp.watch('./src/js/**/*', ['js']).on('change', function(file){
        console.info('JS recompiled because '+file.path+' has changed.');
    });
});
