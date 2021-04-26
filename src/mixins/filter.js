const filter = {
  filters: {
    date(data) {
      let pubDate = new Date(`${data.split(" ")[0]} 00:00:00`).getTime(); // 将发布时间处理至 凌晨00：00：0，返回毫秒级的时间

      let dayDiff = nowDate() - pubDate; // 时间差，毫秒级
      let pubTime = data.split(" ")[1].split(":")[0] + ":" + data.split(" ")[1].split(":")[0]; // 拼接发布时间 时+分

      switch (dayDiff / 86400000) {
        case 0: return `今天 ${pubTime}`;
        case 1: return `昨天 ${pubTime}`;
        case 2: return `前天 ${pubTime}`;
        default: return `${data.split(" ")[0]}`
      }
    },
    count(count) {
      if (count >= 10000) {
        return count.toString().substring(0, count.length - 3) / 10 + "w";
      } else {
        return count;
      }
    }
  }
}

function nowDate() {
  let date = new Date();
  let Y = date.getFullYear();
  let M = date.getMonth();
  let D = date.getDate();
  return new Date(`${Y}-${M + 1}-${D} 00:00:00`).getTime();
}

export default filter;