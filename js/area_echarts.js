$(function () {
    map();
})
function map() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('map_1'));
    var option = {
        title: {
            text: '新冠型肺炎人口来源分析',
            textStyle: { color: '#fff' },
            x: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show: false,
            x: 'left',
            y: 'bottom',
            //layoutCenter:['30%','30%'],
            splitList: [
                { start: 0, end: 100 },
                { start: 100, end: 300 },
                { start: 300, end: 500 },
                { start: 500, end: 800 },
                { start: 800, end: 1500 },
                { start: 1500, end: 100000 }
            ],
            color: ['red', '#FF6666', '#FF9900', '#CC9933', '#FFCC33', '#FFFFCC']
        },
        series: [{
            name: '新冠型肺炎人口来源分析',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false
                }
            },
            data: [
                { name: '黑龙江', value: 10000 },
                { name: '吉林', value: 10000 },
                { name: '辽宁', value: 1600 },
                { name: '北京', value: 1400 },
                { name: '天津', value: 1200 },
                { name: '河北', value: 1300 },
                { name: '山东', value: 900 },
                { name: '山西', value: 800 },
                { name: '内蒙古', value: 18 },
                { name: '新疆', value: 10 },
                { name: '宁夏', value: 80 },
                { name: '甘肃', value: 90 },
                { name: '青海', value: 110 },
                { name: '西藏', value: 90 },
                { name: '陕西', value: 200 },
                { name: '河南', value: 250 },
                { name: '四川', value: 300 },
                { name: '重庆', value: 700 },
                { name: '湖北', value: 15000 },
                { name: '安徽', value: 200 },
                { name: '江苏', value: 500 },
                { name: '上海', value: 60000 },
                { name: '浙江', value: 400 },
                { name: '江西', value: 120 },
                { name: '湖南', value: 400 },
                { name: '贵州', value: 20 },
                { name: '云南', value: 30 },
                { name: '广西', value: 250 },
                { name: '广东', value: 500 },
                { name: '福建', value: 600 },
                { name: '海南', value: 20000 },
                { name: '香港', value: 80000 },
                { name: '澳门', value: 1000 },
                { name: '台湾', value: 90000 },
                { name: '南海诸岛', value: 0 }
            ],

        }]
    };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}