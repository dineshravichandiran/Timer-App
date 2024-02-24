document.addEventListener("DOMContentLoaded", function () {
  const timerContainer = document.querySelector(".timer-container");
  const form = document.querySelector(".settime");
  const notimer = document.querySelector(".notimer");
  const timerAudio = document.getElementById("timerAudio");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    notimer.classList.add("istimers");
    let hours = parseInt(document.querySelector(".hours").value);
    let minutes = parseInt(document.querySelector(".minutes").value);
    let seconds = parseInt(document.querySelector(".seconds").value);
    console.log(hours, minutes, seconds);

    const timeContainer = document.createElement("div");
    timeContainer.className = "entered-time";
    timerContainer.appendChild(timeContainer);

    const timer = setInterval(updateTime, 1000);
    updateTime();

    function updateTime() {
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(timer);

            timeContainer.innerHTML = `
                 <p class="timer-up">Timer is Up!</p>
                <button class="delete-btn stop-btn">Stop</button>
              `;
            timeContainer.style.backgroundColor = "#F0F757";
            timerAudio.play();
            return;
          }
        }
      }

      timeContainer.innerHTML = `
          Time Left: <p>${hours} hours</p>
          : <p>${minutes} minutes</p>
          : <p>${seconds} seconds</p>
          <button class="delete-btn">Delete</button>
        `;
    }

    form.reset();
  });

  timerContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest(".entered-time").remove();
    }
  });
});

// This is the final code++
