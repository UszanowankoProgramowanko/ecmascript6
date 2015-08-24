function ajax(url, method, async, headers) {
  if (method === undefined) {
    method = 'get';
  }

  if (async === undefined) {
    async = true;
  }

  if (headers === undefined) {
    headers = {};
  }

  console.log(method, url, async ? 'async' : 'sync');

  console.log('headers:', headers);
}

/*
 get http://google.com sync
 headers: {}
 */
ajax('http://google.com', 'get', false);