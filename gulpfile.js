var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js',  'assets/js/json.js', 'assets/js/ion.rangeSlider.js', 'assets/js/ion.js', 'assets/js/main.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('dist/js/'));
});

gulp.task('style', function(){
	gulp.src(['node_modules/materialize-css/dist/css/materialize.css', 'assets/sass/main.scss', 'assets/css/ion.rangeSlider.css', 'assets/css/ion.rangeSlider.skinFlat.css', 'assets/css/main.css'])
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('webserver', function(){
	gulp.src('../airbnb/')
	.pipe(webserver({
		fallback:'index1.html',
		livereload: true,
		directoryListing:false,
		open:true,
		port: 8080
	}));
});

gulp.task('watch', function() {
    gulp.watch('assets/sass/*.scss', ['style']);
});

gulp.task('default', ['script', 'style', 'webserver', 'watch']);