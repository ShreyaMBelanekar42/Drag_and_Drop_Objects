const draggables = document.querySelectorAll(".draggable");
const leftBox = document.querySelector(".left-box");
const rightBox = document.querySelector(".right-box");

// Function to show message

function showMessage() {
  const message = document.getElementById("message");
  message.style.display = "block";
  message.textContent = "Dragging Successful!!";

  setTimeout(function () {
    message.style.display = "none";
  }, 3000);
}

// Function to reset both containers and its items

function reset() {
  const leftContainer = document.querySelector(".left-box");
  const rightContainer = document.querySelector(".right-box");
  const data = document.querySelectorAll(".draggable");

  // Reset first container
  leftContainer.innerHTML = "";
  leftContainer.innerHTML = `
  <p class="draggable" draggable="true">Hello! I am a text.</p>
  <img
    src="./assests/img1.jpeg"
    alt="img"
    class="draggable"
    draggable="true"
  />
  <div class="flex-icons">
    <img
      src="./assests/user.png"
      alt="icon"
      class="icon draggable"
      draggable="true"
    />
    <img
      src="./assests/computer.png"
      alt="icon"
      class="icon draggable"
      draggable="true"
    />
  </div>
  <h2 class="draggable" draggable="true">
    Hello! I am a h2 bold text.
  </h2>
  <img
    src="./assests/img2.jpeg"
    alt="img"
    class="draggable"
    draggable="true"
  />
  `;

  // Reset second container
  rightContainer.innerHTML = "";
}

for (item of draggables) {
  // handling drag start event

  item.addEventListener("dragstart", function (e) {
    e.target.style.opacity = "0.5";
    let selected = e.target;

    // handling drag over event

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    // handling drag drop event

    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;

      // displaying successful message everytime when item is dragged
      showMessage();
    });
  });

  item.addEventListener("dragend", function (e) {
    e.target.style.opacity = "1";
  });
}
