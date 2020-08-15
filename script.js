$(function() {
  // eqメソッド: jQueryオブジェクトの中から、eqの引数の数字と同じインデント番号の要素を取得できる
  // $('セレクタ').eq(インデント番号).メソッド
  $('#hide-btn').click(function() {
    $('.slide').eq(1).fadeOut();
  });


  // indexメソッド
  // ①インデント番号の取得: $('セレクタ').index($('取得したいインデント番号のセレクタ'));
  // ②クリックされた要素のインデント番号の取得: clickメソッド中で、var $なし変数名 = $('クリックで取得するセレクタ').index($(this));
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide-b').eq(clickedIndex).addClass('active'); 
  });
});