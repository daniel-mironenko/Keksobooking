'use strict';

(function () {

  var onSuccsessLoad = function (data) {
    window.dataArr = data;
    window.isData = true;
  };

  var onErrorLoad = function () {
    window.isData = false;
  };

  window.setRequest('https://api.jsonbin.io/b/5f079eb3343d624b0782c2fe', 'GET', onSuccsessLoad, onErrorLoad);

})();
