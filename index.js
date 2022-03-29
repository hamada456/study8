(() => {
    let calculation = document.getElementById('calculation');

    calculation.addEventListener('click', function(){
        let num1 = document.getElementById("A").value
        let num2 = document.getElementById("B").value

        let sendUrl = `http://localhost:3000/numA/${num1}/numB/${num2}`;
        //let sendUrl = `http://localhost:3000/numA/3/numB/5`;
        //let sendUrl = "http://localhost:3000/study8/app.js/intA/"+num1+"/intB/"+num2;

        // XMLHttpRequest オブジェクトを生成する
        const res = new XMLHttpRequest();
        // 実際にサーバーへリクエストを送信
        res.open( "GET", sendUrl , false );
        res.send(null);
        // JSON のデータ数分処理、値を返す
        // res.addEventListener("load", function(){ // loadイベントを登録します。
        //     console.log(this.response); // 通信結果を出力します。
        // }, false);

        getJSON();

        function getJSON() {
            // XMLHttpRequest オブジェクトを生成する
            const req = new XMLHttpRequest();
            // 実際にサーバーへリクエストを送信
            req.open("GET",`http://localhost:3000/numA/${num1}/numB/${num2}`,false);
            req.send(null);
            // JSON のデータ数分処理、値を返す
            testJ = JSON.parse(req.responseText);

            document.getElementById("addition").textContent = testJ.numA;
            document.getElementById("multiplication").textContent = testJ.numB;
        }

    });

    
    
        
})();