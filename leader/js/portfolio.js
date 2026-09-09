const slider = document.getElementById("risk-slider");
const percentEl = document.getElementById("gauge-percent");
const riskEl = document.getElementById("gauge-risk");
const arcFill = document.querySelector(".gauge__arc-fill");

const ARC_LENGTH = arcFill.getTotalLength(); // НОВОЕ: точная длина пути, без ручного подбора

function updateGauge() {
  const value = Number(slider.value);

  slider.style.setProperty("--fill", `${value}%`);

  const percent = Math.round(1 + (value / 100) * 24);
  percentEl.textContent = percent;

  const offset = ARC_LENGTH - (ARC_LENGTH * value) / 100;
  arcFill.style.strokeDasharray = ARC_LENGTH;
  arcFill.style.strokeDashoffset = offset;

  let riskText, riskColor;
  if (value < 34) {
    riskText = "Низкий риск";
    riskColor = "#61bb75";
  } else if (value < 67) {
    riskText = "Средний риск";
    riskColor = "#e0a83e";
  } else {
    riskText = "Высокий риск";
    riskColor = "#e05a3e";
  }

  riskEl.textContent = riskText;
  riskEl.style.color = riskColor;
  arcFill.style.stroke = riskColor;
  arcFill.style.color = riskColor;
}

slider.addEventListener("input", updateGauge);
updateGauge();
