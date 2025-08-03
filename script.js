(() => {
  const keepAliveURL = window.location.href.split("#")[0];
  const pageTitle = document.title || "Router Session";
  const interval = 60 * 1000;

  // Buat iframe tersembunyi untuk ping
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  // Buat toast status kiri atas
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.top = "20px";
  toast.style.left = "20px";
  toast.style.padding = "10px 18px";
  toast.style.fontSize = "14px";
  toast.style.color = "#fff";
  toast.style.background = "#007bff";
  toast.style.borderRadius = "6px";
  toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  toast.textContent = `🔁 ${pageTitle}\n${keepAliveURL}`;
  document.body.appendChild(toast);

  // Update isi toast tiap ping
  function updateToast() {
    const now = new Date().toLocaleTimeString();
    toast.textContent = `🔁 ${pageTitle}\n${keepAliveURL}\nAktif: ${now}`;
  }

  // Fungsi ping
  function keepSessionAlive() {
    iframe.src = keepAliveURL + "?t=" + Date.now();
    updateToast();
  }

  // Mulai otomatis
  setInterval(keepSessionAlive, interval);
  keepSessionAlive();
})();

// yang butuh jasa perbaikan rumah dan bangun baru atau renovasi hub via wa only : 082140014494