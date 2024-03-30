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
