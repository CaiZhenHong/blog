# MyBLOG

## 模块

### 登录注册模块

1.使用 Websocket 代替 Ajax 轮询；使用 token 预防 csrf 攻击；将得到的 token 放入 localstorage，并使用客户端信息 + token 进行登录验证。token 值每隔一段时间更新一次，token 值由服务端使用 uuid 第五版生成。具体登录流程可看下面流程图，登录/注册的具体技术可前往[博客地址](example)进行查看。
