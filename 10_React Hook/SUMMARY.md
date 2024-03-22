REACT HOOK 

USE STATE (Thursday, 21 March 2024)
* Core Hook :
  a. useState : digunakan untuk merubah state
  b. useEffect : digunakan untuk melakukan render, dan bisa melakukan triger dari apa yang dirender tersebut, dan biasanya digunakan untuk pemanggilan api
  c. useRef : digunakan untuk mendapatkan referensi dom sebuah element
  
* Fitur : tidak perlu melakukan instalasi, hanya perlu memanggil
* Library : perlu melakukan instalasi menggunakan npm
* Hooks lainnya :
  - useContext: Memungkinkan akses ke konteks global dalam aplikasi React.
  - useReducer: Alternatif untuk useState yang lebih kuat untuk mengelola state dalam komponen.
  - useCallback: Memungkinkan memoisasi callback untuk mencegah penciptaan ulang yang tidak perlu dalam komponen.
  - useMemo: Memungkinkan memoisasi nilai untuk menghindari perhitungan yang tidak perlu dalam komponen.
  - useRef: Digunakan untuk mendapatkan referensi ke elemen DOM atau nilai lainnya yang persisten antara render.
  - useImperativeHandle: Digunakan untuk menyesuaikan nilai yang terlihat ketika komponen dikenai metode yang dimiliki oleh anak komponen.
  - useLayoutEffect: Mirip dengan useEffect, tetapi dieksekusi secara synchronously setelah semua perubahan DOM telah terjadi.
  - useDebugValue: Memungkinkan Anda memberikan label untuk hook kustom Anda sendiri yang ditampilkan dalam DevTools React.

* Aturan dalam hooks :
  - jangan memanggil di loops
  - jangan memanggil di condition
  - jangan memanggil di nested

* Ketika merubah tipefile perlu melakukan run ulang
* ketika dalam return menggunakan pembungkus div maka terdapat div aneh, maka gunakan fragment
* useState bisa menampung default fungsi
* juga gunakan event handling untuk mengakses variabel usestate lain
* useState array menggunakan spread operator untuk memasukkan ke array default
* Merubah array of object : biasanya ketika menggunaakan api
* state secara best practice dibuat se clean mungkin
* callback dalam setstate berisi state
