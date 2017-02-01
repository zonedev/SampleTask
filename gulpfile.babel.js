import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const BUILD_DIRECTORY = './build';

gulp.task('default', ['js', 'html', 'sass']);

gulp.task('sass', ()=>{
	return gulp.src( './src/scss/main.scss' )
				.pipe(sass().on('error', sass.logError))
				.pipe(autoprefixer())
				.pipe(gulp.dest(BUILD_DIRECTORY));
});

gulp.task('html', ()=>{
	return gulp.src( './src/html/index.html' )
				.pipe(gulp.dest(`${BUILD_DIRECTORY}`));
});

gulp.task('js', ()=>{
	return browserify('./src/js/main.jsx', {debug : true})
			.transform(babelify, {presets: ["es2015", "react"]})
			.bundle()
			.pipe(source(`${BUILD_DIRECTORY}/bundle.js`))
			.pipe(gulp.dest('.'));
});