/** 
 *  WebSocket 二次封装
 * @param {String} url - 建立 WebSocket 连接的地址  
 */
function WSocket(url) {
  this.__url = url; // 建立 WebSocket 连接的地址  
  this.pong = ''; // 用于检测是否接收到 pong
  this.ws = null; // 用于存放 WebSocket 构造函数的实例对象

  this.connect(); // 建立连接
}

WSocket.prototype = {
  /**
   * 建立 WebSocket 连接
   */
  connect: function () {
    let __this = this;

    try {
      __this.ws = new WebSocket(__this.__url); // 建立 WebSocket 连接
      __this.ping(); // 开始发送 ping 及检测 pong

      /* 检测错误事件，如果发生错误事件，则再次调用 connect 方法 */
      __this.ws.addEventListener('error', () => {
        __this.connect();
      })


    } catch (e) {
      // 当连接出错时，再次调用连接方法
      setTimeout(() => {
        __this.connect();
      }, 1000);
    }
  },

  ping: function () {
    let __this = this;



    let pingTime = setTimeout(() => {
      // 间隔 10m 发一次ping
      __this.ws.send('ping');

      // 监听消息，并将数据赋值给 pong
      __this.onmessage((data => {
        __this.pong = data;
      }))

      // 过 3s 后检测 pong 的值是否为 ‘pong’
      let pongTime = setTimeout(() => {
        if (__this.pong === 'pong') {
          // 值为 'pong' 则删除定时器，把 pong 重新赋值为空字符串,重新发起 ping 方法 
          clearTimeout(pingTime);
          clearTimeout(pongTime);
          __this.pong = '';
          __this.ping();
        } else {
          // 如果出现错误，重新进行连接
          __this.connect();
        }
      }, 3 * 1000);
    }, 10 * 1000);


  },

  // 回调函数监听发送过来的数据
  onmessage: function (cb) {
    this.ws.addEventListener('message', (e) => {
      cb(e.data)
    })
  },

  // 关闭连接
  close: function () {
    this.ws.close()
  }

};

export default WSocket;