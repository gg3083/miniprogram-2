// layout/components/myInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo:{
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    router: [
      {
        "title":"收藏",
        "icon":"/assets/images/collect.png",
        "desc":""
      },
      {
        "title":"相册",
        "icon":"/assets/images/photos.png",
        "desc":""
      },
      {
        "title":"卡包",
        "icon":"/assets/images/cards.png",
        "desc":""
      }, {
        "title":"表情",
        "icon":"/assets/images/emoji.png",
        "desc":""
      }, {
        "title":"设置",
        "icon":"/assets/images/tabbar_icon_setting_active.png",
        "desc":""
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
