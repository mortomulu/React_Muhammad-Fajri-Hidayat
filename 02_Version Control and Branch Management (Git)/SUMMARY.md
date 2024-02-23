VERSION CONTROL AND BRANCH MANAGEMENT GIT & GITHUB

1. Cara Membuat Repository pada Github
   - Untuk membuat repositori di GitHub, masuklah ke akun Anda, lalu klik tombol "+" di pojok kanan atas layar dan pilih "New repository". Isi informasi seperti nama repositori, deskripsi (jika diperlukan), dan pilih apakah repositori akan publik atau privat. Anda juga bisa memilih untuk memulai repositori dengan file README. Setelah itu, klik "Create repository" dan repositori baru Anda akan dibuat. Anda dapat mulai mengelola file, menulis kode, atau melakukan tindakan lain sesuai kebutuhan proyek Anda di halaman repositori yang baru dibuat tersebut. Jangan lupa untuk mengatur izin akses sesuai dengan kebutuhan proyek Anda.
     
3. Cara ADD Colaborator
   - Untuk menambahkan collaborator masuk ke menu setting dan masuk ke add collaborator kemudian search nama collaborator dengan username collaborator yang diundang dan kemudian add collaborator
     
5. Cara Commit
   - Untuk melakukan commit pada GitHub menggunakan CLI, pertama-tama, Anda perlu menyiapkan perubahan yang ingin disimpan dengan menggunakan perintah git add untuk menambahkan perubahan ke staging area. Setelah itu, Anda bisa membuat commit dengan menggunakan perintah git commit -m "pesan commit Anda" untuk menjelaskan perubahan yang Anda lakukan. Terakhir, gunakan perintah git push untuk mengirimkan commit Anda ke repositori GitHub. Pastikan Anda telah menentukan remote repository dengan perintah git remote add origin <URL-repositori-Anda> sebelum melakukan push, dan ganti <URL-repositori-Anda> dengan URL repositori GitHub Anda.
    
7. Cara Clone Github
   - Untuk melakukan cloning repositori dari GitHub, Anda pertama-tama salin URL repositori yang ingin Anda kloning dari tombol "Code" di halaman repositori. Buka terminal atau command prompt, lalu navigasikan ke direktori tempat Anda ingin menyimpan repositori yang akan Anda kloning menggunakan perintah cd. Setelah itu, gunakan perintah git clone diikuti dengan URL repositori yang telah Anda salin. Pastikan untuk mengganti <URL-repositori> dengan URL yang tepat. Jika repositori privat, Anda mungkin diminta memasukkan kredensial GitHub (username dan password/token akses) untuk mengaksesnya. Setelah menjalankan perintah clone, repositori akan diunduh ke komputer lokal Anda dan siap untuk digunakan.
     
8. Cara Pembuatan Folder Github dan Penamaan File Readme.md
   - Membuat folder secara manual kemudian tinggal melakukan copypaste folder sehingga tidak memakan waktu yang banyak dan melakukan rename
   - Penomoran folder jika hanya satu angka, depannya harus diberi angka 0
   - readme.md harus ditulis dengan capslock seperti README.md
     
10. Cara Menulis Readme.md menggunakan tools AI
    - untuk cara menuliskan readme kita tinggal melakukan copy terhadap codingan pada repository kita, kemudian beralih ke chatGPT dan melakukan paste dan memberi pesan untuk membuatkan teks README.md untuk codingan tersebut.
      
12. Menyelesaikan Konflik
    - Untuk menyelesaikan konflik pada GitHub, pertama-tama Anda perlu memahami sumber konflik yang terjadi, yang biasanya muncul saat penggabungan (merge) atau pengambilan (pull) perubahan dari repositori yang memiliki konflik. Identifikasi konflik dengan mencari tanda khusus seperti "<<<<<<<", "=======", dan ">>>>>>>", yang menandakan bagian yang bertentangan dalam file. Buka file yang terlibat, atasi konflik dengan mengedit bagian yang bertentangan sesuai kebutuhan, dan simpan perubahan tersebut. Kemudian tambahkan dan commit perubahan menggunakan git add dan git commit, lalu gunakan git push untuk mengunggah perubahan Anda ke repositori GitHub. Dengan langkah-langkah ini, konflik akan terselesaikan, memungkinkan Anda untuk melanjutkan kerja kolaboratif pada proyek GitHub.
      
