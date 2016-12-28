var gulp = require("gulp")
var sass = require("gulp-sass")
var autoprefixer = require("gulp-autoprefixer")
var shorthand = require("gulp-shorthand")
var minify = require("gulp-cssnano")

gulp.task("build-styles", function() {
    
	return gulp.src("./resources/styles/index.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
			cascade: false
		}))
		.pipe(shorthand())
		.pipe(minify())
		.pipe(gulp.dest("./.tmp/statics/styles"))

})

gulp.task("watch-styles", function() {

    gulp.watch("resources/styles/**/*.scss", ["build-styles"])

})

gulp.task("styles", ["build-styles", "watch-styles"])

gulp.task("copy-images", function() {

	gulp.src("./resources/images/**/*")
		.pipe(gulp.dest('./.tmp/statics/images'))

})

gulp.task("watch-images", function() {

	gulp.watch("resources/images/**/*", ["copy-images"])

})

gulp.task("images", ["copy-images", "watch-images"])