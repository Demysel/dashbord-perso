// Affichage de l'heure et de la date
function updateDateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleTimeString();
  document.getElementById("current-date").textContent = now.toLocaleDateString();
}
setInterval(updateDateTime, 1000);

// Mode sombre
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Météo (API gratuite)
async function fetchWeather() {
  const apiKey = "your_openweather_api_key"; // Remplace par ta clé API
  const city = "Paris"; // Remplace par ta ville
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
  );
  const data = await response.json();
  document.getElementById("weather-location").textContent = `Ville : ${data.name}`;
  document.getElementById("weather-description").textContent = `Description : ${data.weather[0].description}`;
  document.getElementById("weather-temp").textContent = `Température : ${data.main.temp}°C`;
}
fetchWeather();

// Agenda : Ajouter des tâches
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement("div");
    taskItem.textContent = taskText;
    taskItem.className = "task-item";
    taskItem.addEventListener("click", () => taskItem.remove());
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});
