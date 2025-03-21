console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
    let allBreeds = []; // Store all breeds globally
  
    // 🐶 Challenge 1: Fetch & Display Dog Images
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "Random Dog";
          img.style.width = "200px"; // Adjust size if needed
          img.style.margin = "10px";
          imageContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching images:", error));
  
    // 🦴 Challenge 2: Fetch & Display Dog Breeds
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        allBreeds = Object.keys(data.message);
        displayBreeds(allBreeds);
      })
      .catch((error) => console.error("Error fetching breeds:", error));
  
    // Function to display breeds
    function displayBreeds(breeds) {
      breedList.innerHTML = ""; // Clear previous list
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
  
        // 🖌 Challenge 3: Change Color on Click
        li.addEventListener("click", () => {
          li.style.color = "firebrick"; // Change to any color you like
        });
  
        breedList.appendChild(li);
      });
    }
  
    // 🔍 Challenge 4: Filter Breeds by First Letter
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(selectedLetter));
      displayBreeds(filteredBreeds);
    });
  });
  