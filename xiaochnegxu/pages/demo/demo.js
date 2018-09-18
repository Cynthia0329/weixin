// pages/demo/demo.js
var app=getApp();   //获取全局变量的语法
var common = require('../js/common.js');  //获取公共的js文件
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demoText:"这是一个DEMO页面",
    textP:null,
    array: [1,2,3,4,5,6,7,8,9],
    aa: true,
    id:1,
    object: {
      key: '我打算输出一组数组'
    },
    a: 1,
    b: 2
  },
  toIndex: function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  show: function () {
    var aa=this.data.aa;
    this.setData({
      aa:!aa
    })
  },

  handleTap1: function (){
    console.log("handleTap1");
  },
  handleTap2: function () {
    console.log("handleTap2");
  },
  handleTap3: function () {
    console.log("handleTap3");
  },
  handleTap4: function () {
    console.log("handleTap4");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      textP: app.globalData.textP
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 定义公共js里面的函数方法
   */
  helloMINA: function() {
    common.sayHello('MINA')
  },
  goodbyeMINA: function () {
    common.sayGoodbye('MINA')
  }
})