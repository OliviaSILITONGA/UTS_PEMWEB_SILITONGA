/* 🌗 DARK / LIGHT MODE TOGGLE*/
const toggleBtn = document.getElementById("toggleMode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Ubah teks tombol sesuai mode
    if (document.body.classList.contains("light")) {
      toggleBtn.textContent = "🌞 Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
}

/* 📨 KONTAK (klik email / instagram)*/
const emailEl = document.getElementById("email");
const igEl = document.getElementById("ig");

if (emailEl) {
  emailEl.addEventListener("click", () => {
    alert("📧 Buka aplikasi email untuk menghubungi Olivia.");
  });
}

if (igEl) {
  igEl.addEventListener("click", () => {
    alert("📸 Buka Instagram: @oliviagabriella03");
  });
}

/* 🧭 SIDEBAR COLLAPSE */
const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");

if (toggleSidebar && sidebar) {
  toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");

    // Simpan status sidebar di localStorage
    if (sidebar.classList.contains("collapsed")) {
      localStorage.setItem("sidebarCollapsed", "true");
    } else {
      localStorage.setItem("sidebarCollapsed", "false");
    }
  });

  // Saat halaman dimuat ulang, baca status terakhir
  window.addEventListener("DOMContentLoaded", () => {
    const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    if (isCollapsed) {
      sidebar.classList.add("collapsed");
    } else {
      sidebar.classList.remove("collapsed");
    }
  });
}

/*💬 FOOTER ANIMASI (Kutipan Berganti)*/
const quotes = [
  '"Memang banyak cobaan, tapi begitulah kehidupan..."',
  '"Lebih baik kita menderita sekarang, daripada kita menderita pada masa mendatang~"',
  '"Jangan takut gagal, coba lagi!"',
  '"Hari ini lebih baik dari kemarin."',
];
let idx = 0;

setInterval(() => {
  const footer = document.getElementById("footerText");
  if (!footer) return;
  idx = (idx + 1) % quotes.length;
  footer.textContent = quotes[idx];
}, 4000);
