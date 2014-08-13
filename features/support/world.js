var extend = require('extend')
var underscore = require('underscore')

function exportme() {

    this.World = function (callback) {

        world = this;

        this.extend = function() {
            return extend.apply(world, arguments)
        }

        // http://underscorejs.org/
        extend(true, this, underscore);

        callback();
    }
    
}

module.exports = exportme;
