'use strict';

{
  //プロフィール画像クリック時のスタイル変更
  let member = ["koukan", "shonosuke", "sota", "yasuhiro", "natsumi", "sora", "tetsuya", "watnowlogo"];
  let profileMember = ["profile-koukan", "profile-shonosuke", "profile-sota", "profile-yasuhiro", "profile-natsumi", "profile-sora", "profile-tetsuya", "profile-watnow"]

  //プロフィール部分の高さの取得と指定
  var getHeight = document.getElementById('koukan').clientHeight;
  getHeight *= 2;
  for (let i = 0; i < 8; i++) {
    var setHeight = document.getElementById(profileMember[i]);
    setHeight.style.height = getHeight + 'px';
  }

  //koukanのプロフィール
  document.getElementById('koukan').addEventListener('click', () => {
    // 選択した人の写真をカラーに
    var changeProfileColor = document.getElementById('koukan');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    //他の人の写真を元の状態に戻す
    for (let i = 1; i < 8; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = ''; //''の中身を空白にすることで元の状態に
      //他の人のプロフィール非表示
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    //プロフィール内容の表示（クラスの付け替え）
    var addClass = document.getElementById('profile-koukan');
    addClass.classList.add('active');
  });

  //shonosukeのプロフィール
  document.getElementById('shonosuke').addEventListener('click', () => {
    var changeProfileColor = document.getElementById('shonosuke');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    for (let i = 0; i < 1; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    for (let i = 2; i < 8; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    var addClass = document.getElementById('profile-shonosuke');
    addClass.classList.add('active');
  });

  //sotaのプロフィール
  document.getElementById('sota').addEventListener('click', () => {
    var changeProfileColor = document.getElementById('sota');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    for (let i = 0; i < 2; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    for (let i = 3; i < 8; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    var addClass = document.getElementById('profile-sota');
    addClass.classList.add('active');
  });

  //yasuhiroのプロフィール
  document.getElementById('yasuhiro').addEventListener('click', () => {
    var changeProfileColor = document.getElementById('yasuhiro');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    for (let i = 0; i < 3; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    for (let i = 4; i < 8; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    var addClass = document.getElementById('profile-yasuhiro');
    addClass.classList.add('active');
  });

  //natsumiのプロフィール
  document.getElementById('natsumi').addEventListener('click', () => {
    var changeProfileColor = document.getElementById('natsumi');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    for (let i = 0; i < 4; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    for (let i = 5; i < 8; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    var addClass = document.getElementById('profile-natsumi');
    addClass.classList.add('active');
  });

  //soraのプロフィール
  document.getElementById('sora').addEventListener('click', () => {
    var changeProfileColor = document.getElementById('sora');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    for (let i = 0; i < 5; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    for (let i = 6; i < 8; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    var addClass = document.getElementById('profile-sora');
    addClass.classList.add('active');
  });

  //tetsuyaのプロフィール
  document.getElementById('tetsuya').addEventListener('click', () => {
    var changeProfileColor = document.getElementById('tetsuya');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    for (let i = 0; i < 6; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    for (let i = 7; i < 8; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    var addClass = document.getElementById('profile-tetsuya');
    addClass.classList.add('active');
  });

  //watnowの紹介
  document.getElementById('watnowlogo').addEventListener('click', () => {
    var changeProfileColor = document.getElementById('watnowlogo');
    changeProfileColor.style.opacity = '1.0';
    changeProfileColor.style.filter = 'grayscale(0)';
    for (let i = 0; i < 7; i++) {
      var reset = document.getElementById(member[i]);
      reset.style = '';
      var removeClass = document.getElementById(profileMember[i]);
      removeClass.classList.remove('active');
    }
    var addClass = document.getElementById('profile-watnow');
    addClass.classList.add('active');
  });

//プロフィール画面を閉じる
  document.getElementById('closeKoukan').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-koukan');
    closeProfile.classList.remove('active');
  });
  document.getElementById('closeShonosuke').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-shonosuke');
    closeProfile.classList.remove('active');
  });
  document.getElementById('closeSota').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-sota');
    closeProfile.classList.remove('active');
  });
  document.getElementById('closeYasuhiro').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-yasuhiro');
    closeProfile.classList.remove('active');
  });
  document.getElementById('closeNatsumi').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-natsumi');
    closeProfile.classList.remove('active');
  });
  document.getElementById('closeSora').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-sora');
    closeProfile.classList.remove('active');
  });
  document.getElementById('closeTetsuya').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-tetsuya');
    closeProfile.classList.remove('active');
  });
  document.getElementById('closeWatnow').addEventListener('click', () => {
    var closeProfile = document.getElementById('profile-watnow');
    closeProfile.classList.remove('active');
  });
}
