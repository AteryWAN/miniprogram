// pages/wxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    var2: undefined,
    var3: null,
    var4: "var4",
    a: 1,
    b: 2,
    c: 3,
    name: " is a test",
    length: 1,
    array: [{
        message: "foo",
      },
      {
        message: "bar",
      },
    ],
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: "this is a template",
      time: new Date().toLocaleDateString(),
    },
    color: 'blue',
    fontSize: '50rpx',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  switch: function(e){
    const length = this.data.objectArray.length;
    for(let i = 0; i < length; i++){
      const x = Math.floor(Math.random() * length);
      const y = Math.floor(Math.random() * length);
      const temp = this.data.objectArray[x];
      this.data.objectArray[x] = this.data.objectArray[y];
      this.data.objectArray[y] = temp;
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  addToFront: function(e){
    const length = this.data.objectArray.length;
    this.data.objectArray = [{ id: length, unique: "unique_" + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray 
    })
  }

})