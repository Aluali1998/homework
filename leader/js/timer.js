// 1. Дата окончания отсчёта
const endDate = new Date("2026-09-12T00:00:00").getTime();

// 2. Функция, которая обновляет таймер
function updateTimer() {
  const now = new Date().getTime();
  const distance = endDate - now; // сколько миллисекунд осталось

  // если время вышло
  if (distance < 0) {
    document.querySelector(".timer").innerHTML = "Акция завершена";
    clearInterval(timerInterval); // останавливаем таймер
    return;
  }

  // 3. переводим миллисекунды в дни/часы/минуты/секунды
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 4. подставляем значения в HTML
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

// 5. запускаем сразу и потом каждую секунду
updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
