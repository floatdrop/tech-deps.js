var through2 = require('through2');
var rod = require('require-or-die');
var normalize = require('deps-normalize');
var object = require('bem-object');

function norm(self, deps) {
    if (deps === undefined) { return []; }

    if (!Array.isArray(deps)) { deps = [deps]; }

    return normalize(deps.map(function (d) {
        if (typeof d === 'string') {
            if (d.indexOf('.') === -1) {
                d += '.' + self.tech;
            }
            d = object(d);
        }
        return self.copy(d);
    }));
}

module.exports = function (opts) {
    return through2.obj(function (obj, enc, cb) {
        if (obj.tech !== 'deps.js') { return cb(null, obj); }

        rod(obj.path, opts, function (err, deps) {
            if (err) { return cb(err); }

            obj.require = norm(obj, deps.mustDeps || deps.require);
            obj.expect = norm(obj, deps.shouldDeps || deps.expect);

            cb(null, obj);
        });
    });
};
