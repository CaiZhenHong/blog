const { mock, Random } = require('mockjs');

mock(/\/get\/article\/new/, 'get', () => {
  let data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      title: Random.ctitle(2, 20),
      summary: Random.cparagraph(2, 20),
      like: Random.integer(0, 100000),
      comment: Random.integer(0, 100000),
      tag: Random.ctitle(2, 8),
      time: Random.datetime(),
      cover: Random.integer(0, 1) ? null : Random.image('190x105', Random.color()),
      id: Random.integer(0, 100000),
      liked: Random.boolean()
    })
  }
  return data;
})


mock(/\/get\/article\/catlog/, 'get', () => {
  let data = [];
  let dataCount = Random.integer(2, 15);
  for (let i = 0; i < dataCount; i++) {
    let dd = [];
    let ddCount = Random.integer(2, 15);
    for (let i = 0; i < ddCount; i++) {
      dd.push({
        name: Random.ctitle(2, 20),
        time: Random.datetime(),
        id: Random.integer(0, 100000)
      })
    }
    data.push({
      dt: Random.ctitle(2, 10),
      dd
    })
  }
  return {
    data: data,
  };
})

mock(/\/get\/kblist/, 'get', () => {
  let kbCount = Random.integer(2, 15);
  let data = [];
  for (let i = 0; i < kbCount; i++) {
    data.push({
      title: Random.ctitle(2, 8),
      summary: Random.ctitle(2, 40),
      tag: Random.ctitle(2, 4)
    })
  }
  return data
})