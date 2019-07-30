
export function format(str) {
  var newData = new Date(str);
  var y = newData.getFullYear();
  var m = newData.getMonth()+1;
  m = m < 10 ? '0'+m : m;
  var d = newData.getDay();
  d = d < 10 ? '0'+d : d;
  return y + '-' + m + '-' + d
}
