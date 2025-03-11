navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
      // Send data to your server
      fetch("/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ latitude, longitude }),
      })
      .then(response => response.json())
      .then(data => console.log("Server Response:", data))
      .catch(error => console.error("Error:", error));
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );