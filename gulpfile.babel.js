'use strict';
import gulp from 'gulp';
import gulpPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';

const plugins = gulpPlugins();
const tsProject = plugins.typescript.createProject('tsconfig.json');

const foldersToClean = [
  './build/**'
];

const tsFolders = ['./src/**/*.ts', './test/**/*.ts'];

/*
  Tasks
*/

gulp.task('compileTs', () => {
  return gulp.src(tsFolders, {base: '.'})
    .pipe(plugins.sourcemaps.init())
    .pipe(tsProject())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./build'));
});

gulp.task('tsLint', () => {
  return gulp.src(tsFolders)
    .pipe(plugins.tslint({
      formatter: 'verbose'
    }))
    .pipe(plugins.tslint.report({
        emitError: false
    }));
});

gulp.task('clean', () => {
  return del(foldersToClean);
});

gulp.task('copyAssets', () => {
  return gulp.src([
      './src/**/*.*',
      '!./src/**/*.ts'
    ], {base: '.'})
    .pipe(gulp.dest('./build'))
});

gulp.task('build', cb => {
  runSequence(
    'clean',
    'tsLint',
    'compileTs',
    'copyAssets',
    cb
  );
});

gulp.task('startServer', () => {
  let config = require('./build/src/config/config.js');
  process.env.PORT = process.env.PORT || config.port;
  const server = plugins.nodemon({
    ext: 'ts js json',
    script: 'build/src/app.js',
    watch: ['src/*', 'test/*'],
    tasks: ['build']
  });
  server
    .on('log', onServerLog)
    .on('start', () => {
      //runSequence(['openBrowser']);
    });
});

gulp.task('openBrowser', function(){
  gulp.src(__filename)
  .pipe(plugins.open({uri: 'http://localhost:' + process.env.PORT }));
});

gulp.task('serve', cb => {
  runSequence(
    'build',
    'startServer',
    cb
  );
});

gulp.task('default', ['serve'], () => {
});

// Helpers
function onServerLog(log) {
  console.log(plugins.util.colors.white('[') +
    plugins.util.colors.yellow('nodemon') +
    plugins.util.colors.white('] ') +
    log.message
  );
}