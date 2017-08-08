(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    $('#btn1').on('click',function () {
        window.location.href = '';
    });
    $('#btn2').on('click',function () {
        window.location.href = '';
    });
    //更多推荐跳转
    $('#moreBox').on('click','li',function () {
        var $this = $(this);
        if($this.context.id === 'more1'){
            window.location.href = '';
        }else if($this.context.id === 'more2'){
            window.location.href = '';
        }else if($this.context.id === 'more3'){
            window.location.href = '';
        }else if($this.context.id === 'more4'){
            window.location.href = '';
        }
    });
});
