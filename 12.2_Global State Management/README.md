# Resume: Global State Management dengan Redux pada React.js

## Pengertian Global State

Global state merupakan data yang dapat diakses dari berbagai bagian aplikasi tanpa perlu melewatinya dari satu komponen ke komponen lain secara langsung. Dengan menggunakan global state, kita dapat menyimpan informasi yang dibutuhkan oleh berbagai komponen di seluruh aplikasi.

## Tools Global State Redux

Redux merupakan sebuah library yang digunakan untuk mengelola state aplikasi secara global dalam ekosistem React.js. Redux memungkinkan kita untuk menyimpan semua state aplikasi dalam satu tempat yang disebut "store", dan komponen dapat mengakses state tersebut menggunakan "selectors" dan memperbarui state menggunakan "actions".

## Kasus yang Tepat untuk Menggunakan Redux Global State

Redux sangat berguna ketika aplikasi memiliki state yang kompleks dan dibagikan di antara banyak komponen, atau ketika ada banyak interaksi antara komponen yang memerlukan sinkronisasi state. Contoh kasus yang tepat untuk menggunakan Redux antara lain: aplikasi e-commerce dengan keranjang belanja yang perlu diakses dari banyak halaman, aplikasi yang menggunakan autentikasi pengguna, dan aplikasi yang memiliki banyak fitur interaktif yang bergantung pada state global.

## Redux Library & Tools

Library Redux terdiri dari beberapa bagian penting:
- **Store**: Tempat penyimpanan global state aplikasi.
- **Reducers**: Fungsi yang mengatur bagaimana state diubah berdasarkan actions yang diterima.
- **Actions**: Objek yang digunakan untuk mengirim data dari aplikasi Anda ke store.
- **Selectors**: Fungsi-fungsi yang digunakan untuk memilih data dari state Redux.

Selain itu, terdapat beberapa tools yang berguna untuk pengembangan dengan Redux, seperti Redux DevTools yang memungkinkan kita untuk melihat dan memperbarui state Redux secara interaktif.

## Komponen Penting di Redux dan Penjelasan

### Store
Store merupakan objek yang menyimpan seluruh state aplikasi. State di dalam store hanya dapat diubah melalui actions.

### Reducers
Reducers adalah fungsi-fungsi yang mengatur bagaimana state diubah berdasarkan actions yang diterima. Setiap reducer mengelola bagian tertentu dari state aplikasi.

### Actions
Actions merupakan objek yang digunakan untuk mengirim data dari aplikasi Anda ke store. Actions menggambarkan peristiwa yang terjadi di dalam aplikasi.

### Selectors
Selectors adalah fungsi-fungsi yang digunakan untuk memilih data dari state Redux. Selectors membantu kita untuk mengakses data dari state dengan cara yang terstruktur dan terisolasi.

## Instalasi

Untuk menggunakan Redux dalam proyek React.js, Anda perlu menginstal library Redux dan react-redux:

```bash
npm install redux react-redux
