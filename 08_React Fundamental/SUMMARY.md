FUNDAMENTAL REACT

- Props : Props dalam React adalah cara untuk mengirim data dari satu komponen ke komponen lain dalam hirarki komponen React. Props adalah singkatan dari "properties" yang merupakan objek JavaScript yang berisi informasi yang ingin dikirimkan dari satu komponen ke komponen lainnya. Komponen yang menerima props dapat menggunakan data tersebut untuk menampilkan informasi atau mengubah perilaku komponen tersebut. Props bersifat read-only, yang berarti bahwa komponen yang menerima props tidak dapat mengubahnya. Props sangat penting dalam memungkinkan komponen-komponen React berinteraksi satu sama lain secara dinamis dan fleksibel.

- State : memiliki sifat yang berlawanan dengan props, 
State dalam React adalah objek JavaScript yang digunakan oleh komponen React untuk menyimpan data yang berubah seiring waktu. Setiap komponen React memiliki state sendiri, yang dapat diinisialisasi saat komponen dibuat dan diperbarui selama siklus hidup komponen. Perubahan state dapat memicu pembaruan pada tampilan komponen, sehingga memungkinkan komponen untuk merespons interaksi pengguna atau peristiwa lainnya secara dinamis. State dalam React bersifat privat dan dikelola secara internal oleh komponen itu sendiri. Penggunaan state memungkinkan pembuatan aplikasi web yang interaktif dan responsif menggunakan React.

- Props : berbentuk objek, ketika Anda memiliki hanya satu nilai, props juga tetap berbentuk objek. Meskipun hanya satu nilai yang dikirimkan, nilai tersebut tetap dikemas dalam objek JavaScript.
  
- Tokopedia memakai class component : sangat unik karena kebanyakan ketika membuat sebuah komponen menggunakan fungsi, dan karena adanya fitur hooks pada react maka class menjadi berkurang fungsionalitasnya
  
- kelemahan default dari react : one way data flow, Kelemahan utama dari model "one-way data flow" dalam React adalah kompleksitas yang muncul saat Anda memiliki aplikasi yang besar dan kompleks. Meskipun model ini membantu memahami aliran data dalam aplikasi dengan jelas, namun dalam beberapa kasus, dapat menyebabkan terjadinya "prop drilling".
  
- props drilling : "Prop drilling" terjadi ketika Anda perlu meneruskan props melalui beberapa tingkat komponen yang tidak memerlukan data tersebut, hanya untuk mencapai komponen yang sebenarnya membutuhkannya. Hal ini dapat menyebabkan kode menjadi sulit dipelihara dan membingungkan.
  
- salah satu dampak lain dari one way data flow : mungkin merasa sulit untuk memprediksi bagaimana perubahan pada satu komponen dapat memengaruhi komponen lain dalam rantai aliran data. Ini bisa menjadi tantangan dalam debugging dan memahami bagaimana perubahan pada satu bagian dari aplikasi dapat mempengaruhi keseluruhan aplikasi.
  
- kontainmen : Kontainment dalam React mengacu pada kemampuan sebuah komponen untuk menampung atau mengelilingi elemen-elemen lain yang diberikan kepada komponen tersebut sebagai bagian dari hirarki komponen. Dalam praktiknya, ini berarti sebuah komponen dapat memiliki elemen-elemen turunan di dalamnya yang diberikan oleh komponen induknya.

- spesialisasi : Spesialisasi dalam React merujuk pada teknik di mana Anda membuat komponen baru yang memperluas atau mewarisi fungsionalitas dari komponen yang sudah ada. Ini dilakukan dengan tujuan untuk menyesuaikan atau menambahkan perilaku tertentu ke dalam komponen yang sudah ada tanpa harus membuat komponen yang sepenuhnya baru dari awal.
  
- React Life Cycle : core of the core, jika konsep tersebut bisa maka akan bisa membuat semuanya dalam react
  
- If react : ada beberapa jenis if pada react
  a. ternary operator : {condition ? <ComponentA /> : <ComponentB />}
  b. Short-circuit Evaluation : {showComponent && <Component />}

- Data yang dideklarasi selalu diatas return
- render list bisa menggunakan map(recomended) atau foreach
- Praktik kelas :
  a. ketika menggunakan method map maka perhatikan bracket yang digunakan agar sesuai dengan hasil yang diharapkan
  b. jika ingin menampilan sesuatu maka bungkus dengan kurung biasa ()
  c. dan ketika melakukan map pada suatu variabel dan menghasilkan nilai return maka gunakan kurung kurawal?
  d. dan jika tidak menggunakan kurung maka bisa menggunakan return pada elemen html yang mau ditampilkan
