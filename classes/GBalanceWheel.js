/**
 * Created by jackson1911 on 3/23/17.
 */

/**
 * Class GBalanceWheel
 * @author Evgeniy
 */
function GBalanceWheel() {

    var self = this;

    // Радиус
    this.radius = document.getElementById('GBalanceWheelCanvas').height / 2 - 100;

    // Количество кругов
    this.numOfCircles = 10;

    // Шаг
    this.step = this.radius / this.numOfCircles;

    // Указатель на холст
    var canvas = document.getElementById('GBalanceWheelCanvas');

    // Получаем указатель на контекст рисования
    var c = canvas.getContext('2d');

    // Центр холста
    var center = canvas.height / 2;

    // Количество секций
    this.sections = 8;

    // Ползунки
    //
    // Здоровье
    this.health = document.getElementById('health');

    // Друзья
    this.friends = document.getElementById('friends');

    // Отношения
    this.relations = document.getElementById('relations');

    // Яркость жизни
    this.brightnessOfLife = document.getElementById('brightnessOfLife');

    // Духовный рост
    this.spiritualGrowth = document.getElementById('spiritualGrowth');

    // Карьера
    this.career = document.getElementById('career');

    // Деньги
    this.money = document.getElementById('money');

    // Личностный рост
    this.personalGrowth = document.getElementById('personalGrowth');

    // Список цветов
    var colors = [
        "#33C610",
        '#10C66E',
        '#10ADC6',
        '#9710C6',
        '#C61067',
        "#4310C6",
        "#C61010",
        "#C65710",
        "#C6B310"
    ];

    this.drawBalanceWheel = function () {
        drawSegments();
        drawCircles();
        drawSections();
    };

    /**
     * Очищает холст для перерисовки
     * @author Evgeniy
     */
    this.clearContext = function () {
        c.clearRect(0,0,canvas.width, canvas.height);
    };

    /**
     * Отрисовка сегментов
     * @author Evgeniy
     */
    function drawSegments() {

        // вычисляем сумму всех данных
        var total = 0;

        for (var a = 0; a < self.sections; a++) {
            total += 1;
        }

        // рисуем круговые данные
        var prevAngle = 0;

        for (var i = 0; i < self.sections; i++) {

            // доля, представленная сегментом
            var fraction = 1 / total;

            // вычисляем начальный угол
            var angle = prevAngle + fraction * Math.PI * 2;

            // Добавляем градиент
            var grad = c.createRadialGradient(center, center, 1, center, center, 100);
            grad.addColorStop(0, 'aliceblue');
            grad.addColorStop(1, colors[i]);

            // рисуем сегмент
            c.fillStyle = grad;

            // В зависимости от того на какой мы итерации высчитывается радиус
            // каждого сегмента относительно того в каком положении ползунки
            switch (i) {
                case 0:
                    self.radius = self.step * self.health.value;
                    break;
                case 1:
                    self.radius = self.step * self.friends.value;
                    break;
                case 2:
                    self.radius = self.step * self.relations.value;
                    break;
                case 3:
                    self.radius = self.step * self.brightnessOfLife.value;
                    break;
                case 4:
                    self.radius = self.step * self.spiritualGrowth.value;
                    break;
                case 5:
                    self.radius = self.step * self.career.value;
                    break;
                case 6:
                    self.radius = self.step * self.money.value;
                    break;
                case 7:
                    self.radius = self.step * self.personalGrowth.value;
                    break;

            }

            // создаём контур
            c.beginPath();
            c.moveTo(center, center);
            c.arc(center, center, self.radius, prevAngle, angle, false);
            c.lineTo(center, center);

            // заливаем его
            c.fill();

            // Сбрасываем радиус сегмента
            self.radius = self.step;

            // обновляем для следующей итерации цикла
            prevAngle = angle;
        }
    }

    /**
     * Отрисовка 10 кругов
     * @author Evgeniy
     */
    function drawCircles() {

        // Получаем радиус первого круга
        self.radius = document.getElementById('GBalanceWheelCanvas').height / 2 - 100;

        // Присваеваем радиус первого круга в свойство
        var radius = self.radius;

        // Рисуем круги с уменьшением к центру
        for (var i = 0; i < 10; i++) {
            // создаём контур
            c.beginPath();
            c.arc(center,center, radius, 0, 2 * Math.PI);

            // обводим его
            c.strokeStyle = "#5C5C5C";
            c.stroke();

            radius = radius - self.step;
        }
    }

    /**
     * Отрисовка секций
     * @author Evgeniy
     */
    function drawSections() {

        // Получаем радиус первого круга
        self.radius = document.getElementById('GBalanceWheelCanvas').height / 2 - 100;
        var radius = self.radius;

        // вычисляем сумму всех данных
        var total = 0;

        for(var a = 0; a < self.sections; a++) {
            total += 1;
        }

        // рисуем круговые данные
        var prevAngle = 0;

        for (var i = 0; i < self.sections; i++) {
            // доля, представленная сегментом
            var fraction = 1 / total;
            // вычисляем начальный угол
            var angle = prevAngle + fraction * Math.PI * 2;

            // рисуем сегмент
            c.fillStyle = colors[i];

            // создаём контур
            c.beginPath();
            c.moveTo(center, center);
            c.arc(center, center, radius, prevAngle, angle, false);
            c.lineTo(center, center);

            // обводим его
            c.strokeStyle = "#5C5C5C";
            c.stroke();

            // обновляем для следующей итерации цикла
            prevAngle = angle;
        }
    }
}