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
};

// Close modal when clicking the close button (x)
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Add event listeners to buttons
const rapidBtn = document.getElementById("rapidBtn");
const fastBtn = document.getElementById("fastBtn");
const normalBtn = document.getElementById("normalBtn");

rapidBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Optional: Close the modal after selection
});

fastBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Optional: Close the modal after selection
});

normalBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Optional: Close the modal after selection
});
