var ghpages = require('gh-pages');
 
ghpages.publish(
    'dist', {
    dest: 'docs'
    },
    err => {}
);