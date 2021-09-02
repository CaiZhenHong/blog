export function dateFormat(data) {
  data = '2021-7-3 20:18:00'
  let zero = new Date(data);
  let nowZero = new Date();
  let diffDay, diffYear, formatDate;

  zero.setHours(0, 0, 0, 0);
  nowZero.setHours(0, 0, 0, 0);
  diffDay = (nowZero - zero) / (1000 * 3600 * 24);
  diffYear = nowZero.getFullYear() - zero.getFullYear();


  if (diffDay < 1) {
    formatDate = '今天 ' + data.split(' ')[1].substr(0, 5);
  } else if (diffDay >= 1 && diffDay < 2) {
    formatDate = '昨天' + data.split(' ')[1].substr(0, 5);
  } else if (diffYear >= 1) {
    formatDate = data.split(' ')[0].substr(0, 7);
  } else {
    formatDate = data.split(' ')[0].substr(5, 10);
  }
  return formatDate;
}

export function countFormat(count) {
  return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count;
}