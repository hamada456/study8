(() => {
    let calculation = document.getElementById('calculation');

    calculation.addEventListener('click', function(){
        let num1 = document.getElementById("A").value
        let num2 = document.getElementById("B").value

        let sendUrl = `http://localhost:3000/numA/${num1}/numB/${num2}`;

        // XMLHttpRequest オブジェクトを生成する
        const req = new XMLHttpRequest();
        // 実際にサーバーへリクエストを送信
        res.open( "GET", sendUrl , false );
        res.send(null);

        //const req = new XMLHttpRequest()と一緒
        const res = req;
        
        //JSON のデータ数分処理、値を受け取る
        testJ = JSON.parse(res.responseText);
        //書き換え
        document.getElementById("addition").textContent = testJ.numA;
        document.getElementById("multiplication").textContent = testJ.numB;

    });
        
})();