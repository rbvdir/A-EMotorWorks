// Dynamic year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Dialog
const dialog = document.getElementById("quoteDialog");

// Open buttons
const openButtons = [
  "quoteBtnTop",
  "quoteBtnHero",
  "quoteBtnContact"
].map(id => document.getElementById(id)).filter(Boolean);

// Close buttons
const closeDialogBtn = document.getElementById("closeDialog");
const cancelDialogBtn = document.getElementById("cancelDialog");

// Open dialog
openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (dialog) dialog.showModal();
  });
});

// Close dialog
function closeDialog() {
  if (dialog && dialog.open) {
    dialog.close();
  }
}

if (closeDialogBtn) {
  closeDialogBtn.addEventListener("click", closeDialog);
}

if (cancelDialogBtn) {
  cancelDialogBtn.addEventListener("click", closeDialog);
}

// Close if clicking outside modal
if (dialog) {
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();

    const clickedOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (clickedOutside) {
      dialog.close();
    }
  });
}

// Form
const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameVal = document.getElementById("name")?.value.trim();
    const phoneVal = document.getElementById("phone")?.value.trim();
    const detailsVal = document.getElementById("details")?.value.trim();

    const to = "eric@aemotorworks.com";
    const subject = encodeURIComponent("Quote Request - A & E Motor Works & Storage");

    const bodyLines = [
      "Hi Eric,",
      "",
      "I'd like a quote for vehicle storage.",
      "",
      nameVal ? `Name: ${nameVal}` : "",
      phoneVal ? `Phone: ${phoneVal}` : "",
      detailsVal ? `Details: ${detailsVal}` : "",
      "",
      "Thanks,"
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    closeDialog();
  });
}
