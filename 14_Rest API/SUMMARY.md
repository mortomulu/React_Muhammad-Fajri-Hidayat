**RESTfull API**

RESTful API adalah pendekatan dalam pengembangan web untuk merancang layanan web yang dapat diakses dan dapat diakses secara terdistribusi. Istilah "REST" sendiri singkatan dari "Representational State Transfer". API ini didasarkan pada prinsip-prinsip REST, yang mencakup:

Stateless Communication: Setiap permintaan dari klien ke server harus mengandung semua informasi yang diperlukan untuk memahami permintaan tersebut, dan server tidak menyimpan status sesi klien antara permintaan.

Resource-Based: API RESTful berfokus pada sumber daya (resources), yang direpresentasikan sebagai URI (Uniform Resource Identifier). Setiap sumber daya memiliki URI unik yang memungkinkan klien untuk mengaksesnya.

CRUD Operations: API RESTful mendukung operasi CRUD (Create, Read, Update, Delete) pada sumber daya, yang diimplementasikan melalui metode HTTP seperti GET, POST, PUT, dan DELETE.

Uniform Interface: API RESTful menggunakan antarmuka yang konsisten untuk berinteraksi dengan sumber daya, yang mencakup format data yang umum seperti JSON atau XML, serta menggunakan operasi standar HTTP.

Client-Server Architecture: RESTful API memisahkan antara klien dan server, yang berarti klien tidak perlu tahu bagaimana data disimpan atau dikelola di server, dan server tidak perlu tahu bagaimana data digunakan oleh klien.

Dengan menggunakan RESTful API, pengembang dapat merancang layanan web yang mudah diakses, dapat diakses oleh berbagai klien (seperti aplikasi web, aplikasi seluler, dan perangkat IoT), dan memungkinkan integrasi yang fleksibel antara berbagai sistem dan platform.

* Menggunakan axios untuk melakukan fetching data pada API
* Menggunakan async await untuk mengolah data agar tidak menjadi promise


**Friday, 19 April 2024**

* Bestpractice dalam fetching data itu dilakukan hanya sekali saat melakukan load page pertama, kemudian simpan di state dan mainkan statenya
* Ketika melakukan fetching menggunakan try catch agar tidak error saat api rusak
* melakukan definisi state error, agar pesan state dapat dimunculkan dala UI
* useQuery tanstack query enak banget buat handling
* fetching data diletakkan pada folder utils dan dalam folder api
* menyimpan fungsi di tempat berbeda dengan komponen untuk menganut OOP
* error massages ditangkap valuenya dalam state kemudian ditampilkan sebagai komponen dalam satu file
* jangan melakukan ambil data pada api berkali kali
* delete array state data api menggunakan method filter
* dalam pembuatan api spek, fe yang paling bertanggung jawab


**AUTHETENTICATION & AUTHORIZATION**
<hr/>
*Monday, 22 April 2024*

* HARUS PAHAM SISI BACKEND DAN SISI FRONTEND DALAM AUTENTIKASI
* capstone belum pake jwt, hanya pake state static
* otentikasi : mengecek user apakah sudah terdaftar dalam server
* otorisasi : hak apa saja yang bisa dilakukan dan diakses oleh user berdasarkan data yang terdaftar di server
* buat fungsi pada setiap page agar ketika belum login maka akan terus menavigate ke page login
* rotuing ni cukup ribet, berhubungan dengan otentikasi dan otorisasi jadi perlu pendalaman
* localStorage.setItem(), untuk mengisi local storage set item
* melakukan pengecekan pada local storage pada setiap halaman apakah sudah login, jika blm login maka akan redirect ke page login
* JSON.parse ni merubah tipe data string ke tipe data object
* pada standart industri fungsi fungsi diletakkan pada folder utils
* lebih bagus pake public dan private routing
* otentikasi yang paling bagus menggunaan JWT, token ada di local storage dan DB dan kemudian dilakukan pengecekan apakah cocok