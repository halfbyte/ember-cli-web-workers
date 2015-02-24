/* jshint node: true */
'use strict';

var removeFile = require('broccoli-file-remover');

module.exports = {
    name: 'ember-cli-web-workers',

    config : function (environment) {

        var ENV = {};

        if ( environment === 'development' ) {
            ENV.contentSecurityPolicy = {
                'default-src': "'self'",
                'script-src': "'self'",
                'font-src': "'self'",
                'connect-src': "'self'",
                'img-src': "'self'",
                'style-src': "'self'",
                'media-src': "'self'"
            }
        }

        return ENV;
    },

    treeForApp: function(name){
        return removeFile(name, {
            path : '/workers'
        });
    }
};
