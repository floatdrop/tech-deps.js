var through2 = require('through2');
var rod = require('require-or-die');

module.exports = function (opts) {
    return through2.obj(function (obj, enc, cb) {
        if (obj.tech !== 'deps.js') { return cb(null, obj); }

        rod(obj.path, opts, function (err, deps) {
            if (err) { return cb(err); }

            obj.require = deps.mustDeps || deps.require;
            obj.expect = deps.shouldDeps || deps.expect;

            cb(null, obj);
        });
    });
};
