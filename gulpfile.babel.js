import gulp from "gulp"
import glp from "gulp-load-plugins"

const $ = glp()

gulp.task("script", ()=>{
  gulp.src("js/*.js")
  	.pipe($.babel())
	.pipe(gulp.dest("docs/"));
});
gulp.task("html", ()=>{
  gulp.src("haml/*.haml")
  	.pipe($.haml())
	.pipe(gulp.dest("docs/"));
});
gulp.task("css", ()=>{
  gulp.src("sass/*.sass")
  	.pipe($.sass())
	.pipe(gulp.dest("docs/"));
});
