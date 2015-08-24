function ajax({url, method = 'get', async = true, headers = {}}) {
  console.log(method, url, async ? 'async' : 'sync');
  console.log('headers:', headers);
}

/*
get http://google.com sync
headers: {}
 */
ajax({url: 'http://google.com', async: false});