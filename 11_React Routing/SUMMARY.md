**REACT ROUTING**
Date : Wednesday, 27 March 2024

* Single Page :
  - lebih berat ketika load awal
  + respon ketika berganti page lebih cepat

* One LMS Pake wordpress dengan multi page application
* path routes termasuk props
* end point yang bikin BE
* ketika memakai library lihat terlebih dahulu kapan terakhir di update
* library routing di panggil di main, ternyata tidak dipanggil pada seluruh page yang menggunakan library tsb

  
<h2>Routing</h2>
* Browser route as router dipanggil pada main : Ini mengindikasikan bahwa dalam aplikasi React, modul Router (misalnya BrowserRouter dalam React Router) biasanya diimpor dan digunakan di level paling atas aplikasi, yang dalam hal ini disebut "main".
* Routes dipanggil pada App.jsx :  Pada file App.jsx, komponen-komponen Route didefinisikan. Ini adalah tempat di mana Anda menentukan bagaimana setiap URL akan dipetakan ke komponen-komponen spesifik.
* Route dipanggil pada App.jsx : Merupakan referensi ke komponen Route yang menentukan pemetaan antara URL dan komponen yang akan ditampilkan ketika URL sesuai.
* path * untuk pages not found : Ini adalah aturan untuk menangani URL yang tidak cocok dengan rute apa pun yang telah ditentukan. Biasanya digunakan untuk menampilkan halaman "404 Not Found".
* path / untuk home : Ini menentukan bahwa URL "/" akan menampilkan komponen yang ditentukan sebagai halaman beranda aplikasi.
* Outlet untuk menampilan component route bersarang : Outlet adalah tempat di mana komponen-komponen yang sesuai dengan URL akan ditampilkan. Ini adalah konsep yang umum digunakan dalam sistem routing, terutama dalam konteks aplikasi yang kompleks dengan banyak level rute bersarang.
* Navigasi link "<Link to="/"> Home <Link/>" :  Ini menunjukkan penggunaan komponen Link untuk membuat tautan navigasi di aplikasi. Ketika diklik, tautan ini akan mengarahkan pengguna ke URL yang ditentukan, dalam hal ini "/", yang sesuai dengan halaman beranda.
* Outlet dipakein pada page parent route : Ini menunjukkan bahwa Outlet biasanya ditempatkan di komponen-komponen tingkat tertinggi atau "parent" dari rute-rute yang didefinisikan. Outlet bertanggung jawab untuk menampilkan komponen-komponen yang sesuai dengan URL yang saat ini ditampilkan.


<h3>Component Route Dinamis</h3>

* <Route path="/user" element={isLogin ? <Home/> : <Login/>
* Hooks Use Params digunakan untuk mengambil param tanpa params
* const (id) = useParam()


# PRIVATE ROUTING

* private routing mengacu pada praktik mengatur rute atau halaman dalam aplikasi web yang hanya dapat diakses oleh pengguna yang terotentikasi atau memiliki izin yang sesuai. Ini sering digunakan dalam aplikasi web yang memerlukan autentikasi pengguna, seperti aplikasi keuangan, media sosial, atau platform e-commerce.

* Sering kepake di industri atau project personal

* Dynamic routing : praktik dalam pengembangan aplikasi web di mana rute atau halaman yang ditampilkan kepada pengguna dapat berubah secara dinamis berdasarkan input atau kondisi tertentu. Ini memungkinkan aplikasi untuk menyesuaikan tampilan berdasarkan konteks atau informasi yang tersedia, seperti data pengguna, permintaan HTTP, atau keadaan aplikasi.

* Authentication : verifikasi identitas pengguna atau perangkat untuk memastikan bahwa mereka adalah entitas yang mereka klaim menjadi. Ini adalah langkah kunci dalam menjaga keamanan informasi dan mengontrol akses ke sumber daya atau layanan tertentu dalam sistem komputer.

* Authorization : proses pengendalian akses ke sumber daya atau layanan berdasarkan izin atau peran yang dimiliki oleh pengguna yang telah diverifikasi melalui proses autentikasi. Ini memastikan bahwa pengguna hanya memiliki akses ke informasi atau fungsi yang sesuai dengan peran atau izin yang telah ditetapkan untuk mereka.

* local storage : menyimpan data secara persisten di dalam browser pengguna. Data yang disimpan di local storage tetap ada bahkan setelah pengguna menutup browser dan membuka kembali halaman web yang sama.

* session storage : mekanisme penyimpanan data di browser web yang mirip dengan local storage, tetapi dengan perbedaan utama bahwa data yang disimpan dalam session storage hanya bertahan selama sesi browser yang sedang berlangsung. Artinya, data akan hilang setelah pengguna menutup tab atau jendela browser, atau setelah browser ditutup sepenuhnya.

* cookie : ile kecil yang disimpan di komputer pengguna oleh browser web saat mengunjungi suatu situs web. Cookie digunakan oleh situs web untuk menyimpan informasi tertentu tentang pengguna, seperti preferensi pengguna, data otentikasi, jejak sesi, atau informasi lain yang diperlukan.

* ai phind lebih oke daripada chatgpt

* login route mengimplementasikan private route

* gunakan outlet merujuk pada sebuah elemen di mana komponen anak dari suatu komponen tertentu akan dirender. Outlet digunakan dalam konteks routing untuk menentukan di mana konten dari setiap rute akan ditampilkan di dalam aplikasi React.

* ketika menggunakan local storage maka terlebih dahulu install npm react local storage

* fitur autentikasi yang megang hanya 1 anak

* logika pengecekan apakah sudah login diletakkan pada useEffect

* INTERN HARUS PAHAM AUTENTIKASI
