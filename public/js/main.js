// 関数を定義
function fadeAnime() {    //関数の宣言  
  $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラスそれぞれに足して処理を行う
    let elemPos = $(this).offset().top - 50;//要素より、50px上の
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });
}


// 関数を実行
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// modalの操作を管理
$(function () {
  $('#openModal').click(function () {
    $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function () {
    $('#modalArea').fadeOut();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const personImg = document.querySelector('.work-img img'); // 画像要素を取得

  // 画像をクリックしたときのイベントリスナーを追加
  personImg.addEventListener('click', function () {
    const modal = document.querySelector('.js-modal'); // モーダル要素を取得
    modal.classList.add('is-open'); // モーダルを表示するためのクラスを追加
  });
});





