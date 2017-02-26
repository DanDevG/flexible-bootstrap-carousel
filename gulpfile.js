var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var runSequence = require("run-sequence");

gulp.task("uglify", function() {
	return gulp.src("flexible-bootstrap-carousel.js")
		.pipe(uglify())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(function(file) {
			return file.base;
		}));
});

gulp.task("copy-css", function() {
	return gulp.src("flexible-bootstrap-carousel.css")
		.pipe(gulp.dest("examples/css"));
});

gulp.task("copy-js", function() {
	return gulp.src("flexible-bootstrap-carousel.min.js")
		.pipe(gulp.dest("examples/js"));
});

gulp.task("watch", function() {
	gulp.watch("*.js", ["uglify"]);
});

gulp.task("build", function(callback) {
	runSequence("uglify",
		"copy-css",
		"copy-js",
		callback
	);
});