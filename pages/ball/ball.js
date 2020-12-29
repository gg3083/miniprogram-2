// pages/ball/ball.js
Page({
    data: {
        showClearBtn: false,
        isWaring: false,
        items: [
            { name: '1', value: '总体偏小' },
            { name: '2', value: '总体偏大', checked: 'false' },
        ],
        length:[1,2,3,4,5,6,7,8,9],
        num:[1,2,3,4,5,6,1]
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    onInput(evt) {
        const { value } = evt.detail;
        this.setData({
            value,
            showClearBtn: !!value.length,
            isWaring: false,
        });
    },
    onClear() {
        this.setData({
            value: '',
            showClearBtn: false,
            isWaring: false,
        });
    },
    onConfirm() {
        console.log(this.data.value)
        if (!this.data.value || this.data.value > 20) {
            this.setData({
                isWaring: true,
            });
        }
    },

})
