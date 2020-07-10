//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [{
      "text": "发现",
      "iconPath": "/assets/images/tabbar_icon_chat_default.png",
      "selectedIconPath": "/assets/images/tabbar_icon_chat_active.png",
      dot: true
    },
      {
        "text": "我",
        "iconPath": "/assets/images/tabbar_icon_setting_default.png",
        "selectedIconPath": "/assets/images/tabbar_icon_setting_active.png",
        badge: 'New'
      }],
    currentTab: {
      index: 0,
    }
  },
  tabChange: function(e) {
    this.setData({
      currentTab: e.detail
    })
  },
  onLoad: function () {
    this.getWxUser()
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getWxUser(){
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
  }
})
