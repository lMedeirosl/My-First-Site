// Animação de entrada ao rolar a página com IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");

function initRevealAnimation() {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("active"));
  }
}

// Controle da barra de navegação fixa e menu mobile
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function handleNavbarScroll() {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Filtro de categorias do cardápio
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.getAttribute("data-category");

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    menuItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      if (selectedCategory === "todos" || itemCategory === selectedCategory) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// Validação do formulário de newsletter
const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email-input");
const formFeedback = document.getElementById("form-feedback");

if (newsletterForm && emailInput && formFeedback) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formFeedback.classList.remove("success", "error");

    if (!emailValue || !emailRegex.test(emailValue)) {
      formFeedback.textContent = "Por favor, insira um endereço de e-mail válido.";
      formFeedback.classList.add("error");
      return;
    }

    formFeedback.textContent =
      "Inscrição confirmada. Obrigado por fazer parte do Clube do Grão Aurora.";
    formFeedback.classList.add("success");
    newsletterForm.reset();
  });
}

window.addEventListener("scroll", handleNavbarScroll);
window.addEventListener("DOMContentLoaded", () => {
  handleNavbarScroll();
  initRevealAnimation();
});
