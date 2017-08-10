(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //查看订单按钮
    $('#btn1').on('click',function () {
        window.location.href = '';
    });
    $('#btn2').on('click',function () {
        window.location.href = 'http://service.bj.10086.cn/m/num/num/wnfk/showFontPage.action';
    });
    //banner跳转
    $('.banner').on('click',function () {
        window.location.href = 'http://www.bj.10086.cn/mobile/kdmfy1/index.html?c=zfcgy';
    });
    //更多推荐跳转
    $('#moreBox').on('click','li',function () {
        var $this = $(this);
        if($this.context.id === 'more1'){
            window.location.href = 'http://service.bj.10086.cn/m/jsp/2017/04/sjspjh/7day/index.jsp';
        }else if($this.context.id === 'more2'){
            window.location.href = 'http://appdownload.taipan.bja.bcs.ottcn.com/bj10086app-1/';
        }else if($this.context.id === 'more3'){
            window.location.href = 'http://service.bj.10086.cn/m/jsp/2017/06/rwk/rwk.jsp';
        }else if($this.context.id === 'more4'){
            window.location.href = 'http://service.bj.10086.cn/m/sjyw/product/queryProductItemInfoJLB.action?PACKAGECODE=LLTYTC&PACKAGEID=704&PRODUCTSHOWCODE=JLB1&dateFlag=&isCheck=';
        }
    });
});
