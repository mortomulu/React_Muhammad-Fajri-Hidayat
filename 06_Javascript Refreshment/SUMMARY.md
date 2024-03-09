JAVASCRIPT REFRESHMENT SUMMARY
Date : Wed, 06 March 2024

1. JS Core Industri
    - Pada saat ini js sangat banyak dibutuhkan oleh industri dan hal tersebut menjadikan kemampuan dalam menggunakan bahasa javascript sangatlah penting
    - js juga banyak digunakan untuk berbagai framework seperti salah satunya react
     
2. Bagaimana Coding Menggunakan AI
    - Memahami cara bekerja dari coding dan melakukan coding menggunakan bantuan AI seperti dalam mengidentifikasi error
    - Juga harus mempelajari dasar dari coding sehingga dapat melakukan solve dari bug bug yang rumit yang tidak bisa diselesaikan oleh AI, dan AI hanya mempercepat pekerjaan kita
       
3. Variabel
    Variabel dalam JavaScript adalah tempat untuk menyimpan data. Ada tiga cara untuk mendeklarasikan variabel: var, let, dan const.
    - var digunakan untuk mendeklarasikan variabel global atau lokal yang dapat diubah nilainya., var merupakan tipe data yang kurang direkomendasikan untuk digunakan karena sering terjadi error
    - let digunakan untuk mendeklarasikan variabel lokal yang nilainya dapat diubah.
    - const digunakan untuk mendeklarasikan variabel lokal yang nilainya tetap atau tidak dapat diubah setelah diinisialisasi.
      
4. Destructering
    - Destructering merupakan menyalin nilai dari array, object atau array of object dan menyimpan dalam variabel baru
    - Spread : Spread operator (...) adalah fitur baru dalam JavaScript yang memungkinkan Anda untuk memecah atau menguraikan iterable (seperti array atau string) menjadi elemen individu. Ini sangat berguna untuk memperluas nilai dari satu array ke array lain atau menyebarkan properti objek ke objek baru. 
   
5. Method
     Dalam JavaScript, method adalah fungsi yang terkait dengan objek. Ini berarti method adalah properti dari objek yang berisi sebuah fungsi. Ketika method dipanggil, ia akan beroperasi pada objek yang telah didefinisikan, dan bisa juga mengakses dan memanipulasi data dalam objek tersebut.
     - concat : Metode concat() adalah metode yang digunakan untuk menggabungkan dua atau lebih array menjadi satu array baru. Ini adalah salah satu cara yang paling umum digunakan untuk menggabungkan array dalam JavaScript.
     - map : digunakan untuk membuat array baru dengan hasil pemanggilan fungsi callback pada setiap elemen dalam array yang ada. Metode map() tidak mengubah array asli, tetapi mengembalikan array baru yang berisi hasil dari pemanggilan fungsi callback untuk setiap elemen dalam array. 
     - foreach : Metode forEach() adalah metode bawaan dari JavaScript yang digunakan untuk menjalankan sebuah fungsi pada setiap elemen dalam array. Ini memungkinkan Anda untuk melakukan iterasi atau loop melalui setiap elemen array tanpa menggunakan loop for atau while. Metode ini sangat berguna untuk menjalankan operasi atau tindakan yang sama pada setiap elemen array tanpa melakukan modifikasi array itu sendiri
     - slice : Saat menggunakan metode slice() dengan argumen slice(1, 4), ini berarti mengambil elemen dari index 1 hingga (tetapi tidak termasuk) index 4. Jadi, elemen dengan indeks 1, 2, dan 3 akan disertakan dalam array hasilnya. Dalam istilah matematis, [1, 4) mewakili rentang indeks dari 1 hingga 4, tetapi tidak termasuk indeks 4 itu sendiri. Sehingga hanya indeks 1, 2, dan 3 yang akan disertakan. Terima kasih telah mengklarifikasi.
     - filter : Metode filter() pada JavaScript digunakan untuk membuat array baru yang berisi semua elemen dari array asli yang memenuhi suatu kondisi yang ditentukan oleh fungsi callback. Ini adalah cara yang sangat berguna untuk "mengfilter" elemen dalam array berdasarkan kriteria tertentu.
     - reduce : Metode reduce() pada JavaScript digunakan untuk mengurangi (reduce) elemen-elemen dalam array menjadi nilai tunggal berdasarkan suatu fungsi yang diberikan. Ini digunakan untuk melakukan agregasi atau pengolahan data di dalam array menjadi satu nilai.
       
