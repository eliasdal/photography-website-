const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    document.querySelectorAll(".photo-card").forEach(card => {
      card.hidden = category !== "All" && card.dataset.category !== category;
    });
  });
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
document.querySelectorAll(".photo-open").forEach(button => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.src;
    lightboxImage.alt = button.dataset.alt || "Portfolio photograph";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}
document.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

document.querySelectorAll(".choose-session").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.querySelector("#session");
    const wanted = link.dataset.session;
    [...select.options].forEach(option => {
      if (option.textContent === wanted) select.value = option.textContent;
    });
  });
});

// Add your booking email address in the constant below before publishing.
const BOOKING_EMAIL = "ADD-YOUR-EMAIL-HERE";
document.querySelector("#booking-form")?.addEventListener("submit", event => {
  event.preventDefault();
  if (BOOKING_EMAIL === "ADD-YOUR-EMAIL-HERE") {
    alert("Before bookings can be sent, open script.js and replace ADD-YOUR-EMAIL-HERE with your photography email address.");
    return;
  }
  const form = new FormData(event.currentTarget);
  const subject = `Photography booking inquiry — ${form.get("session")}`;
  const body = [
    `Name: ${form.get("name")}`,
    `Email: ${form.get("email")}`,
    `Session: ${form.get("session")}`,
    `Preferred date: ${form.get("date") || "Flexible"}`,
    `Location idea: ${form.get("location") || "Not decided"}`,
    "",
    "Ideas / questions:",
    form.get("message") || "None added"
  ].join("\\n");
  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
document.querySelector("#year").textContent = new Date().getFullYear();
