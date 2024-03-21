EVENT HANDLING

React handling merujuk pada proses menangani peristiwa (events) dan keadaan (state) dalam aplikasi React. Ini melibatkan penggunaan metode dan teknik dalam React untuk merespons interaksi pengguna, seperti mengklik tombol atau mengisi formulir, serta memperbarui tampilan aplikasi berdasarkan perubahan dalam keadaan aplikasi. Contoh teknik handling termasuk penggunaan metode seperti onClick untuk menangani klik tombol, serta penggunaan state untuk melacak dan memperbarui data yang berubah dalam aplikasi, sehingga memungkinkan aplikasi untuk bereaksi secara dinamis terhadap input pengguna. Dengan penggunaan React handling yang efektif, pengembang dapat membuat aplikasi yang responsif dan interaktif.

* Directory Structure
  - Bisa melihat pada chatgpt untuk lengkapnya
  - ketika project kecil maka gunakan pengelompokan sesuai jenis file
  - ketika project besar gunakan pengelompokan sesuai fitur sehingga tidak terjadi crash
  
* Styling React
  - global styling : pemanggilan style ada di parent dan otomatis seluruh child bisa menggunakan style dari import pada parent
  - modul : pada akhir file terdapat modul.css dan cara pemanggilan style tersebut sedikit berbeda ketika mendeklarasikan classname dibarengi dengan (style.{classname})
  - inline style : ya seperti biasa
    
* Event Handling
  - onClick : merupakan event handling
  - {} : merupakan prompt untuk memanggil fungsi yang dijalankan
  - fungsi biasa dan arrow function : hanya berbeda penamaan dan struktur
  - stateless : hanya menggunakan data props, tidak ada pengolahan data
  - statefull : terjadi sebuah pengolahan data pada sebuah state entah state local maupun state global
  - beberapa jenis event Handing yang sering dipakai :
    1. onClick : ketika melakukan sebuah klik
    2. onChange : merekam setiap edit pada input
    3. onSubmit : merekam submit pada sebuah form dan pemanggilan pada tag form, bisa dieksplor eventnya untuk mendapatkan si border dari input dan merubah styling tersebut, event target [0] digunakan untuk mengambil value inputan
    4. onLoad : ketika melakukan load
       
       
