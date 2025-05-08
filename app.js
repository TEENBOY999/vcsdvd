const apiKey = "222c5f88002f69332030e9e107d17c57";

document.getElementById("searchBtn").addEventListener("click", () => {
   const city = document.getElementById("cityInput").value.trim();
   if (city === "") return;

   fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
   )
      .then((response) => {
         if (!response.ok) {
            throw new Error("Weather data not found");
         }
         return response.json();
      })
      .then((data) => {
         document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
         document.getElementById("description").innerText = data.weather[0].description;
         document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      })
      .catch((error) => {
         console.error("Xatolik yuz berdi:", error);
         alert("Shahar topilmadi!");
      });
});
