// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  // --- IMPORTANT: Clear nav-open on page load ---
  document.body.classList.remove("nav-open");

  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainNavigation = document.querySelector(".main-navigation");

  if (mobileNavToggle && mainNavigation) {
    mobileNavToggle.addEventListener("click", function () {
      mainNavigation.classList.toggle("active");
      document.body.classList.toggle("nav-open");
    });

    // Close nav when a link is clicked - ALLOW NATURAL NAVIGATION
    const navLinks = mainNavigation.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Just close the menu, don't prevent default
        mainNavigation.classList.remove("active");
        document.body.classList.remove("nav-open");
        // Let the browser handle navigation naturally
      });
    });
  }

  // Smooth scrolling for anchor links (if any are added later)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // --- Background Image Slideshow for Hero Section ---
  const slideshowContainer = document.querySelector(".hero-slideshow");
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  if (slideshowContainer && slides.length > 0) {
    // Show first slide
    slides[currentSlide].classList.add("active");

    // Auto slideshow
    setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  }

  // --- Scroll-reveal animations ---
  const sections = document.querySelectorAll(".main-content .section");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of the section must be visible
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // --- Header Scroll Behavior ---
  let lastScrollTop = 0;
  const header = document.querySelector(".site-header");

  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Downscroll
        header.classList.add("scrolled-down");
      } else {
        // Upscroll
        header.classList.remove("scrolled-down");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    },
    false
  );

  // --- Admission Form Modal ---
  const modal = document.getElementById("admission-form-modal");
  const openBtn = document.getElementById("open-form-btn");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("admission-form");

  if (modal && openBtn && closeBtn && form) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const studentName = document.getElementById("student-name").value;
      const fatherName = document.getElementById("father-name").value;
      const qualification = document.getElementById("qualification").value;
      const subject = document.getElementById("subject").value;
      const mobileNumber = document.getElementById("mobile-number").value;

      // --- IMPORTANT: Replace with the actual WhatsApp number ---
      const whatsappNumber = "919450438523"; // Replace with your WhatsApp number

      const message = `
                *New Admission Inquiry*

                *Name:* ${studentName}
                *Father's Name:* ${fatherName}
                *Qualification:* ${qualification}
                *Subject:* ${subject}
                *Mobile Number:* ${mobileNumber}
            `;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      modal.style.display = "none";
      form.reset();
    });
  }

  // --- Fetch and display notices ---
  const noticeContainer = document.querySelector("#notice-board .notice-container");

  async function loadNotices() {
    if (!noticeContainer) return;

    try {
      const response = await fetch("notices.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const notices = await response.json();

      noticeContainer.innerHTML = ""; // Clear existing notices

      notices.forEach((notice) => {
        const noticeElement = document.createElement("div");
        noticeElement.classList.add("notice-item");

        const titleElement = document.createElement("h4");
        titleElement.textContent = notice.title;

        const dateElement = document.createElement("p");
        dateElement.classList.add("notice-date");
        dateElement.textContent = new Date(notice.date).toLocaleDateString();

        const contentElement = document.createElement("p");
        contentElement.textContent = notice.content;

        noticeElement.appendChild(titleElement);
        noticeElement.appendChild(dateElement);
        noticeElement.appendChild(contentElement);

        noticeContainer.appendChild(noticeElement);
      });
    } catch (error) {
      console.error("Error loading notices:", error);
      noticeContainer.innerHTML =
        "<p>Notices are currently unavailable. Please try again later.</p>";
    }
  }

  loadNotices();

  // --- Fetch and display upcoming events ---
  const eventsContainer = document.querySelector("#events-board .events-container");

  async function loadEvents() {
    if (!eventsContainer) return;

    try {
      const response = await fetch("events.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const events = await response.json();

      eventsContainer.innerHTML = ""; // Clear existing events

      events.forEach((event) => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event-item");

        const titleElement = document.createElement("h4");
        titleElement.textContent = event.title;

        const dateElement = document.createElement("p");
        dateElement.classList.add("date");
        dateElement.textContent = new Date(event.date).toLocaleDateString();

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = event.description;

        eventElement.appendChild(titleElement);
        eventElement.appendChild(dateElement);
        eventElement.appendChild(descriptionElement);

        eventsContainer.appendChild(eventElement);
      });
    } catch (error) {
      console.error("Error loading events:", error);
      eventsContainer.innerHTML =
        "<p>Upcoming events are currently unavailable. Please try again later.</p>";
    }
  }

  loadEvents();
});
