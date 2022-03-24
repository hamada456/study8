(() => {

    getJSON();

    document.getElementById("plus").textContent = testJ;

    function getJSON() {
        // XMLHttpRequest オブジェクトを生成する
        const req = new XMLHttpRequest();  
        // 実際にサーバーへリクエストを送信
        req.open("GET", "http://localhost:3000/numA/3/numB/5",false);
        //req.send(null);
        // JSON のデータ数分処理、値を返す
        testJ = JSON.parse(req.responseText);
    }

})();