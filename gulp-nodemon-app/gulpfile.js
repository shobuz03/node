'use strict';
let gulp=require('gulp'),
nodemon=require('gulp-nodemon');

gulp.task('default',()=>nodemon({
    exec:'node --inspect',
    script:'index.js',
    ext:'js',    
    env:{
        PORT:8000
    },
    ignore:['./node_modules/**']
}).on('restart',()=>console.log('Restarting...')));