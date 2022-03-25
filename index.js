(() => {

    getNum();

    getJSON();

    // document.getElementById("addition").textContent = testJ.num1;
    // document.getElementById("multiplication").textContent = testJ.num2;
    // document.getElementById("json").textContent = testJ;

    function getNum() {
        // XMLHttpRequest オブジェクトを生成する
        const res = new XMLHttpRequest();
        // 実際にサーバーへリクエストを送信
        res.open("GET", "http://localhost:3000/numA/3/numB/5",false);
        res.send(null);
        // JSON のデータ数分処理、値を返す
        res.addEventListener("load", function(){ // loadイベントを登録します。
            console.log(this.response); // 通信結果を出力します。
        }, false);
        testJ = JSON.parse(res.responseText);
    }
    
    function getJSON() {
        // XMLHttpRequest オブジェクトを生成する
        const req = new XMLHttpRequest();
        // 実際にサーバーへリクエストを送信
        req.open("GET", "http://localhost:3000/numA/3/numB/5",false);
        req.send(null);
        // JSON のデータ数分処理、値を返す
        req.addEventListener("load", function(){ // loadイベントを登録します。
            console.log(this.response); // 通信結果を出力します。
        }, false);
        testJ = JSON.parse(req.responseText);
    }

})();