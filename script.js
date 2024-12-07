const sound = document.querySelector(".sound-cloud");
const off = document.querySelector("#off");
const on = document.querySelector("#on");
const myAudio = document.querySelector("#myAudio");

off.addEventListener("click", () => soundTrack("off"));
on.addEventListener("click", () => soundTrack("on"));

const soundTrack = (soundState) => {
  if (soundState === "off") {
    on.style.display = "block";
    off.style.display = "none";
    sound.style.color = "#08fdd8";
    myAudio.play();
  } else if (soundState === "on") {
    on.style.display = "none";
    off.style.display = "block";
    sound.style.color = "#f50057";
    myAudio.pause();
  }
};

// For Header scroll

let nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// For nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// video

let video = document.getElementById("myvideo");

let myvideo = () => {
  video.style.display = "none";
};

setTimeout(myvideo, 7000);

const experiences = document.querySelectorAll(".experience-section");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentPage = 0;

function updatePagination() {
  // Show the current experience
  experiences.forEach((exp, index) => {
    exp.classList.toggle("active", index === currentPage);
  });

  // Update button states
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === experiences.length - 1;
}

// Event Listeners for Pagination Buttons
prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updatePagination();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < experiences.length - 1) {
    currentPage++;
    updatePagination();
  }
});

// Initialize the first page
updatePagination();
