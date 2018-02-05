// pages/login/login.js
let app = getApp()

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
    picHide: false,
    phone: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    picHidefocus() {
      this.setData({
        picHide: true
      })
    },
    picHideBlur() {
      setTimeout(() => {
        this.setData({
          picHide: false
        })
      }, 1000)
    },
    login () {
      let phone = this.phone
      let reg = /^1[34578]\d{9}$/g
      if (reg.test(phone)) {
        let userObj = {
          phone: phone
        }

      }
    }
  }
})
