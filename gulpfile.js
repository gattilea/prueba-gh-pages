var gulp =           require('gulp'),
    minify =        require('gulp-minify'),
    clean = require('gulp-clean');

var cssnano = require('gulp-cssnano');
var ghPages = require('gulp-gh-pages');

gulp.task('dist', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('clean:dist', function () {
	return gulp.src('dist/**/*')
		.pipe(clean({read: false, force: true}));
});

gulp.task('copy', function() {
    return gulp.src('./src/index.html')
            .pipe(gulp.dest('./dist'))
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['clean:dist', 'copy', 'dist']);
