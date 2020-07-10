const app = getApp()
var WXBizDataCrypt = require('../../utils/RdWXBizDataCrypt')
const util = require('../../utils/util.js')

Page({
  data: {
    stepInfoList: []
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '最近运动步数'
    })
    let _this = this
    wx.getWeRunData({
      success (res) {
        // 拿 encryptedData 到开发者后台解密开放数据
        var appId = app.globalData.appId
        var sessionKey = wx.getStorageSync('sessionKey')
        var pc = new WXBizDataCrypt(appId, sessionKey)
        var data = pc.decryptData(res.encryptedData , res.iv)
        let resData = data.stepInfoList.map(item=>{
          return {date: util.formatDateYYYYMMDD(item.timestamp), step: item.step}
        })
        _this.setData({
          stepInfoList: resData.reverse()
        })
      }
    })
  },
})
