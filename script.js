const rating_option = document.querySelectorAll(".ratings_count");
let data = null;
rating_option.forEach((A) => {
  A.addEventListener("click", (B) => {
    data = B.target.value;
    console.log("selected rating: ", data);
  });
});

const ratingButtons = document.querySelectorAll(".ratings_count");

let selectedButton = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (selectedButton !== null) {
      selectedButton.style.backgroundColor = "hsl(213, 19%, 23%)";
      selectedButton.style.color = "hsl(217, 12%, 63%)";
    }

    const ratingValue = button.value;

    button.style.backgroundColor = getColorForRating(ratingValue);

    button.style.color = getcolor(ratingValue);
    selectedButton = button;
  });
});

function getColorForRating(rating) {
  switch (rating) {
    case "1":
      return "hsl(25, 97%, 53%)";
    case "2":
      return "hsl(25, 97%, 53%)";
    case "3":
      return "hsl(25, 97%, 53%)";
    case "4":
      return "hsl(25, 97%, 53%)";
    case "5":
      return "hsl(25, 97%, 53%)";
    default:
      return "";
  }
}
function getcolor(rating) {
  switch (rating) {
    case "1":
      return "white";
    case "2":
      return "white";
    case "3":
      return "white";
    case "4":
      return "white";
    case "5":
      return "white";
    default:
      return "";
  }
}

var selectedRate = null;

function submitForm() {
  if (selectedRate) {
    sessionStorage.setItem("selectedRate", selectedRate);
    window.location.href = "page2.html";
  } else {
    alert("Please select a rating before submitting");
  }
}

function selectRate(button) {
  var selectedButtons = document.querySelectorAll(".ratings_count.selected");
  selectedButtons.forEach(function (selectedButton) {
    selectedButton.classList.remove("selected");
  });

  button.classList.add("selected");
  selectedRate = button.value;
}


