// Smooth scroll for internal links
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 800, // Animation duration in ms
    easing: "ease-out", // Easing function
    once: true, // Animation happens only once
    offset: 50, // Offset from the trigger point
    delay: 0, // Default delay
  });

  // Get all CTA buttons
  const ctaButtons = document.querySelectorAll("a.button");

  // Add hover effects for buttons
  ctaButtons.forEach((button) => {
    button.style.cursor = "pointer";
    button.style.transition = "all 0.3s ease";

    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
