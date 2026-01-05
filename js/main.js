// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple subscribe button placeholder
const btn = document.getElementById("subscribeBtn");
if (btn) {
  btn.addEventListener("click", () => {
    const email = document.getElementById("email")?.value?.trim();
    if (!email) return alert("Enter an email to subscribe.");
    alert("Subscribed (placeholder). We'll wire this up later.");
  });
}
