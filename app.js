App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  globalData: {
    defaultCity: '',
    defaultCounty: '',
    weatherData: '',
    air: '',
    day: '',
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
    doubanBase: "https://api.douban.com",
    heWeatherBase: "https://free-api.heweather.net",
    //   heWeatherBase:"https://devapi.heweather.net",
    juhetoutiaoBase: "https://v.juhe.cn/toutiao/index",
    juheBase:"https://v.juhe.cn",
    tencentMapKey: "4HYBZ-EB23D-SLC42-HQ5R3-LP3LQ-OZFU5",
    heWeatherKey: "4a817b4338e04cc59bdb92da7771411e",
    //  heWeatherKey: "a2320a3ca23642da809d0d7b87858481",
    juhetoutiaoKey: "a9f703a0200d68926f707f3f13629078",
    chengyuKey:"63448bb7388f198e7428c4f9fec31233",
    curBook: "",
    appKey: "0b2bdeda43b5688921839c8ecb20399b",
    jokeKey:"3a0352aac0edfeebc88397c231a09762",
    dictionaryKey:"d9d6fb891b92b9872b1e6485c16e7664",
  }

})
