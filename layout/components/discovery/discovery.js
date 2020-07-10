// layout/components/discovery/discovery.js
const { GRID_DEMO_URL } = getApp().globalData
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    grids: [
      {
          imgUrl: "/assets/images/scan.png",
          url: "/pages/scan/scan",
          text: '扫一扫'
      },
      {
          imgUrl: "/assets/images/weather.png",
          url: "/pages/weather/weather",
          text: '天气'
      },
      {
          imgUrl: "/assets/images/message.png",
          url: "/pages/message/message",
          text: '消息'
      },
      {
          imgUrl: "/assets/images/clipboard.png",
          url: "/pages/clipboard/clipboard",
          text: '剪切板'
      },
      {
          imgUrl: "/assets/images/via.png",
          url: "/pages/vibration/vibration",
          text: '震动'
      },
      {
          imgUrl: "/assets/images/address.png",
          url: "/pages/address/address",
          text: '地址'
      },
      {
          imgUrl: "/assets/images/map.png",
          url: "/pages/map/map",
          text: '地图'
      },
      {
          imgUrl: "/assets/images/running.png",
          url: "/pages/run/run",
          text: '运动'
      },
      {
        imgUrl: "/assets/images/weibo.png",
        url: "/pages/weibo/weibo",
          text: '微博'
      }
  ],
    icon20: app.globalData.iconTabbar,
    icon60: app.globalData.iconTabbar
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
