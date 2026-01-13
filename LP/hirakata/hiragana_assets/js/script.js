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
  const ctaButtons = document.querySelectorAll("button");

  // Add click handlers for WhatsApp and Registration buttons
  ctaButtons.forEach((button) => {
    const buttonText = button.textContent.trim();

    if (buttonText.includes("Konsultasi WA")) {
      button.addEventListener("click", function () {
        // Replace with actual WhatsApp number
        const whatsappNumber = "6281234567890"; // Update this
        const message = encodeURIComponent(
          "Halo, saya tertarik dengan Kelas Hiragana & Katakana"
        );
        window.open(
          `https://wa.me/${whatsappNumber}?text=${message}`,
          "_blank"
        );
      });
    } else if (
      buttonText.includes("Daftar Sekarang") ||
      buttonText.includes("Ambil Promo")
    ) {
      button.addEventListener("click", function () {
        // Scroll to pricing section or open registration form
        const pricingSection = document.querySelector(
          "section.bg-\\[\\#111827\\]"
        );
        if (pricingSection && !buttonText.includes("Ambil Promo")) {
          pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Add your registration form link here
          alert("Form pendaftaran akan dibuka di sini");
        }
      });
    }
  });

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
