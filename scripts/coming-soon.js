document.addEventListener("DOMContentLoaded", () => {
  // Form submission handling
  const form = document.querySelector("#notifyForm");
  const message = document.querySelector(".success-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/65fc2db5876b12441ac4866b5bf95881", {
        method: "POST",
        body: formData,
      });

      form.style.display = "none";
      message.classList.add("visible");

      setTimeout(() => {
        message.classList.remove("visible");
        form.reset();
        form.style.display = "flex";
      }, 5000);
    } catch (error) {
      alert("Failed to join. Please try again later.");
    }
  });

  // Fade on scroll animation
  const fadeElements = document.querySelectorAll('.fade-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));
});