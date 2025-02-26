// JavaScript for interactive features (e.g., form submission)
document
  .getElementById("feedback-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your feedback!");
  });

// JavaScript for navigation (e.g., smooth scrolling)
document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  })
);

// Show/hide year of completion field
document.getElementById("role").addEventListener("change", function () {
  const yearGroup = document.getElementById("year-group");
  if (this.value === "student") {
    yearGroup.style.display = "block";
  } else {
    yearGroup.style.display = "none";
  }
});

// Handle form submission
document
  .getElementById("feedback-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your feedback!");
    this.reset();
  });
