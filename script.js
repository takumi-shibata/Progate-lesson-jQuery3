$(function() {
  // eqメソッド: jQueryオブジェクトの中から、eqの引数の数字と同じインデント番号の要素を取得できる
  // $('セレクタ').eq(インデント番号).メソッド	
  $('#hide-btn').click(function() {
    $('.slide').eq(1).fadeOut();
  });

  // 関数を使った共通部分のまとめ。「次へ」「前へ」のボタン(change-btn)を押した時、数字のボタン(index-btn)を押した時の「次へ」「前へ」(change-btn)の表示・非表示の設定
  function toggleChangeBtn () {

    // activeがついているスライド画像のインデント番号の取得
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
  // ①インデント番号の取得: $('セレクタ').index($('取得したいインデント番号のセレクタ'));
  // ②クリックされた要素のインデント番号の取得: clickメソッド中で、var $なし変数名 = $('クリックで取得するセレクタ').index($(this));
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
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
    //「this」は「次へ」「前へ」のボタンの事を指している。複数ある内特定の動作を行った時に特定の動作を行う処理
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

  // textメソッドは引数を指定せずに用いることで、要素内の文字列を取得することもできる！htmlメソッドとcssメソッドも同様に取得できる
  var title = $('#title').text();
  // 上記で取得した文字列を「#title-text」に適用
  $('#title-text').text(title);

  // attrメソッド: ①第一引数に属性名、第二引数にその属性値を指定することで属性を追加することができる。
  // $('h1').attr('id',title); h1要素にtitleというidをセット

  // attrメソッド: ②第二引数を指定しない場合は、その属性の値を取得する事が出来る
  var id = $('#content').attr('id'); // #contentのidの値(content)を取得
  $('#content-id').text(id);

  var href = $('#link').attr('href'); // #linkのhrefの値(https://prog-8.com)を取得
  $('#link-href').text(href);
});