# REACT FORM
02 April 2024

* Form pake library untuk kedepannya : Disarankan untuk menggunakan library yang memudahkan dalam pembuatan form untuk proyek-proyek di masa mendatang.

* shadcn : Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.

* setiap form dibuat satu state, NAMUN DIANJURKAN MENGGUNAKAN SATU OBJECT : Setiap form sebaiknya memiliki satu state, namun disarankan untuk menggunakan satu objek untuk menyimpan semua nilai form.

* jika state default menggunakan value boolean, maka ketika melakukan setState menggunakan negasi : Jika nilai default dari state adalah boolean, disarankan untuk menggunakan negasi saat melakukan setState.

* terdapat bubble chat pada capstone : 

* jik mengirim submit maka data disimpan lagi pada satu object, dalam satu variabel : Data dari form disimpan dalam satu objek pada satu variabel setelah melakukan submit.

* e.target.files[0] untuk menangkap file yang di upload : Penggunaan e.target.files[0] untuk menangkap file yang diunggah, dan URL.createObjectURL untuk menghasilkan URL dari file yang dapat ditampilkan.

* URL.createObjectURL untuk mengenerate file agar bisa ditampilkan : Penggunaan e.target.files[0] untuk menangkap file yang diunggah, dan URL.createObjectURL untuk menghasilkan URL dari file yang dapat ditampilkan.

* validasi length menggunakan fungsi .length untuk melakukan validasi : Validasi panjang menggunakan .length, dan pembuatan regex dapat menggunakan alat generator regex.

* cara buat regex => regex generator

* guanakn if yang banyak pada setiap line jangan menggunakan else if : Hindari penggunaan berlebihan dari else if, dan gunakan pendekatan mencari kesalahan saat melakukan validasi.

* ketika melakukan validasi konsepnya adalah mencari kesalahan (dicari untuk tidak memenuhi syarat)

* if dibuat seperti itu agar testingnya lumayan enteng

* mini project harus terdapat :
  - Global state : redux, zustand
  - testing :
  - CRUD REACT