14. Code Review
    - Pada GitHub, code review adalah proses dimana anggota tim atau kontributor proyek melihat, meninjau, dan memberikan umpan balik terhadap kode yang diajukan untuk dimasukkan (pull request) ke repositori proyek. Proses ini membantu memastikan kualitas, keamanan, dan kepatuhan kode dengan standar proyek dan memfasilitasi kolaborasi yang efektif antar tim. Untuk melakukan code review di GitHub, seseorang biasanya akan membuat pull request dengan perubahan kode yang diusulkan. Kemudian, anggota tim atau kontributor lainnya akan melakukan review terhadap perubahan tersebut, memberikan komentar, saran perbaikan, atau persetujuan. GitHub menyediakan berbagai fitur untuk memudahkan proses ini, termasuk komentar pada baris kode, penandaan perubahan, dan alat untuk melihat perbandingan antara versi kode yang lama dan yang baru. Proses code review ini menjadi penting untuk menjaga kualitas kode, mempromosikan praktik terbaik, dan memfasilitasi pertukaran pengetahuan di dalam tim pengembangan perangkat lunak.
      
16. Git Branching
    - Fungsinya agar jika menambah fitur tanpa mengganggu codingan yang berada di main dan bisa dikerjakan secara tim dengan membagi fitur yang akan di development
    - Untuk membuat branch pada GitHub, buka repositori yang ingin Anda gunakan, lalu klik dropdown yang menampilkan nama branch saat ini di atas daftar file. Setelah itu, masukkan nama branch baru yang Anda inginkan di kotak teks yang muncul, pastikan nama tersebut deskriptif dan relevan dengan perubahan yang akan Anda kerjakan. Setelah memberi nama, tekan tombol "Create branch" atau "New branch", dan branch baru akan dibuat berdasarkan branch yang sedang aktif. Dengan langkah ini, Anda telah berhasil membuat branch baru di repositori GitHub, yang memungkinkan Anda untuk mengembangkan fitur atau membuat perubahan tanpa mempengaruhi branch utama.
    - jika terdapat konflik maka melakuakn pull request dan menyelesaikan konflik terlebih dahulu
    - lakukan merge jika konflik sudah benar
      
18. Git Merge
    - Git merge adalah proses menggabungkan perubahan dari dua atau lebih branch dalam repositori Git. Saat melakukan merge, Git akan mencoba untuk menggabungkan perubahan dari branch yang berbeda ke dalam satu branch target. Proses ini berguna untuk mengintegrasikan perubahan yang dilakukan di branch lain ke dalam branch utama, seperti main atau master.
    - Untuk melakukan merge branch menggunakan Git, mulailah dengan beralih ke branch tujuan tempat Anda ingin menggabungkan perubahan, misalnya, dengan menggunakan perintah git checkout main untuk beralih ke branch "main". Kemudian, gunakan perintah git merge nama_branch untuk memulai merge, dengan nama_branch sebagai branch yang ingin Anda gabungkan ke branch tujuan. Git akan mencoba melakukan merge secara otomatis, tetapi jika terjadi konflik, Anda perlu menyelesaikannya secara manual dengan membuka file yang bertentangan, menyelesaikan konflik, lalu melakukan commit untuk menyelesaikan merge. Akhirnya, Anda bisa menggunakan perintah git push untuk mengunggah perubahan merge Anda ke repositori remote jika diperlukan. Dengan langkah-langkah ini, Anda berhasil melakukan merge branch dengan Git, memungkinkan Anda untuk mengintegrasikan perubahan dari branch yang berbeda ke dalam branch tujuan dengan lancar.
      
