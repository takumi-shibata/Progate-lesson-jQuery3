$(function() {
  // eqメソッド: jQueryオブジェクトの中から、eqの引数の数字と同じインデックス番号の要素を取得できる
  // $('セレクタ').eq(インデックス番号).メソッド
  $('#hide-btn').click(function() {
    $('.slide').eq(1).fadeOut();
  });


  // 関数を使った共通部分のまとめ。「次へ」「前へ」のボタン(change-btn)を押した時、数字のボタン(index-btn)を押した時の「次へ」「前へ」(change-btn)の表示・非表示の設定
  function toggleChangeBtn () {

    // activeがついているスライド画像のインデックス番号の取得
    // 変数名slideIndexは条件式に使用するため「$」はいらない
    var slideIndex = $('.slide-b').index($('.active'));

    // CSSで非表示にしたボタンを表示させる設定(※全てのスライドでボタンが非表示になっているため。必要がないのは最初のスライドの「前へ」と最後のスライドの「次へ」のみ。以下で設定)
    $('.change-btn').show();

    // 最初のスライドの「前へ」と、最後のスライドの「次へ」のボタンの非表示の設定
    // ※等価演算子「===」と「==」は判別基準が異なる！「===」は比較する値がどちらも「同一」な場合に用いる。「==」は比較する値が「等しい」場合に用いる。
    if (slideIndex == 0) {
      $('.prev-btn').hide();
      // スライドの枚数が変わった時の処理「.length」は「.slide-b」の数を取得するので、インデント番号を取得したい場合は「-1」
    } else if (slideIndex == $('.slide-b').length -1) {
      $('.next-btn').hide();
    }
  }


  // indexメソッド
  // ①インデックス番号の取得: $('セレクタ').index($('取得したいインデックス番号のセレクタ'));
  // ②クリックされた要素のインデックス番号の取得: clickメソッド中で、var $変数名 = $('クリックで取得するセレクタ').index($(this));
  $('.index-btn').click(function() {
    $('.active').removeClass('active');

    // 変数名は次のeqメソッドの引数に使用するため「$」がない
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide-b').eq(clickedIndex).addClass('active');

    // 共通部分の関数の呼び出し
    toggleChangeBtn ();
  });


  // prevメソッド: 対象となるセレクタを基準に同じ階層にある1つ前の要素を取得
  // nextメソッド: 対象となるセレクタを基準に同じ階層にある1つ後の要素を取得
  $('.change-btn').click(function() {
    // <li class="slide-b active"><img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/jquery/advanced/spring.jpg"></li>
    // 上記のような「active」クラスがつくタグを全て「$displaySlide」っていう変数名に代入しているってこと。
    var $displaySlide = $('.active');
    
    // 「active」が固定されたままだと、違う画像に切り替えた際に表示ができないため「removeClass」で削除
    $displaySlide.removeClass('active');
   
    // 条件分岐で「次へ」を押した時と「前へ」を押した時の処理
    //「this」は「次へ」「前へ」のボタンの事を指している。複数ある内、特定の動作を行った時に特定の動作を行う処理
    //「this」(次へ もしくは 前へ)の動作を行った際、「next-btn」というクラスのあるhtmlを基に「hasClass」でthisの動作がhtmlに合っている処理(true)なのか間違っている処理(false)なのかを判断
    if($(this).hasClass('next-btn')) {
      // 次へのボタンを押し、htmlにnext-btnが入っていてtrueの場合、次の画像にactiveを追加
      // 前へのボタンを押し、htmlにnext-btnが入っていなくてfalseの場合はelseの処理、前の画像にactiveを追加
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }

    // 共通部分の関数の呼び出し
    toggleChangeBtn ();
  });
});