/* global it, afterEach */

var mock = require('mock-fs');
var Deps = require('./index.js');
var assert = require('assert');

afterEach(function () {
    mock.restore();
});

it('should read file from fs', function (done) {
    mock({
        fixture: {
            block: {
                element: {
                    'block__elem.deps.js': 'exports.shouldDeps = 1;'
                }
            }
        }
    });

    var deps = Deps();
    deps.write({
        path: 'fixture/block/element/block__elem.deps.js',
        tech: 'deps.js'
    });

    deps.on('data', function (obj) {
        assert.equal(obj.expect, 1);
        done();
    });
});
