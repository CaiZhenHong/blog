const { mock, Random } = require('mockjs');

mock(/\/get\/user\/info/, 'get', () => {

  const allLinks = ['icon__qq', 'icon__douyin', 'icon__weibo', 'icon__twitter', 'icon__xiaohongshu', 'icon__facebook', 'icon__bilibili', 'icon__wechat', 'icon__csdn', 'icon__github', 'icon__zhihu'];
  const links = [];
  let arr = [];
  let randomCount = Random.integer(0, 12)
  for (let i = 0; i < randomCount; i++) {
    let index = Random.integer(0, 10);
    if (arr.indexOf(allLinks[index]) === -1) {
      arr.push(allLinks[index])
      links.push({
        url: '/',
        icon: allLinks[index],
      })
    }

  }
  let data = mock({
    "profile": {
      "name|2-8": "@cword",
      "job|2-8": "@cword",
      "photo": "@image('160x160',@color,'PHOTO')",
      "cover": "@image('1000x250',@color,'背景图片')",
    },
    "links": links
  });

  return data;
})