6. Control Flow
    - mekanisme yang digunakan untuk mengendalikan aliran eksekusi, seperti kondisional (seperti pernyataan if), perulangan (seperti perulangan for dan while), dan percabangan (seperti pernyataan switch).
    - pengulangan : for, while, do while
    - percabangan : if else, switch, block, try catch, break, continue, throw
    
7. Function
    - function expression : mendefinisikan fungsi dengan menyimpannya dalam variabel. bisa diberikan nama (disebut named function expression) atau tidak (disebut anonymous function expression). sebagai argumen untuk fungsi lain.
    - arrow function : cara baru untuk menulis fungsi dalam JavaScript yang diperkenalkan dalam ECMAScript 6 (ES6). lebih singkat dan ringkas daripada function expression.  tidak memiliki konteks this sendiri; mereka menggunakan konteks this dari lingkup yang mengelilinginya (lexical this). Arrow function selalu anonymous. umumnya digunakan untuk fungsi-fungsi pendek dan callback. 
    
8. Class
    -  sebuah prototipe untuk membuat objek. Ini adalah konstruksi sintaksis yang lebih deklaratif dan mudah dipahami yang memungkinkan Anda untuk membuat objek dengan properti dan metode tertentu.
    -  constructor : Di JavaScript, konstruktor adalah sebuah metode khusus yang digunakan untuk menginisialisasi objek yang dibuat dari sebuah class. Konstruktor memiliki nama khusus constructor dan dieksekusi secara otomatis saat objek dibuat menggunakan class tersebut. Dalam konstruktor, Anda dapat menetapkan nilai awal ke properti objek menggunakan parameter yang diterima. Ini memungkinkan Anda untuk mengatur keadaan awal objek dan menginisialisasi propertinya sesuai dengan nilai yang diberikan. Setiap class hanya dapat memiliki satu konstruktor, dan konstruktor tersebut digunakan untuk melakukan inisialisasi objek secara otomatis pada saat pembuatan objek dari class yang bersangkutan.
    -  method : fungsi yang terkait dengan sebuah objek. Metode ini digunakan untuk melakukan tindakan tertentu pada objek atau mengembalikan nilai yang berkaitan dengan objek tersebut. Metode dapat ditambahkan ke sebuah objek setelah objek tersebut dibuat, atau didefinisikan di dalam class untuk membuat blueprint objek yang memiliki perilaku tertentu. Dalam konteks class, metode ditambahkan sebagai properti pada class tersebut.
    -  attributes : nilai yang terkait dengan sebuah objek. Atribut ini mendefinisikan karakteristik atau keadaan dari objek tersebut.
    -  extends : membuat subclass (kelas turunan) dari sebuah kelas (kelas induk atau superclass) yang sudah ada sebelumnya. Konsep ini dikenal sebagai pewarisan atau inheritance, di mana subclass dapat mewarisi properti dan metode dari superclass-nya. Dengan menggunakan extend, subclass dapat menambahkan perilaku tambahan atau memodifikasi perilaku yang sudah ada dari superclass.
    -  4 Pilar OOP : Encapsulation, Inheritance, Polymorphism, and Abstraction

9. Async & Await
    - synchronus : sinkronus JavaScript merujuk pada eksekusi kode yang berurutan, di mana setiap tugas harus menunggu tugas sebelumnya selesai sebelum dapat dijalankan.
    - asynchronus : dalam eksekusi kode, JavaScript tidak harus menunggu tugas sebelumnya selesai sebelum menjalankan tugas berikutnya. Ini sangat berguna dalam situasi di mana kita ingin melakukan operasi yang membutuhkan waktu, seperti mengambil data dari server atau membaca berkas dari sistem file, tanpa menghentikan eksekusi kode lainnya.
    - callback : sebuah konsep dalam pemrograman di mana sebuah fungsi (callback function) disediakan sebagai argumen untuk fungsi lain (biasanya sebagai parameter). Fungsi ini nantinya akan dipanggil (atau "dikembalikan panggilan") oleh fungsi yang menerimanya, biasanya saat suatu tugas selesai atau suatu peristiwa terjadi. Konsep callback sangat umum digunakan dalam JavaScript, terutama dalam kasus operasi asinkronus seperti mengambil data dari server atau menangani event pada elemen HTML.
    - promise : Promise adalah sebuah objek di JavaScript yang mewakili hasil dari sebuah operasi yang bersifat asinkronus, seperti permintaan HTTP atau pembacaan berkas dari sistem file. Promise digunakan untuk menangani operasi asinkronus dengan cara yang lebih terstruktur dan mudah dipahami.
