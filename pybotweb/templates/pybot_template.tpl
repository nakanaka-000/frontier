<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/style.css">
    
    <title>pybotweb</title>
</head>
<body>
    <div class="bot">
        <header class="header">
            <h1>お問い合わせはこちら</h1>   
        </header>

        <div class="view" id="chat-area">
        
            <ul class="bot-chat">
                <li class="bot-bubble">
                    <div class="left">
                        製品について何か質問はございますか？
                        <ul class="question-list">
                            <li class="question"><button class="js-question" value="製品について">製品について</button></li>
                            <li class="question"><button class="js-question" value="営業時間について">営業時間について</button></li>
                            <li class="question"><button class="js-question" value="店舗について">店舗について</button></li>
                        </ul>
                    </div>   
                </li>
            </ul>   
            
            <ul id="yourchat-ul">
            </ul>
        </div>

        <div class="input-area">
            <form method="post" action="/hello">
                <input type="text" name="input_text" placeholder="ご自由に入力してください" class="free-question" id="chatbot-text">
                <input type="submit" alt="送信" class="submit" id="chatbot-submit">
            </form>

        </div>
    </div>


    <script src="static/main.js"></script>
</body>
</html>