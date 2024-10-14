///////////////////////////////////
///// Modal:

// Get modal element
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// Get the element where the dynamic text will be set
const modalText = document.getElementById("modalText");

// Add double-click event listener to open the modal
chatHeaderName.ondblclick = function () {
  // Set the text dynamically when modal opens
  modalText.innerHTML = `How fast should ${npcName} type?`;

  // Show the modal
  modal.style.display = "block";

  modalOpen = true;
};

let modalOpen = false;

// Close modal when clicking the close button (x)
closeBtn.onclick = function () {
  modal.style.display = "none";
  modalOpen = false;
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    modalOpen = false;
  }
};

// Add event listeners to buttons
const rapidBtn = document.getElementById("rapidBtn");
const fastBtn = document.getElementById("fastBtn");
const normalBtn = document.getElementById("normalBtn");

rapidBtn.addEventListener("click", function () {
  textingDelayMultiplier = 800;
  beforeTextingDelayChosenValue = 500;
  modal.style.display = "none"; // Optional: Close the modal after selection
});

fastBtn.addEventListener("click", function () {
  textingDelayMultiplier = 40;
  beforeTextingDelayChosenValue = 250;
  modal.style.display = "none"; // Optional: Close the modal after selection
});

normalBtn.addEventListener("click", function () {
  textingDelayMultiplier = 10;
  beforeTextingDelayChosenValue = 50;
  modal.style.display = "none"; // Optional: Close the modal after selection
});

// Add an event listener to the whole document to detect key presses
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the letter "i" (case-insensitive)
  if ((event.key === "i" || event.key === "I") && modalOpen) {
    alert("NPC typing speed is set to instantaneous");

    textingDelayMultiplayer = 0;
    beforeTextingDelay = 0;

    modal.style.display = "none"; // Optional: Close the modal after selection
  }
});
