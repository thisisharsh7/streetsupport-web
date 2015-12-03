var Q = require('q');

var categoryResultData = function (category) {
  var deferred = Q.defer(),
  req = new XMLHttpRequest();

  req.open('GET', 'http://api.streetsupport.net/v1/categorised-service-providers/show/' + category, true);

  req.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      var json = JSON.parse(req.responseText);
      deferred.resolve(json);
    }
    else {
      alert('error');
    }
  };

  req.onerror = function() {
    deferred.reject(new Error('Server responded with a status of ' + req.status));
  };

  req.send();

  return deferred.promise;
};

module.exports = {
  data: categoryResultData
};