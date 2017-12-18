import gulp from "gulp"
import GulpLoadPlugins from 'gulp-load-plugins';
import VinylBuffer from 'vinyl-buffer';
import PrettyHRTime from 'pretty-hrtime';
import BrowserSync from 'browser-sync';
import Del from 'del';
import RunSequence from 'run-sequence';

const $ = GulpLoadPlugins();

// Common config
const config = {
  dir: {
    root:   './',
    dist:   './docs/',
    assets: './src/assets/',
    js:     './js/',
    stylus: './css/',
    assetsCss: './src/assets/resource/css',
    assetsJs: './js/'
  },
  isRelease:  true
};

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


// JavaScript ( ES6, React JSX )
gulp.task( 'js', $.watchify( ( watchify ) => {
  const time = process.hrtime();

  console.log(config.dir.js + 'script.js')
  return gulp.src( [ config.dir.js + 'script.js' ] )
    .pipe( $.plumber() )
    .pipe( watchify( {
      watch: false,
      basedir:   './',
      debug:     true,
      transform: [ 'babelify' ]
    } ) )
    .pipe( VinylBuffer() )
    .pipe( $.sourcemaps.init( { loadMaps: true } ) )
    // .pipe( $.if( config.isRelease, $.uglify() ) )
    .pipe( $.rename( 'script.js' ) )
    .pipe( $.sourcemaps.write( './' ) )
    .pipe( gulp.dest( config.dir.dist ), gulp.dest( config.dir.assetsJs ) )
    .on( 'end', () => {
      const taskTime = PrettyHRTime( process.hrtime( time ) );
      $.util.log( 'Bundled', $.util.colors.green( 'script.js' ), 'in', $.util.colors.magenta( taskTime ) );
    } );
} ) );