<!doctype html>
<html style="height: 100%; background-color: #DBDBDB" lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GBalanceWheel</title>
    <script src="classes/GBalanceWheel.js"></script>
</head>
    <body>
    <h1><i>BalanceWheel</i></h1>
        <div style="float: left; padding: 20px; background-color: white; border: 1px solid black; border-radius: 10px">
            <label>Здоровье</label><br>
            <input type="range" id="health" min="1" max="10" value="1" oninput="reDraw()"><br>
            <label>Друзья</label><br>
            <input type="range" id="friends" min="1" max="10" value="1" oninput="reDraw()"><br>
            <label>Отношения</label><br>
            <input type="range" id="relations" min="1" max="10" value="1" oninput="reDraw()"><br>
            <label>Яркость жизни</label><br>
            <input type="range" id="brightnessOfLife" min="1" max="10" value="1" oninput="reDraw()"><br>
            <label>Духовный рост</label><br>
            <input type="range" id="spiritualGrowth" min="1" max="10" value="1" oninput="reDraw()"><br>
            <label>Карьера</label><br>
            <input type="range" id="career" min="1" max="10" value="1" oninput="reDraw()"><br>
            <label>Деньги</label><br>
            <input type="range" id="money" min="1" max="10" value="1" oninput="reDraw()"><br>
            <label>Личностный рост</label><br>
            <input type="range" id="personalGrowth" min="1" max="10" value="1" oninput="reDraw()"><br>
        </div>

        <canvas id="GBalanceWheelCanvas" width="800" height="800" style="background-color: #DBDBDB; display: block; margin: auto"></canvas>

        <script>
            var circle = new GBalanceWheel();

            // Первая отрисовка
            circle.drawBalanceWheel();

            // Перерисовка в зависимости от положения ползунков
            function reDraw() {
                // Очищаем холст
                circle.clearContext();

                // Отрисовываем заного
                circle.drawBalanceWheel();
            }
        </script>
    </body>
</html>