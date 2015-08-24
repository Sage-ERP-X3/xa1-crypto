"use strict";

var crypto = require('crypto');

// computes SHA1 digest, returns it as a hex string.
exports.digest(text) {
	var hash = crypto.createHash('sha1');
	hash.update(text, 'utf8');
	return hash.digest('hex');
}
