    //JavaScriptでpostする
    window.onload = function() {
        //送信ボタンを押した際の動作を設定
        document.getElementById('chatbot-submit')
            .onclick = function() {
                post(); //後でfunction post()を定義
                console.log('postしました！');
        };
    
        xhr = new XMLHttpRequest();
    
        //サーバーからのデータ受信を行った際の動作
        xhr.onload = function(e) {
            if (xhr.readyState ===4) {
                console.log('readeyState===4');
                if (xhr.status === 200) {
                    console.log('status===200');
                    var botResponse = document.getElementById('bot-response');
                    console.log('botResponse')
                    botResponse.value = xhr.responseText;
                    console.log('実行完了！');
    
                    //画面に反映させる
    
                    var outputText = botResponse.value;
                    var outputArea = document.getElementById('bot-response');
    
                    outputArea.textContent = outputText;
    
                }
            }
        };
    };
    
    //function post()の定義
    function post() {
        xhr.open('POST', '/hello', true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        //フォームに入力した値をリクエストとして設定
        var inputText = document.getElementById('chatbot-text');
        console.log(inputText.value);
        var requestData = 'input_text=' + inputText.value;
        xhr.send(requestData);
        console.log('input_textを送信しました！')
    
        //画面に反映させる
        var inputArea = document.getElementById('your-question');
        inputArea.textContent = inputText.value;
    }
    