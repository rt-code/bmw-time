var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	plumber = require('gulp-plumber'),
	minifyCss = require('gulp-minify-css'), // min css
	rename = require("gulp-rename"),
	spritesmith = require('gulp.spritesmith');
	svgstore = require('gulp-svgstore');

	// FTP
	var gutil = require('gulp-util');
	var ftp = require('gulp-ftp');	

// svg sprite
gulp.task('svg', function () {
    return gulp
        .src('img/icons/svgsprite/*.svg', { base: 'src/svg' })
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore())
        .pipe(gulp.dest('img'));
});

//serv
gulp.task('connect', function() {
  connect.server({
    root: '../bmw',
    livereload: true
  });
});

//sprite
gulp.task('sprite', function () {
  var spriteData = gulp.src('img/icons/tosprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss'
  }));
  return spriteData.pipe(gulp.dest('css/'));
});

//styles
gulp.task('css', function() {
 	gulp.src('sass/*.scss') // что меняем
 	.pipe(plumber())
 	.pipe(sass()) // sass
 	.pipe(autoprefixer({ browsers: ['last 16 versions', 'safari 5', 'ie 11', 'opera 12.1', 'ios 6', 'android 4'] })) // autoprefixer
 	.pipe(minifyCss()) // min css
 	.pipe(plumber.stop())
 	.pipe(gulp.dest('css/')) // папка для выхода

 	.pipe(connect.reload());
});

//html
gulp.task('html', function() {
	gulp.src('../bmw/*.html') // что меняем
 	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('sass/*.scss', ['css'])
	gulp.watch('../bmw/*.html', ['html'])
});

gulp.task('default', ['css','html','watch']);
