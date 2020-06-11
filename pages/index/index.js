//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    router: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jump: function(e){
    console.log(e)
    wx.navigateTo({
      url: e.currentTarget.dataset.router,
      success: function(res) {

      },
      fail: function(res) {

      },
      complete: function(res) {

      },
     })
  },
  onLoad: function () {
    this.setData({
          router: [{
              icon:'location',
              color:'black',
              size: 25,
              type: 'field',
              desc: '个人信息',
              link: '/my',
          },{
              icon:'camera',
              color:'black',
              size: 25,
              type: 'outline',
              desc: 'demo演示',
              link: '/my',
          },{
              icon:'like',
              color:'black',
              size: 25,
              type: 'outline', //Icon类型，可选值 outline（描边），field（填充）
              desc: '地址查询',
              link: '../busInfo/busInfo',
          },
          {
            icon:'note',
            color:'black',
            size: 25,
            type: 'outline', //Icon类型，可选值 outline（描边），field（填充）
            desc: '日志信息',
            link: '../logs/logs',
        }],
      })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
