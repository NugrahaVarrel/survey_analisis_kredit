# 📊 Survey & Analisis Kredit

Proyek ini adalah aplikasi **Survey & Analisis Kredit** berbasis **Angular** dengan tampilan modern (dark mode + glassmorphism).  
Aplikasi ini dibuat untuk simulasi proses survei kredit, perhitungan credit scoring, dan rekomendasi approval secara otomatis.

---

## 🚀 Features

- **Dashboard Utama**
  - Menampilkan daftar kreditur & status pengajuan.
  - Data dummy + input baru dari form.
  - Tabel tambahan: data approved & credit score.

- **Detail Survey**
  - Informasi lengkap kreditur.
  - Hasil validasi survei (alamat, pekerjaan, kondisi barang).
  - Hasil credit scoring dengan progress bar & kategori risiko.
  - Rekomendasi sistem + opsi ubah status manual.

- **Form Input Survey**
  - Input data kreditur baru.
  - Validasi form.
  - Upload kondisi jaminan.

- **Credit Scoring Logic**
  - Berdasarkan:
    - Kondisi Barang (Good/Bad)
    - Penghasilan (salary)
    - Pinjaman (loan)
  - Status otomatis:
    - **Approved** ✅ (score ≥ 80)
    - **Pending** ⏳ (50–79)
    - **Rejected** ❌ (score < 50)

- **Authentication Pages**
  - Login & Register (UI siap, integrasi API bisa ditambahkan).
  - Validasi form dengan Angular Reactive Forms.
  - Desain senada dengan dashboard (glassmorphism).

---

## 🛠️ Tech Stack

- **Frontend**: Angular 18 (standalone components)
- **Styling**: SCSS (dark theme + glassmorphism + gradient)
- **State/Data**: Dummy data & service Angular
- **Auth (UI only)**: Login & Register dengan Reactive Forms

---

## 📂 Project Structure

src/
└── app/
├── pages/
│ ├── dashboard/ # Dashboard utama
│ ├── survey-detail/ # Halaman detail survey
│ ├── form-survey/ # Form input survey
│ ├── login/ # Login page
│ └── register/ # Register page
│
└── shared/
├── component/ # Header, Card, Label, Table
├── service/ # Service untuk credit score, creditur, survey
└── interface/ # Interface (Creditur, Survey, CreditScore, Status)

---

## ⚙️ Installation & Setup

1. Clone repository:
   ```bash
   git clone https://github.com/username/survey-analisis-kredit.git
   cd survey-analisis-kredit
2. Install Depedencies
   npm install
3. Jalankan Aplikasi
   ng serve -o
4. Aplikasi akan terbuka di:
   http://localhost:4200

📸 Screenshots
## Dashboard
<img width="1918" height="980" alt="image" src="https://github.com/user-attachments/assets/1551a058-695e-4304-a334-9fc021a944fa" />

## Detail Survey
<img width="1918" height="978" alt="image" src="https://github.com/user-attachments/assets/01ae0d02-aec2-4ca1-82e6-38621f79046a" />

## Login & Register
<img width="1919" height="986" alt="image" src="https://github.com/user-attachments/assets/fbbd855b-f33d-43bc-a4d9-b323fb623a5c" />
<img width="1917" height="980" alt="image" src="https://github.com/user-attachments/assets/cfcc3315-f27e-4a72-b589-0c6ad34edf0a" />
