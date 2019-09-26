// 设置内容区域上方没有被隐藏的内容，即将页面滚动到顶部
(function($){
  $('#back-to-top').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
  })  
})(jQuery);