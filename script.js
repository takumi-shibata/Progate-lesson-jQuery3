// 1.eqメソッド: jQueryオブジェクトの中から、eqの引数の数字と同じインデックス番号の要素を取得できる
// $('セレクタ').eq(インデント番号).メソッド
$(function() {
  $('#hide-btn').click(function() {
    $('.slide').eq(1).fadeOut();
  });
});