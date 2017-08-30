window.chrome = window.chrome || {};
window.chrome.storage = {};
window.chrome.storage.sync = {};
window.chrome.storage.sync.get = function(property, callback) {
  setTimeout(function() {
    callback({
      requestDefaultTimeout: 1
    });
  }, 1);
};
