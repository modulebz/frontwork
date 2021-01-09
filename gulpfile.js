gulp = require('gulp');
babel = require('gulp-babel');
webpack = require('webpack-stream');
stylus = require('gulp-stylus');
changed = require('gulp-changed');

gulp.task('babel', function() {
        return gulp.src('src/**/*')
            .pipe(changed('dist/',{extension:'.js'}))
            .pipe(babel())
            .on('error', console.error.bind(console))
            .pipe(gulp.dest('dist/'))
    }
);


gulp.task('stylus_example', function(){
    return gulp.src('stylus/example.styl')
        .on('error', console.error.bind(console))
        .pipe(stylus({
            paths:[__dirname + '/node_modules/',__dirname],
            compress:true,
            'include css': true
        }))
        .pipe(gulp.dest('examples'))
});


gulp.task('stylus', function(){
    return gulp.src('stylus/style.styl')
        .on('error', console.error.bind(console))
        .pipe(stylus({
            paths:[__dirname + '/node_modules/',__dirname],
            compress:true,
            'include css': true
        }))
        .pipe(gulp.dest('examples'))
});

/*
gulp.task('stylus_dist', function(){
    return gulp.src('stylus/style.styl')
        .on('error', console.error.bind(console))
        .pipe(stylus({compress:true, 'include css': true}))
        .pipe(gulp.dest('dist'))
});
/**/


gulp.task('webpack', function(){
    return gulp.src('dist/example.js')
        .pipe(webpack({
            mode:'production',
            node: {
                fs: 'empty'
            },
            //"browser": { "fs": false, "path": false, "os": false},
            output: {
                filename: 'example.js',
                publicPath: 'http://localhost/npm/frontwork/examples/',
                //publicPath: 'examples',
            }
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('examples'));
});

gulp.task('react', gulp.series('babel','webpack'));
gulp.task('dist', gulp.series('babel'));
//gulp.task('dist', gulp.series('babel','stylus_dist'));
//gulp.task('react', gulp.series('babel','webpack'));


gulp.task('watch', function(){
    gulp.watch('stylus/**.styl', gulp.series('stylus','stylus_example'))
});
