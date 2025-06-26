document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("city-input");
  const checkWeatherBtn = document.getElementById("check-weather");
  const modal = document.getElementById("modal");
  const weatherMessage = document.getElementById("weather-message");
  const weatherResult = document.getElementById("weather-result");
  const resultHeading = document.getElementById("result-heading");
  const resultText = document.getElementById("result-text");

  // Array of fun loading messages
  const loadingMessages = [
    "Fetching magical clouds from 🌥️ Heaven...",
    "Asking sky gods about the weather...",
    "Analyzing sun-rays & wind speed...",
    "Decoding atmospheric mysteries...",
    "Scanning celestial patterns...",
  ];

  // Array of fun weather results
  const weatherResults = [
    "☀️ It's so bright you'll need sunglasses!",
    "🌧️ Rain rain go away... or stay, we don't mind!",
    "⛈️ Thunderbolts and lightning, very very frightening!",
    "❄️ Winter is coming... or is it?",
    "🌪️ Hold onto your hats!",
    "🌈 After rain comes sunshine and rainbows!",
    "☁️ Perfect day for cloud watching!",
    "🌫️ Is it fog or are my glasses just dirty?",
    "🌬️ Windy enough to fly a kite... or a small child!",
  ];

  // Focus on input field on load
  cityInput.focus();

  // Check weather button click handler
  checkWeatherBtn.addEventListener("click", function () {
    weatherMessage.style.display = "block";
    const city = cityInput.value.trim();

    if (!city) {
      animatePlaceholder();
      return;
    }

    // Show modal
    modal.classList.add("active");

    // Clear previous result
    weatherResult.classList.remove("show");
    weatherMessage.textContent = "";
    resultHeading.textContent = "";
    resultText.textContent = "";

    // Show loading messages one by one
    let currentMessageIndex = 0;

    const showNextMessage = () => {
      if (currentMessageIndex < loadingMessages.length) {
        const message = loadingMessages[currentMessageIndex];
        weatherMessage.textContent = message;
        currentMessageIndex++;
        setTimeout(showNextMessage, 2000); // Show each message for 2 seconds
      } else {
        // All messages shown, now show result
        showWeatherResult(city);
      }
    };

    // Start showing messages
    showNextMessage();
  });

  function showWeatherResult(city) {
    // Hide loader
    document.querySelector(".loader").style.display = "none";
    weatherMessage.style.display = "none";

    // Set result content
    resultHeading.textContent = `Look OutSide 😁`;
    const randomResult =
      weatherResults[Math.floor(Math.random() * weatherResults.length)];
    resultText.textContent = randomResult;

    // Show result
    weatherResult.classList.add("show");

    // Close modal after delay
    setTimeout(() => {
      modal.classList.remove("active");
      cityInput.value = "";
      cityInput.focus();
      // Reset loader for next time
      document.querySelector(".loader").style.display = "block";
      weatherResult.classList.remove("show");
    }, 4000);
  }

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      cityInput.focus();
      // Reset loader for next time
      document.querySelector(".loader").style.display = "block";
      weatherResult.classList.remove("show");
    }
  });

  // Animate placeholder when input is empty
  function animatePlaceholder() {
    cityInput.placeholder = "Please enter a city...";
    setTimeout(() => {
      cityInput.placeholder = " ";
    }, 2000);
  }

  // Add animation to button on hover
  checkWeatherBtn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
    this.style.boxShadow = "0 6px 20px rgba(106, 155, 244, 0.4)";
  });

  checkWeatherBtn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "0 4px 15px rgba(106, 155, 244, 0.3)";
  });
});
