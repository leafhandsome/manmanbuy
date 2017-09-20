//店铺渲染
$.ajax({
        url: "http://139.199.192.48:9090/api/getgsshop",
        type: 'get',
        success: function(data) {
            var html = template('shop_tpl', data.result);
            $('#one_son').html(html);
            init();
        }
    })
    //点击店铺事件
function init() {
    $('.shop').on('click', function() {
        // console.log(111)
        // $('.popsort').toggleClass('on');
        //获取元素
        var oneArr = $('.aaa');
        var ab = $('.shop').children('a');
        // console.log(ab);

        // console.log(oneArr.eq(0).children('i'))
        // oneArr.eq(0).children('i').addClass('on')
        oneArr.on('click', function() {
            // console.log(this)
            oneArr.each(function(i, value, oneArr) {
                console.log(value.children[0]);
                value.children[0].classList.add('haha');
            });
            this.children[0].classList.remove('haha');
            var html = this.children[1].innerHTML;
            ab.html(html);
        })
    });

}

//地区渲染
$.ajax({
    url: "http://139.199.192.48:9090/api/getgsshoparea",
    type: 'get',
    success: function(data) {
        var html = template('popprice_tpl', data.result);
        $('#poprice_dis').html(html);
        //调用函数
        distance();
    }
});
//点击事件 地区
function distance() {
    $('.dis').on('click', function() {
        // console.log(222)
        // $('.popprice').toggleClass('on')
        //获取元素
        var area = $('.area');
        var dis = $('.dis').children('a');
        //注册事件
        area.on('click', function() {
            area.each(function(i, value, area) {
                value.children[0].classList.add('are');
            });
            this.children[0].classList.remove('are');
            var html = this.children[1].innerHTML;
            // console.log(html.slice(2))
            dis.html(html);
        })
    })

};
//价格
$('.count').on('click', function() {

})

//点击当前显示，其他隐藏
// var gsp = $('#gsp').children();
// $(document).on('click', '#gsp li', function() {
//         //遍历
//         gsp.each(function(index, valueA, gsp) {

//             console.log($(this).parent('.hd').find('.popbox').eq(index))
//             $(this).parent('.hd').find('.popbox').eq(index).toggleClass('on').siblings().removeClass('on');
//         })
//     })




$(document).on('click', '#gsp li', function() {
    //获取索引
    var index = $(this).index();
    // console.log($('div').hasClass('popbox'))
    // if ($('div').hasClass('popbox')) {
    //     $('.popbox').hide();
    // }

    $('.all>div').eq(index).toggleClass("on").siblings().removeClass('on');
})