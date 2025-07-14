const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    highlightStars(index);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(selectedRating - 1);
  });

  star.addEventListener("click", () => {
    selectedRating = index + 1;
    highlightStars(index);
    ratingValue.textContent = "Rating: " + selectedRating;
  });
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("hover");
    } else {
      star.classList.remove("hover");
    }
  });
}


 document.querySelectorAll(".hire-btn").forEach(button => {
    button.addEventListener("click", function () {
      document.getElementById("formModal").style.display = "block";
    });
  });

  // Close modal on X
  document.getElementById("closeBtn").onclick = function () {
    document.getElementById("formModal").style.display = "none";
  };

  // Close modal on outside click
  window.onclick = function (event) {
    if (event.target == document.getElementById("formModal")) {
      document.getElementById("formModal").style.display = "none";
    }
  };

  function sendOtp() {
    const email = document.getElementById("email").value;
    if (email) {
      alert("OTP sent to " + email);
    } else {
      alert("Please enter your email first.");
    }
  }

  document.getElementById("hireForm").onsubmit = function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    this.reset();
    document.getElementById("formModal").style.display = "none";
  };