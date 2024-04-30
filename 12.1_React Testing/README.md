# Resume: React Testing

## Pengertian Testing
Testing dalam pengembangan perangkat lunak adalah proses untuk memastikan bahwa kode yang dibuat berfungsi sebagaimana yang diharapkan. Dalam konteks React, testing bertujuan untuk memastikan komponen React berperilaku sesuai dengan yang diinginkan.

## Manfaat Testing
1. Mendeteksi bug dan kesalahan sejak awal.
2. Menjamin kualitas kode.
3. Memastikan kesesuaian antara fitur yang diharapkan dan hasil yang dihasilkan.
4. Meningkatkan kepercayaan pengembang dan pengguna terhadap aplikasi.

## Tools Jest dan React Testing Library
### Jest
Jest adalah framework pengujian JavaScript yang kuat dan mudah digunakan untuk menguji kode React. Jest menyediakan fitur seperti mocking, assertion yang kuat, dan kemampuan untuk menulis dan menjalankan tes dengan cepat.

### React Testing Library
React Testing Library adalah alat pengujian untuk React yang membantu dalam menulis tes yang bersifat user-centric. Alat ini fokus pada pengujian fungsional, yang memastikan bahwa komponen berperilaku sesuai dengan yang diharapkan oleh pengguna.

## Instalasi
Untuk menginstal Jest dan React Testing Library pada proyek React, ikuti langkah-langkah berikut:

1. Pastikan proyek React Anda sudah terinisialisasi. Jika belum, jalankan perintah `npx create-react-app nama-proyek` untuk membuat proyek baru.
2. Masuk ke direktori proyek dengan perintah `cd nama-proyek`.
3. Instal Jest dan React Testing Library dengan menjalankan perintah:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom
