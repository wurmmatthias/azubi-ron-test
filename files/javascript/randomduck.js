// Function to fetch random duck image from Random Duck API
async function fetchRandomDuck() {
    try {
      const response = await fetch('https://random-d.uk/api/v2/random');
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error("Error fetching random duck:", error);
    }
  }

  // Function to update duck image source
  async function updateDuckImage() {
    const duckImage = document.getElementById('duckImage');
    duckImage.src = await fetchRandomDuck();
  }

  // Load a random duck image when the page loads
  window.onload = updateDuckImage;