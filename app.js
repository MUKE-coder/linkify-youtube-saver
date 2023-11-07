const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const linkInput = document.getElementById("link");
const videoContainer = document.querySelector(".videos-container");
// Adding the eventlistener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); //To remove the default form behaviour
  const title = titleInput.value;
  const link = linkInput.value;
  if (!title || !link) {
    alert("All fields are required");
  }
  console.log(title, link);
  renderVideo(link, title);
});

function renderVideo(linkString, title) {
  // const linkString = "https://youtu.be/U9mJuUkhUzk";
  const linkStringArr = linkString.split("/");
  const videoId = linkStringArr[3];
  console.log(videoId);
  const videoHTML = `
  <div class="video-card">
        <iframe
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h2 class="video-title">${title}</h2>
        <div class="flex">
          <h2 class="video-link">
           ${linkString}
          </h2>
          <button class="copy-btn">Copy Link</button>
        </div>
      </div>
  `;
  videoContainer.insertAdjacentHTML("afterbegin", videoHTML);
}
