HTML

1. HTML Bukan Bahasa Pemrograman
   - HTML bukan bahasa pemrograman tetapi bahasa markup. HTML adalah bahasa markup yang digunakan untuk membuat struktur dan menandai konten pada halaman web melalui serangkaian tag atau elemen, yang memberikan makna dan fungsi tertentu kepada teks dan elemen-elemen lainnya dalam dokumen HTML. Dengan HTML, pembuat halaman web dapat mengorganisir konten, menambahkan gambar, membuat tautan, serta membuat formulir dan tabel, sehingga menciptakan halaman web yang terstruktur dan terlihat secara visual menarik serta dapat diakses dengan mudah oleh pengguna melalui web browser.
   - lang en digunakan untuk optimasi SEO pada divisi digital marketer
   - pada dasarnya yang mengurusi HTML adalah SEO Engineer sedangkan para programmer baru mengurusi CSS dan Javascriptnya
     
3. Tag Meta
   - viewport : digunakan untuk menangkap ukuran halaman pada device yang berguna untuk dilakukan layouting web responsive, jika tidak terdapat viewport maka ukuran halaman device yang ditangap tidak akurat
   - atribut deskripsi : Atribut "deskripsi" (description) pada tag meta HTML digunakan untuk memberikan deskripsi singkat tentang konten halaman web. Deskripsi ini biasanya ditampilkan oleh mesin pencari seperti Google di hasil pencarian, memberikan gambaran singkat kepada pengguna tentang apa yang dapat mereka harapkan saat mengunjungi halaman tersebut. Deskripsi yang relevan dan menarik dapat meningkatkan kemungkinan bahwa pengguna akan mengklik halaman Anda dari hasil pencarian, sehingga membuat atribut "deskripsi" menjadi penting dalam upaya optimasi mesin pencari (SEO) dan meningkatkan lalu lintas ke situs web Anda.
   - atribut keyword : digunakan untuk optimasi SEO
     
5. Viewport
   - Viewport adalah area visual di layar perangkat yang digunakan untuk menampilkan konten sebuah halaman web. Dalam konteks pengembangan web responsif, meta tag <meta name="viewport"> digunakan untuk mengontrol bagaimana halaman web disesuaikan dengan ukuran layar dan orientasi perangkat pengguna.
   - Penggunaan viewport yang tepat memastikan bahwa halaman web responsif secara optimal menyesuaikan diri dengan berbagai ukuran layar, mulai dari perangkat mobile hingga desktop, sehingga pengguna dapat mengalami pengalaman yang konsisten dan optimal tanpa perlu melakukan zoom atau menggeser secara horizontal.
     
7. Form
   - form action method post : <form> adalah elemen dalam HTML yang digunakan untuk membuat formulir di halaman web. Dengan atribut action, Anda menentukan URL atau alamat yang akan menerima data yang dikirimkan melalui formulir setelah formulir tersebut disubmit, seperti <form action="proses.php">. Atribut method menentukan metode HTTP yang akan digunakan saat mengirimkan data formulir tersebut. Misalnya, jika Anda menggunakan <form action="proses.php" method="post">, itu berarti data dari formulir akan dikirimkan ke skrip PHP proses.php untuk diproses menggunakan metode HTTP POST. Dengan metode ini, data dikirim sebagai bagian dari tubuh permintaan HTTP, sehingga data formulir tidak akan terlihat di URL, yang membuatnya lebih aman dan lebih cocok untuk mengirim data yang sensitif seperti kata sandi.
     
9. Validasi
    - atribut validasi :
      a. type : Atribut "type" pada elemen input HTML digunakan untuk menentukan jenis input yang akan diterima oleh elemen tersebut. Misalnya, dengan nilai "text", elemen input akan menerima input berupa teks biasa, sedangkan dengan nilai "password", elemen input akan menerima input teks yang disembunyikan. Nilai lainnya seperti "email", "number", "checkbox", "radio", dan lainnya menentukan format dan perilaku input sesuai dengan kebutuhan aplikasi web.
      b. required : menjadikan input tersebut harus terisi sebelum dilakukan submit.
      c. minlength : menjadikan input tersebut memiliki minimal character yang harus diisikan, jika kurang dari minlength maka tidak bisa dilakukan submit
      d. maxlength : menjadikan input tersebut memiliki maksimal character untuk dilakukan input, jika kita kelebihan maka character akan berhenti di character yang maksimal

11. Semantic HTML
    - Semantic HTML merujuk pada penggunaan elemen HTML yang memiliki makna atau tujuan spesifik dalam struktur dokumen, yang membantu dalam memahami konten halaman web oleh mesin pencari, browser, dan pengembang web. Dengan menggunakan elemen-elemen semantic, seperti <header>, <nav>, <main>, <section>, <article>, <aside>, dan <footer>, kita dapat menandai bagian-bagian penting dari halaman web dengan cara yang jelas dan bermakna. Ini tidak hanya membantu dalam meningkatkan aksesibilitas dan SEO (Search Engine Optimization), tetapi juga memperbaiki struktur dan kerapian kode HTML, serta memudahkan untuk memelihara dan mengelola halaman web yang lebih besar. Dengan demikian, penggunaan semantic HTML adalah praktik terbaik dalam pengembangan web modern yang berfokus pada pembuatan konten yang lebih mudah dimengerti dan diakses oleh mesin dan manusia.
