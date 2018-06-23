'use strict';

var test = require('unit.js');
var add = require('../add.js');

describe('Tests index', function() {
  it('verifies successful addition', function(done) {
    add.handler({ pathParameters: { x: 1, y: 2} }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);

        test.object(JSON.parse(result.body)).hasKey('result', 3);
        test.value(result).hasHeader('content-type', 'application/json');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
