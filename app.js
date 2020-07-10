//app.js
import {getCode} from "/utils/api/wechat"
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',//这是固定的就是这个地址
            data: {
              appid:'wxae2560d59590027d',//小程序的ID
              secret:'b9b3731ca195292987cb0a6a7ad08e45',//小程序的密钥
              js_code:res.code,
              grant_type:'authorization_code'
            },
            method: 'GET',
            header:{
              'content-type': 'application/json' // 默认值
            },
            success: function(res) {
              wx.setStorageSync("openId", res.data.openid)
              wx.setStorageSync("sessionKey", res.data.session_key)
            },
            fail: function(res) {
              console.log('获取openId、sessionKey失败！' + res.errMsg)
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    theme: 'light',
    host: 'http://127.0.0.1:7000/api/v1',
    appId: 'wxae2560d59590027d',
    secret: 'b9b3731ca195292987cb0a6a7ad08e45',
    GRID_DEMO_URL: '/example/index',
    iconTabbar: '/assets/images/icon_tabbar.png'
  },
})
