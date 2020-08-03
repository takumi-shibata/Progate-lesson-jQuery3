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

    // 以下数字のボタン(index-btn)を押した時の「次へ」「前へ」(change-btn)の表示・非表示の設定
    // activeがついているスライド画像のインデント番号の取得
    var slideIndex = $('.slide-b').index($('.active'));
    
    // CSSで非表示にしたボタンを表示させる設定(※全てのスライドでボタンが非表示になっているため。必要がないのは最初のスライドの「前へ」と最後のスライドの「次へ」のみ。以下で設定)
    $('.change-btn').show();
    
    // 最初のスライドの「前へ」と、最後のスライドの「次へ」のボタンの非表示の設定
    // ※等価演算子「===」と「==」は判別基準が異なる！「===」は比較する値がどちらも「同一」な場合に用いる。「==」は比較する値が「等しい」場合に用いる。
    if(slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == 3) {
      $('.next-btn').hide();
    }   
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
    //「this」は「次へ」「前へ」のボタンの事を指している。複数ある内特定の動作を行った時に特定の動作を行う処理
    //「this」(次へ もしくは 前へ)の動作を行った際、「next-btn」というクラスのあるhtmlを基に「hasClass」でthisの動作がhtmlに合っている処理(true)なのか間違っている処理(false)なのかを判断
    if($(this).hasClass('next-btn')) {
      // 次へのボタンを押し、htmlにnext-btnが入っていてtrueの場合、次の画像にactiveを追加
      // 前へのボタンを押し、htmlにnext-btnが入っていなくてfalseの場合はelseの処理、前の画像にactiveを追加
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }

    // 以下「次へ」「前へ」のボタン(change-btn)を押した時の表示・非表示の設定
    // activeがついているスライド画像のインデント番号の取得
    var slideIndex = $('.slide-b').index($('.active'));
    
    // CSSで非表示にしたボタンを表示させる設定(※全てのスライドでボタンが非表示になっているため。必要がないのは最初のスライドの「前へ」と最後のスライドの「次へ」のみ。以下で設定)
    $('.change-btn').show();
    
    // 最初のスライドの「前へ」と、最後のスライドの「次へ」のボタンの非表示の設定
    // ※等価演算子「===」と「==」は判別基準が異なる！「===」は比較する値がどちらも「同一」な場合に用いる。「==」は比較する値が「等しい」場合に用いる。
    if(slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == 3) {
      $('.next-btn').hide();
    }

  });
});