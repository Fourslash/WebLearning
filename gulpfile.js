const gulp = require('gulp');
const apidoc = require('gulp-apidoc');
 
gulp.task('doc', (done) => {
    apidoc({
        src: 'app/',
        dest: 'docs/'
    }, done);
});