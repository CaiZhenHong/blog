
new Promise((resolve) => {
  setTimeout(() => {
    resolve('ok')
  }, 2000)
}).then(value => { console.log(value); }).then(value => { console.log("123"); })