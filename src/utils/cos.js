const COS = require('cos-js-sdk-v5');
const { get_cos_credential } = require('@/services/user')

export default function (Key, Body, cbk) {

  const cos = new COS({
    getAuthorization: function (options, callback) {
      get_cos_credential().then(({ data }) => {
        let credentials = data.credentials
        callback({
          TmpSecretId: credentials.tmpSecretId,
          TmpSecretKey: credentials.tmpSecretKey,
          SecurityToken: credentials.sessionToken,
          // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
          StartTime: data.startTime, // 时间戳，单位秒，如：1580000000
          ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000900
        });
      })
    }
  });


  cos.putObject({
    Bucket: 'image-1304087712',
    Region: 'ap-guangzhou',
    Key,
    Body,
  }, (err, data) => {
    cbk(err, data)
  })

}