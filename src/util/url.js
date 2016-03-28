// TODO: create UriBuilder object
export function UriBuilder(url) {
  var query;
  this.params = {};
  [ this.baseUrl, query ] = url.split("?");
  if (query) {
    query.split('&').forEach(function (v) {
      var [key, value] = v.split("=");
      this.params[key] = decodeURIComponent(value);
    }, this);
  }
  this.build = function() {
    var query = "";
    for (var key in this.params) {
      query += "&" + key + "=" + encodeURIComponent(this.params[key]);
    }
    return this.baseUrl + (query ? "?" + query.slice(1) : "");
  }
}