import gulp from "gulp"
import browserify from "browserify"

gulp.task("default", ()=>{
  browserify({
    entries: ["./js/"]
  })
    .bundle()
    .pipe(source("script.js"))
    .pipe(gulp.dest("./docs"));
});
