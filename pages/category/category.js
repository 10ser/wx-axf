// pages/category/category.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    computedCategories: [],
    activeCategory: 0,
    allCategories: false,
    ranking: false,
    activeCid: '全部分类',
    activeCidIndex: 'all',
    rankingList: ['综合排序', '价格最低', '价格最高'],
    activeRank:'综合排序',
    activeCategoryProducts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let computedCategories = app.globalData.computedCategories
    this.setData({
      computedCategories: computedCategories
    })
    this.changeActiveCategoryProducts()
  },
  /* 
   * 切换分类的下标
   */
  changeCategories (event) {
    let index = event.currentTarget.dataset.index
    this.setData({
      activeCategory: index,
      activeCid: '全部分类',
      activeRanking: '综合排序',
      ranking: false,
      allCategories: false,
      activeCidIndex: 'all'
    })
    this.changeActiveCategoryProducts()
  },
  /* 
   * 显示隐藏全部分类
   */
  changeAllCategories () {
    let allCategories = this.data.allCategories
    this.setData({
      allCategories: !allCategories,
      ranking: false
    })
  },
  /* 
   * 切换综合排序的显示隐藏
   */
  changeRanking () {
    let ranking = this.data.ranking
    this.setData({
      ranking: !ranking,
      allCategories: false
    })
  },
  /* 
   * 隐藏灰色蒙版
   */
  hideProductList () {
    this.setData({
      ranking: false,
      allCategories: false
    })
  },
  /* 
   * 更改激活的子分类
   * @param string cidname   子分类的名称
   * @param int    index  子分类的下标
   */
  changeCid (event) {
    let cidname = event.currentTarget.dataset.cidname
    let index = event.currentTarget.dataset.index
    console.log(event.currentTarget.dataset.index)
    this.setData({
      activeCid: cidname,
      activeCidIndex: index
    })
    this.changeActiveCategoryProducts()
  },
  /**
   * 更改激活的分类数据
   */
  /* 
   * 更改排序方式
   * @param string item   排序的方式
   */
  changeActiveRanking (event) {
    let item = event.currentTarget.dataset.item
    this.setData({
      activeRanking: item
    })
    this.changeActiveCategoryProducts()
  },
  changeActiveCategoryProducts () {
    let activeCategory = this.data.activeCategory
    let computedCategories = this.data.computedCategories
    let activeCategoryProducts = computedCategories[activeCategory].products
    console.log(activeCategoryProducts)
    let activeCidIndex = this.data.activeCidIndex
    console.log(activeCidIndex)
    if (activeCidIndex !== 'all') {
      activeCategoryProducts = activeCategoryProducts.filter(item => item.cidsIndex === Number(activeCidIndex))
      console.log(activeCategoryProducts)
    }
    let activeRanking = this.data.activeRanking
    // 克隆对象,防止对原数组对象造成影响
    let cloneActiveCategoryProducts = activeCategoryProducts.slice(0)
    if (activeRanking === '价格最低') {
      activeCategoryProducts = cloneActiveCategoryProducts.sort((a, b) => a.price - b.price)
    } else if (activeRanking === '价格最高') {
      activeCategoryProducts = cloneActiveCategoryProducts.sort((a, b) => b.price - a.price)
    }
    this.setData({
      activeCategoryProducts: activeCategoryProducts
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
  
  }
})