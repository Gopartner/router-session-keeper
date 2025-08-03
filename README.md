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

### 1. Buka halaman admin router:
- ZTE: `http://192.168.100.2/start.ghtml`
- Huawei: `http://192.168.100.1/index.asp`

### 2. Tekan `F12` untuk membuka **Developer Tools**, lalu ke tab **Console**.

### 3. Copy-paste salah satu script berikut:

#### Untuk Router Huawei
```js
// Paste isi file huawei-keepalive.js di sini
