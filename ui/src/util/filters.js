const countFormat = count => {
  return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count;
}

// 格式化日期 2021-7-3 20:18:00
const dateFormat = (date) => {
  let zero = new Date(date);
  let nowZero = new Date();
  let diffDay, diffYear, formatDate;
  zero.setHours(0, 0, 0, 0);
  nowZero.setHours(0, 0, 0, 0);
  diffDay = (nowZero - zero) / (1000 * 3600 * 24);
  diffYear = nowZero.getFullYear() - zero.getFullYear();
  if (diffDay < 1) {
    formatDate = '今天 ' + date.split(' ')[1].substr(0, 5);
  } else if (diffDay >= 1 && diffDay < 2) {
    formatDate = '昨天' + date.split(' ')[1].substr(0, 5);
  } else if (diffYear >= 1) {
    formatDate = date.split(' ')[0].substr(0, 7);
  } else {
    formatDate = date.split(' ')[0].substr(5, 10);
  }
  return formatDate;
}

const iconFormat = icon => {
  const names = {
    "zhihu": "知乎",
    "github": "GitHub",
    "csdn": "CSDN",
    "douyin": "抖音",
    "xiaohongshu": "小红书",
    "twitter": "Twitter",
    "facebook": "Facebook",
    "weibo": "微博",
    "bilibili": "哔哩哔哩",
    "wechat": "微信",
    "qq": "QQ"
  }
  return names[icon]
}

export default {
  dateFormat,
  countFormat,
  iconFormat
}
