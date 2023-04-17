////////////////
//スクロールの設定
///////////////
//送信ボタンクリックで一番新しいチャットが表示されるようにする
let btnClick = document.getElementById('chatbot-submit');
let chatArea = document.getElementById('chat-area');

btnClick.addEventListener('click', function() {
let chatAreaHeight = chatArea.scrollHeight;
chatArea.scrollTop = chatAreaHeight;
});

//新しいチャットが追加されたときにもスクロールが一番下まで移動する
function scrollToBottom() {
let chatAreaHeight = chatArea.scrollHeight;
chatArea.scrollTop = chatAreaHeight;
}

//新しいチャットが追加されたときにスクロールするようにする
let chatList = document.getElementById('yourchat-ul');
let observer = new MutationObserver(scrollToBottom);
let observerConfig = { childList: true };
observer.observe(chatList, observerConfig);


///////////////////
//チャット送信時の設定
//////////////////
//送信ボタンクリック時の動き
const chatSubmitBtn = document.getElementById('chatbot-submit');
const userText = document.getElementById('chatbot-text');

chatSubmitBtn.addEventListener('click', () => {
    console.log('click');

    event.preventDefault(); // フォームのデフォルト動作を防止する
    if (!userText.value.trim()) return; // 空の入力をチェックする

    //fetchを使ってPOSTを送る
    const data = {text:userText.value} //送信するデータ
    fetch('/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //データをJSON形式に変換して送信する
      })
      .then(response => response.json())
      .then(data => {
        //レスポンスを表示する
        console.log(data);
        const ul = document.getElementById('yourchat-ul');
        const li = document.createElement('li');
        const div = document.createElement('div');  
        ul.appendChild(li);
        li.classList.add('bot-bubble');
        li.appendChild(div);
        div.classList.add('left');
        div.textContent = data.text;
      })
      .catch(error => {
        console.error(error);
      });

    //ユーザーの入力を表示する
    const ul = document.getElementById('yourchat-ul');
    const li = document.createElement('li');
    const div = document.createElement('div');  
    ul.appendChild(li);
    li.classList.add('yourchat-right');
    li.appendChild(div);
    div.classList.add('right');
    div.textContent = userText.value;

    //入力フォームの文字を消す
    userText.value = '';
});


//質問ボタンが押された時の動き
//classの取得は.querySelectorAllを使う（戻り値が「HTMLCollection」ではなく「NodeList」になってforEachが使える
const QuestionBtn = document.querySelectorAll('.js-question');

QuestionBtn.forEach(function(target){

    target.addEventListener('click', () => {

        //your-chatを作成する
        const UL = document.getElementById('yourchat-ul');
        const LI = document.createElement('li');
        const DIV = document.createElement('div');

        UL.appendChild(LI);
        LI.classList.add('yourchat-right');
        LI.appendChild(DIV);
        DIV.classList.add('right');
        DIV.textContent = target.value;


        //chatbotからの返答
        if (DIV.textContent == '製品について') {

            //回答用のulを作成する
            const newUL = document.createElement('ul');
            newUL.setAttribute('id', 'res');
            
            const BotLI = document.createElement('li');
            const BotDIV = document.createElement('div');
            
            newUL.appendChild(BotLI);
            BotLI.classList.add('bot-bubble');
            BotLI.appendChild(BotDIV);
            BotDIV.classList.add('left');
            BotDIV.textContent = '製品一覧はこちらから確認できます。';
            
            //作成した回答用のul(newUL)をUL(yourchat-ul)の中に挿入する
            setTimeout(function() {
                UL.appendChild(newUL);
              }, 1000);
            
        }

        if (DIV.textContent == '営業時間について') {

            //回答用のulを作成する
            const newUL = document.createElement('ul');
            newUL.setAttribute('id', 'res');
            
            const BotLI = document.createElement('li');
            const BotDIV = document.createElement('div');
            
            newUL.appendChild(BotLI);
            BotLI.classList.add('bot-bubble');
            BotLI.appendChild(BotDIV);
            BotDIV.classList.add('left');
            BotDIV.textContent = '営業時間は9:00～18:00です';
            
            //作成した回答用のul(newUL)をUL(yourchat-ul)の中に挿入する
            setTimeout(function() {
                UL.appendChild(newUL);
              }, 1000);
        }

        if (DIV.textContent == '店舗について') {

            //回答用のulを作成する
            const newUL = document.createElement('ul');
            newUL.setAttribute('id', 'res');
            
            const BotLI = document.createElement('li');
            const BotDIV = document.createElement('div');
            
            newUL.appendChild(BotLI);
            BotLI.classList.add('bot-bubble');
            BotLI.appendChild(BotDIV);
            BotDIV.classList.add('left');
            BotDIV.innerHTML = '店舗情報：<br> 大阪府大阪市・・・';
            
            //作成した回答用のul(newUL)をUL(yourchat-ul)の中に挿入する
            setTimeout(function() {
                UL.appendChild(newUL);
              }, 1000);
        }





    });


});
