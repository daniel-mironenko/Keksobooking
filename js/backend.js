'use strict';

(function () {

  var SUCCESS_CODE = 200;

  window.setRequest = function (url, method, onLoad, onError, data) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_CODE) {
        onLoad(xhr.response);
      } else {
        onError();
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    if (data !== undefined) {
      var jsonFormatData = JSON.stringify(Object.fromEntries(data))
    }

    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("secret-key", "$2b$10$/mJyy3kWAxYCGgQH4Xd/P.4uWnastoN4zr39m85YN6S1g4PhLZkWe");
    xhr.send(jsonFormatData);

  };

})();
