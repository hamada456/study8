(() => {

    //getNum();

    //getJSON();

    let calculation = document.getElementById('calculation');

    calculation.addEventListener('click', function(){
        let num1 = document.getElementById("A").value
        let num2 = document.getElementById("B").value


        let sendUrl = `http://localhost:3000/study8/app.js/intA/${num1}/intB/${num2}`;
        //let sendUrl = "http://localhost:3000/study8/app.js/intA/" + num1 + "/intB/" + num2;

        // XMLHttpRequest オブジェクトを生成する
        const res = new XMLHttpRequest();
        // 実際にサーバーへリクエストを送信
        res.open("GET", "http://localhost/study8/index.html",false);
        //res.send(null);
        // JSON のデータ数分処理、値を返す
        res.addEventListener("load", function(){ // loadイベントを登録します。
            console.log(this.response); // 通信結果を出力します。
        }, false);
        //testJ = JSON.parse(res.responseText);

    
    // function getJSON() {
    //     // XMLHttpRequest オブジェクトを生成する
    //     const req = new XMLHttpRequest();
    //     // 実際にサーバーへリクエストを送信
    //     req.open("GET", "http://localhost:3000/numA/3/numB/5",false);
    //     req.send(null);
    //     // JSON のデータ数分処理、値を返す
    //     testJ = JSON.parse(req.responseText);
    // }

    });

})();