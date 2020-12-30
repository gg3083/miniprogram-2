// pages/ball/ball.js
Page({
    data: {
        value: '',
        showClearBtn: false,
        isWaring: false,
        topTips: false,
        errMsg: "",
        items: [
            {name: '1', value: '总体偏小'},
            {name: '2', value: '总体偏大', checked: 'false'},
        ],
        length: [1, 2],
        num: []
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    },
    onInput(evt) {
        const {value} = evt.detail;
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
        if (!this.data.value) {
            this.setData({
                isWaring: true,
                topTips: true,
                errMsg: '请选择组数！'
            });
            setTimeout(() => {
                this.setData({
                    topTips: false,
                });
            }, 1000);
            return
        } else if (this.data.value > 20) {
            this.setData({
                isWaring: true,
                topTips: true,
                errMsg: '最多只能选择20组！'
            });
            setTimeout(() => {
                this.setData({
                    topTips: false,
                });
            }, 1000);
            return
        }
        console.log(this.data.topTips)
        let arrList = []
        for (let i = 0; i < this.data.value; i++) {
            let res = this.buildNum()
            arrList.push(res)
        }
        this.setData({
            num: arrList,
        });
    },
    buildNum() {
        let arr = []
        for (let i = 0; i < 99; i++) {
            let num = this.randomNum(1, 32)
            if (arr.indexOf(num) < 0 && arr.length < 6) {
                arr.push(num)
            }
        }
        arr.sort(this.sortNumber)
        arr.push(this.randomNum(1, 16))
        return arr.join(",");
    },
    randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    },
    sortNumber(a, b) {
        return a - b
    }

})
