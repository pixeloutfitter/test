document.addEventListener("DOMContentLoaded", function () {
  createFireflies();
});

function createFireflies() {
  const fireflyContainer = document.querySelector(".fireflies");

  for (let i = 0; i < 50; i++) { // Increase the number of fireflies to 50
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    firefly.style.top = Math.random() * 100 + "%";
    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.animationDelay = Math.random() * 2 + "s";
    fireflyContainer.appendChild(firefly);
  }
}

// YouTube Player API - Load and Play Video


  // Function to auto-play the video
  function autoPlayVideo() {
    const iframe = document.querySelector('iframe');
    const player = new YT.Player(iframe);

    // When the player is ready, play the video
    player.addEventListener('onReady', function (event) {
      player.playVideo();
    });
  }

  // Load the YouTube API script asynchronously
  function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  // Call the function to load the YouTube API
  loadYouTubeAPI();




