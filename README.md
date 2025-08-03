# 🛡️ Router Session Keeper

Script JavaScript untuk menjaga sesi login tetap aktif pada halaman admin router (ZTE dan Huawei), mencegah auto-logout akibat timeout. Cukup copy-paste script ke DevTools Console browser (Chrome) dan nikmati pengalaman konfigurasi router tanpa gangguan logout.

---

## 📌 Fitur

- Menjaga sesi tetap aktif secara otomatis (auto-refresh atau keep-alive).
- Mendukung router ZTE dan Huawei.
- Menampilkan *toast* atau notifikasi kecil di layar sebagai umpan balik.
- Secara dinamis menampilkan judul halaman dan URL sebagai bagian dari notifikasi.
- Dapat disesuaikan dengan router lain.

---

## 🧪 Cara Pakai

### 1. Akses router dengan cara biasa menggunakan alamat ip sesuai router
- contoh: `http://192.168.100.1`

### 2. Tekan `F12` untuk membuka **Developer Tools**, lalu ke tab **Console**.

### 3. Copy-paste salah satu script berikut:

#### script
```js
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
```
---

🤝 Kredit
Proyek ini dikembangkan oleh yudibilly dengan bantuan ChatGPT dari OpenAI sebagai asisten teknis dan ide.
