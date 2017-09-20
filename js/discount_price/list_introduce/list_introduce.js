function getSearch() {
    var searchStr = location.search.slice(1);
    var searchArr = searchStr.split('=');
    return searchArr
}

//获取id 
var id = getSearch()[1];
// console.log(id);

//渲染数据
if (id >= 20) {
    var url1 = 'http://139.199.192.48:9090/api/getmoneyctrlproduct'
    aa(url1);
} else {
    var url2 = 'http://139.199.192.48:9090/api/getdiscountproduct';
    aa(url2);

}

function aa(road) {
    $.ajax({
        url: road,
        type: 'get',
        data: { productid: id },
        success: function(data) {
            // console.log(data.result);
            var html = template('comment_tlp', data.result);
            $('#comment_Form').html(html);
            // console.log($('input[type=submit]'))
            initPlus();
        }
    });
}



//点击评论追加
function initPlus() {

    $('input[type=submit]').on('click', function() {
        var html = $('textarea').val();
        // console.log(html);
        $('ul').append(html);
    })
    return false;
}