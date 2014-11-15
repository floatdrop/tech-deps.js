/* global it, afterEach */

var mock = require('mock-fs');
var Deps = require('./index.js');
var assert = require('assert');
var object = require('bem-object');

afterEach(function () {
    mock.restore();
});

it('should read file from fs', function (done) {
    mock({
        fixture: {
            'block__elem.deps.js': 'exports.shouldDeps = "1";'
        }
    });

    var deps = Deps();
    deps.write(object('fixture/block__elem.deps.js'));

    deps.on('data', function (obj) {
        assert.equal(obj.block, 'block');
        assert.equal(obj.tech, 'deps.js');
        assert.equal(obj.expect[0].block, '1');
        assert.equal(obj.expect[0].tech, 'deps.js');
        done();
    });
});
