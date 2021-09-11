const LUNAR_FESTIVAL = {
    "正月": {
        "初一": "春节",
        "十五": "元宵节"
    },
    "二月": {
        "初二": "春龙节"
    },
    "五月": {
        "初五": "端午节"
    },
    "七月": {
        "初七": "七夕节",
        "十五": "中元节"
    },
    "八月": {
        "十五": "中秋节"
    },
    "九月": {
        "初九": "重阳节"
    },
    "腊月": {
        "初八": "腊八节",
        "廿三": "小年",
        "三十": "除夕",
    },
}
const FESTIVAL = {
    1: {
        1: "元旦"
    },
    2: {
        14: "情人节"
    },
    3: {
        8: "妇女节"
    },
    4: {
        1: "愚人节",
        4: "清明节"
    },
    5: {
        1: "劳动节",
        4: "青年节"
    },
    6: {
        1: "儿童节"
    },
    7: {
        1: "建党节"
    },
    8: {
        1: "建军节"
    },
    9: {
        10: "教师节"
    },
    10: {
        1: "国庆节"
    }
}
// 一、元旦：2021年1月1日至3日放假，共3天。

// 二、春节：2月11日至17日放假调休，共7天。2月7日（星期日）、2月20日（星期六）上班。

// 三、清明节：4月3日至5日放假调休，共3天。

// 四、劳动节：5月1日至5日放假调休，共5天。4月25日（星期日）、5月8日（星期六）上班。

// 五、端午节：6月12日至14日放假，共3天。

// 六、中秋节：9月19日至21日放假调休，共3天。9月18日（星期六）上班。

// 七、国庆节：10月1日至7日放假调休，共7天。9月26日（星期日）、10月9日（星期六）上班。
const ARRANGE_HOLIDAY = {
    2021: {
        1: [1, 3],
        2: [11, 17],
        4: [3, 5],
        5: [1, 5],
        6: [12, 14],
        9: [19, 21],
        10: [1, 7]
    }
}
const WORKING_DAYS = {
    2021: {
        2: {
            7: true,
            20: true
        },
        4: {
            25: true
        },
        5: {
            8: true
        },
        9: {
            18: true,
            26: true
        },
        10: {
            9: true
        }
    }
}
const HOLIDAY = [{
    name: "元旦",
    date: "2021-1-1"
}, {
    name: "春节",
    date: "2021-2-12"
}, {
    name: "清明节",
    date: "2021-4-4"
}, {
    name: "劳动节",
    date: "2021-5-1"
}, {
    name: "端午节",
    date: "2021-6-12"
}, {
    name: "中秋节",
    date: "2021-9-21"
}, {
    name: "国庆节",
    date: "2021-10-1"
}]
export {
    LUNAR_FESTIVAL,
    FESTIVAL,
    ARRANGE_HOLIDAY,
    WORKING_DAYS,
    HOLIDAY
}