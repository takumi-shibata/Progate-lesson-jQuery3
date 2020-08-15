$(function() {
  // eqメソッド: jQueryオブジェクトの中から、eqの引数の数字と同じインデックス番号の要素を取得できる
  // $('セレクタ').eq(インデックス番号).メソッド
  $('#hide-btn').click(function() {
    $('.slide').eq(1).fadeOut();
  });


  // indexメソッド
  // ①インデックス番号の取得: $('セレクタ').index($('取得したいインデックス番号のセレクタ'));
  // ②クリックされた要素のインデックス番号の取得: clickメソッド中で、var $変数名 = $('クリックで取得するセレクタ').index($(this));
  $('.index-btn').click(function() {
    $('.active').removeClass('active');

    // 変数名は次のeqメソッドの引数に使用するため「$」がない
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide-b').eq(clickedIndex).addClass('active'); 
  });
});