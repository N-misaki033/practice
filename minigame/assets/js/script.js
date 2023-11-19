// ボタンとメッセージの要素を取得する 
const btn = document.getElementsByTagName('button'); 
const message = document.getElementById('comment'); 

// 画像を取得する
let nomal = document.querySelector('#nomal');
let run = document.querySelector("#run");
let jump = document.querySelector('#jump');

// ボタン０と２を隠す 
btn[0].style.visibility = 'hidden';
btn[2].style.visibility = 'hidden'; 

// ボタン１のテキストを変更する 
btn[1].textContent = 'みーちゃんと遊ぶ';   

// 最初の質問と回答を定義する 
const time = new Date(); 
const Hour = time.getHours();
const Min = time.getMinutes(); 

const questions =['今日の気分は？','お話ししたいことを選んでね!']; 
const choices = [   
  ['とっても元気', 'まあまあ...','元気ない',],   
  ['今何時？','走って!','おなかすいた～'], 
]; 
const answers = [
  [
  '素敵!みーちゃんの元気の秘訣はビタミンをしっかりとることだよ!お野菜・果物大好き!', 
  '毎日頑張ってるね、お疲れ様です。きっとこれからいいことあるはず!自分をたくさんほめてあげよう!', 
  '毎日頑張って、疲れちゃったかな。本当にお疲れ様です。時には休息も大事。人目を気にせず休むことも大切に。自分の体を守ろう!'
  ], 
  ['今の時間は'+ Hour +'時' + Min +'分だよ！', '見ててね！','みーちゃんもおなかすいたよ、そろそろご飯の時間かな？'], 
]; 

// 変数を定義する
let countQ = 0; 

// 画像の表示・非表示を切り替える関数
const showImage = (img) => {
  [nomal,run,jump].forEach(element => {
    element.style.display = 'none';
  });
  img.style.display = 'block';
};

// 質問を表示する関数を定義する
const displayQuestion = () => {
  message.textContent = questions[countQ];
  for(let i = 0; i < btn.length; i++){
    btn[i].textContent = choices[countQ][i];
    btn[0].style.visibility = 'visible';
    btn[2].style.visibility = 'visible';
  };
};

// ボタン１がクリックされたら質問と選択肢を表示する関数を呼び出す関数を定義する 
const questionStart = () => {
  btn[1].removeEventListener('click',answertoQ);
  
  displayQuestion();
  
  // 選択肢がクリックされたときのイベントリスナーを定義する
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
      // 回答を表示する関数
      answertoQ(i);
    });
  };
};

// 質問に対して回答を表示して次の質問に進むボタンを表示するための関数を定義する 
const answertoQ = (i) => {
  console.log(countQ);
  console.log(i);
  message.textContent = answers[countQ][i];
  btn[0].style.visibility = 'hidden';
  btn[2].style.visibility = 'hidden';


  if(countQ === 0) {
    btn[1].textContent = '次の質問に進む!';
    // イベントリスナーを削除して新しく定義する
    btn[1].removeEventListener('click', answertoQ);
    btn[1].addEventListener('click', nextQuestion);
  }else if(countQ ===1){
    if(i === 1){
    // 「走って！」が選択された場合に画像を表示する
    showImage(run);
    btn[1].style.visibility = 'hidden';
    setTimeout(() => {
      nextQuestion();
    },5000);
    }else {
      btn[1].textContent = 'はじめから';
      // イベントリスナーを削除して新しく定義する
      btn[1].removeEventListener('click', answertoQ);
      btn[1].addEventListener('click', nextQuestion);
    }  
  };
};

// 「次の質問に進む」ボタンがクリックされたら次の質問に進む関数を定義する
const nextQuestion = () => {
  if(countQ < 1){
    countQ++;   
    displayQuestion();
  }else if (countQ < 2) {
    // ジャンプ画像を表示
    showImage(jump);
      message.textContent = '遊んでくれてありがとう!';
      btn[0].style.visibility = 'hidden';
      btn[2].style.visibility = 'hidden';
      btn[1].style.visibility ='visible';
      btn[1].textContent = 'もう一度遊ぶ';
      // イベントリスナーを削除して新しく定義する
      btn[1].removeEventListener('click', nextQuestion);
      btn[1].addEventListener('click', resetGame);
    };
  };

// 「もう一度遊ぶ」ボタンがクリックされたらゲームをリセットする関数を定義する
const resetGame = () => {
  // 初期状態に戻す
  countQ = 0;
  showImage(nomal);
  message.textContent = 'こんにちは、一緒に楽しく遊ぼうね！';
  btn[1].style.visibility ='visible';
  btn[1].textContent = 'みーちゃんと遊ぶ';
  btn[1].removeEventListener('click', resetGame);
  // ゲームを再開するためのイベントリスナーを設定する
  btn[1].addEventListener('click', questionStart);
  questionStart();
};

// ボタン１のクリックイベントリスナーを設定する 
btn[1].addEventListener('click',() => { 
  // ゲームを開始する前に画像を初期に戻す
  showImage(nomal);
  questionStart();
}); 