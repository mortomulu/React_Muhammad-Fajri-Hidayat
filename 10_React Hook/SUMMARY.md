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


<h1>USE HOOK</h1>
(Friday, 22 March 2024)

* RFC : react functional component
* RCC : react class component
* Class extend component : ketika menggunakan class component harus melakukan extend terhadap component dari react dengan terlebih dahulu melakukan import
  - Keunggulan: Dulu, class component sering digunakan karena kemampuannya untuk menggunakan fitur-fitur seperti state, siklus hidup, dan konteks dengan lebih mudah.
  - Kekurangan: Namun, class component memiliki sintaks yang lebih panjang dan kompleks dibandingkan dengan functional component. Mereka juga cenderung memiliki lebih banyak boilerplate code.

* this : cari file yang ada disini, contoh :
  - const obj = {
        name: 'John',
        greet: function() {
          console.log('Hello, ' + this.name);
        }
      };
      obj.greet(); // Output: Hello, John
  - function sayHello() {
      console.log('Hello, ' + this);
    }
    sayHello();
  - function Person(name) {
      this.name = name;
    }
    const person1 = new Person('Alice');
    console.log(person1.name); // Output: Alice


<h2>LIFE CYCLE</h2>
* Mounting: Fase ini terjadi ketika komponen pertama kali ditambahkan ke DOM. Metode-metode siklus hidup yang terkait dengan fase ini antara lain:
  - constructor()
  - static getDerivedStateFromProps()
  - render()
  - componentDidMount()

* Updating: Fase ini terjadi ketika props atau state sebuah komponen berubah. Metode-metode siklus hidup yang terkait dengan fase ini antara lain:
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()
 
* Unmounting: Fase ini terjadi ketika sebuah komponen dihapus dari DOM. Metode siklus hidup yang terkait dengan fase ini adalah:
  - componentWillUnmount()
 
* Use Effect seperti lifecycle pada class component
  - Use Effect sekali : seperti component will mount
  - use effect tergantung trigger : seperti component will update

* Use Effect biasanya digunakan untuk validasi dengan trigger sehingga setiap state berubah dilakukan validasi
* munculin modal atau apapun menggunakan mainan state boolean
* validasi react pake library
* custom hooks : Custom hooks adalah fungsi JavaScript biasa yang mengandung logika berbagi yang dapat digunakan di beberapa komponen dalam aplikasi React. Mereka memungkinkan Anda untuk mengisolasi logika yang dapat digunakan kembali (seperti mengelola state, efek samping, atau kode pengolahan data lainnya) dari komponen React Anda.
