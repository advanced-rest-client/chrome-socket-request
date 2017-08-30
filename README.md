[![Build Status](https://travis-ci.org/advanced-rest-client/chrome-socket-request.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/chrome-socket-request)  

# chrome-socket-request

Wrapper element for the SocketFetch libraty to make a HTTP connection in Chrome

*This element is designed for ARC only**

### Example
```html
<chrome-socket-request></chrome-socket-request>
<script>
var xhr = document.querySelector('chrome-socket-request');
xhr.addEventListener('report-response', e => {
  console.log(e.detail);
});
xhr.send({})
.then(() => {
  // request finished.
});
</script>
```

