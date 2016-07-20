var gulp = require("gulp");
var sass = require("gulp-sass");
var autoPrefixer = require("gulp-autoprefixer")

gulp.task("default", function() {
  gulp.watch("sass/**/*.sass", ["styles"])
})

gulp.task("styles", function() {
  gulp.src("sass/**/*.sass")
      .pipe(sass().on("error", sass.logError))
      .pipe(autoPrefixer({
        browsers: ["last 2 versions"]
      }))
      .pipe(gulp.dest("./css"))
})
