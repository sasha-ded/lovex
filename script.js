document.addEventListener('DOMContentLoaded', function() {
    const btnNo = document.getElementById('btnNo');
    const btnYes = document.getElementById('btnYes');
    const cat = document.getElementById('cat');
    const loveMessage = document.getElementById('loveMessage');
    const title = document.getElementById('title');
    const heartsContainer = document.getElementById('hearts');

    // Делаем кнопку "Нет" убегающей от курсора
    btnNo.addEventListener('mousemove', function(e) {
        const btnRect = btnNo.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Вычисляем направление от курсора
        const distanceX = mouseX - btnCenterX;
        const distanceY = mouseY - btnCenterY;
        
        // Новая позиция кнопки (в противоположном направлении)
        const newX = btnRect.left - distanceX * 0.1;
        const newY = btnRect.top - distanceY * 0.1;
        
        // Ограничиваем перемещение в пределах экрана
        const maxX = window.innerWidth - btnRect.width;
        const maxY = window.innerHeight - btnRect.height;
        
        btnNo.style.left = Math.min(Math.max(newX, 0), maxX) + 'px';
        btnNo.style.top = Math.min(Math.max(newY, 0), maxY) + 'px';
    });

    // Обработка нажатия на "Да"
    btnYes.addEventListener('click', function() {
        // Меняем котика на счастливого
        cat.style.backgroundImage = "url('https://i.gifer.com/nUq.gif')";
        cat.style.transform = "scale(1.1)";
        
        // Показываем сообщение о любви
        loveMessage.classList.add('visible');
        
        // Меняем заголовок
        title.textContent = "Ураааа!";
        title.style.color = "#ff4081";
        
        // Прячем кнопки
        btnNo.style.display = 'none';
        btnYes.style.display = 'none';
        
        // Запускаем анимацию сердечек
        createHearts();
    });

    // Функция создания летающих сердечек
    function createHearts() {
        const heartCount = 30;
        
        for (let i = 0; i < heartCount; i++) {
            setTimeout(function() {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤';
                
                // Случайная позиция вокруг котика
                heart.style.left = (50 + (Math.random() - 0.5) * 30) + '%';
                heart.style.top = (50 + (Math.random() - 0.5) * 20) + '%';
                
                // Случайный размер
                heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
                
                // Случайная скорость анимации
                heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                heart.style.animationDelay = (Math.random() * 0.5) + 's';
                
                heartsContainer.appendChild(heart);
                
                // Удаляем сердечко после анимации
                setTimeout(function() {
                    heart.remove();
                }, 4000);
            }, i * 300);
        }
    }
});