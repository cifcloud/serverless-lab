// ************************************************************
// Add-as-a-service
// ************************************************************
//
'use strict';

function add(x, y) { 

    // test cases
    // x = 1 and y = 2 should return 3

    // implement here
    // ...
    // return ...

  return x + y;
}

exports.handler = function(event, context, cb) {
    
    var x = event.pathParameters["x"], y = event.pathParameters["y"];
    
    var result = add(x,y);
   
    cb(null, { 
        statusCode: 200, 
        body: JSON.stringify({'result' : result }),
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
};
