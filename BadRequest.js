/*
 * AjaxWeaver Inc.
 * All rights reserved.
 * 
 * Author: Jianmin Liu
 */

'use strict';

const util = require('util');

class BadRequest {
    constructor(msg) {
        this.title = "Bad Request";
        this.status = 400;
        this.message = msg || 'Data content validation failed.';
    }
}

util.inherits(BadRequest, Error);

module.exports = BadRequest;
