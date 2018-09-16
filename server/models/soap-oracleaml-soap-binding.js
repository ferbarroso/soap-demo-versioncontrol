
'use strict';
var server = require('../../server/server');

module.exports = function(oracleamlServiceoracleamlSoapBinding) {

  var soapDataSource = server.datasources.bpProcessDemo;
  var oracleamlServiceoracleamlSoapBinding;

  soapDataSource.once('connected', function () {
    // Create the model
    oracleamlServiceoracleamlSoapBinding = soapDataSource.createModel('oracleamlServiceoracleamlSoapBinding', {});
  });


  /**
   * oracleaml
   * @param {oracleaml} oracleaml oracleaml
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  oracleamlServiceoracleamlSoapBinding.oracleaml = function(oracleaml, callback) {
      oracleamlServiceoracleamlSoapBinding.oracleaml(oracleaml, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  oracleamlServiceoracleamlSoapBinding.remoteMethod('oracleaml',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'oracleaml',
       type: 'oracleaml',
       description: 'oracleaml',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'oracleamlResponse',
       description: 'oracleamlResponse',
       root: true } ],
  http: { verb: 'post', path: '/oracleaml' },
  description: 'oracleaml' }
  );
  
}
