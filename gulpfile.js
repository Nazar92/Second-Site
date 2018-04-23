var 
  gulp=require("gulp"),
  sync=require("browser-sync").create(),
  del=require("del"),
  plugins=require("gulp-load-plugins")({
    scope:["devDependencies"]
  });
  var IS_DEV = true;

gulp.task("html", function () {
  return gulp.src("src/views/*.html")
    .pipe(plugins.rigger())
    .pipe(plugins.plumber())
    .pipe(plugins.htmlExtend())
    .pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
  return gulp.src("src/script/*.js")
    .pipe(plugins.plumber())
    .pipe(plugins.if(IS_DEV,plugins.sourcemaps.init()))
    .pipe(plugins.concat("app.min.js"))
    .pipe(plugins.uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("copy", function () {
  return gulp.src ([
    "src/madia/*.png"
  ])
    .pipe(gulp.dest("dist/madia"));
});


gulp.task("styles:boots", function () {
  return gulp.src ([
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]) 
    .pipe(plugins.concat("boots.min.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("All:js", function() {
  return gulp.src([
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/knockout/build/output/knockout-latest.js",
    "node_modules/slideout/dist/slideout.js",
    "node_modules/jquery-validation/dist/jquery.validate.min.js",
    "node_modules/slick-carousel/slick/slick.min.js"
  ])
    .pipe(plugins.concat("ALLjs.min.js"))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("fonts:boots",function () {
  return gulp.src([
    "node_modules/bootstrap/dist/fonts/*",
    "node_modules/slick-carousel/slick/fonts/**/*"
  ])
    .pipe(gulp.dest("dist/fonts"));
});

gulp.task("styles:app",function () {
  return gulp.src([
    "src/style/app.less",
    "node_modules/slick-carousel/slick/slick-theme.less",
    "node_modules/slick-carousel/slick/slick.less"
  ])
    .pipe(plugins.rigger())
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(plugins.rename({suffix: ".min"}))
    .pipe(gulp.dest("dist/css"))
    .pipe(sync.stream());
});

gulp.task("clean", function (cb) {
    del.sync("dist/");
    cb();
});
gulp.task("build", ["clean"], function () {
  gulp.start(["html", "styles:app", "styles:boots", "fonts:boots", "js", "All:js", "copy"]);
});


gulp.task("watch", ["build"], function () {
  sync.init({
     server: "dist"
  });

  gulp.watch("src/style/**/*.less", ["styles:app"]);
  // gulp.watch("dist/css/app.min.css").on("change", sync.reload);

  gulp.watch("src/script/**/*.js", ["js"]);
  gulp.watch("dist/js/*.js").on("change", sync.reload);

  gulp.watch("src/views/**/*.html", ["html"]);
  gulp.watch("dist/*.html").on("change", sync.reload);
});
gulp.task("default", ["watch"]);
