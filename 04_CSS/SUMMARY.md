CSS (CASCADING STYLESHEET)

1. Industri kebanyakan sudah memakai figma
   - Figma adalah platform desain UI/UX web yang memungkinkan tim untuk membuat desain antarmuka pengguna (UI) dan pengalaman pengguna (UX), membuat prototipe interaktif, serta berkolaborasi secara real-time. Dengan fitur-fitur seperti pembuatan komponen yang dapat digunakan kembali, prototyping yang fleksibel, dan kemampuan kolaborasi yang mulus, Figma menjadi alat yang sangat berguna bagi desainer untuk menciptakan desain yang konsisten dan berkualitas tinggi sambil bekerja sama secara efisien dengan anggota tim.
     
2. link event
   - Hover: Tautan ketika kursor mouse berada di atasnya.
   - Visited: Tautan yang sudah dikunjungi oleh pengguna.
   - Active: Tautan ketika sedang diklik atau dalam keadaan aktif.
   - Focus: Tautan yang sedang dalam fokus, biasanya setelah ditekan dengan keyboard atau diakses melalui navigasi keyboard.
     
3. AI untuk coding
   - Blackbox AI : AI untuk slicing
   - Phind : AI membantu mendapat data2 terbaru
     
4. Selectors
   - Selector Elemen: Selector ini memilih semua elemen dengan nama tertentu. Contohnya, p memilih semua elemen paragraf.
   - Selector ID: Selector ID memilih elemen dengan atribut ID yang cocok. Digunakan dengan tanda pagar (#). Contohnya, #header memilih elemen dengan ID "header".
   - Selector Kelas: Selector kelas memilih elemen dengan atribut class tertentu. Digunakan dengan titik (.``). Contohnya, .btn` memilih semua elemen dengan kelas "btn".
   - Selector Elemen Anak: Selector ini memilih elemen yang menjadi anak langsung dari elemen tertentu. Digunakan dengan spasi. Contohnya, div p memilih semua elemen paragraf yang berada di dalam elemen div.
   - Selector Elemen Keturunan: Selector ini memilih elemen yang menjadi keturunan dari elemen tertentu, tidak hanya anak langsung. Digunakan dengan spasi ( ). Contohnya, article p memilih semua elemen paragraf yang menjadi keturunan dari elemen article, tidak hanya yang langsung di dalamnya.
   - Selector Universal: Selector ini memilih semua elemen dalam dokumen. Digunakan dengan tanda asterisk (*). Contohnya, * memilih semua elemen.
   - Selector Atribut: Selector ini memilih elemen dengan atribut tertentu. Contohnya, input[type="text"] memilih semua elemen input dengan atribut type yang bernilai "text".
   - Selector Pseudo-class: Selector ini memilih elemen berdasarkan keadaan tertentu, seperti :hover untuk tautan yang sedang dihover. Contohnya, a:hover memilih tautan ketika sedang dihover.
     
5. Style Default
    - Margin : html memiliki margin default ketika tidak diatur jadi untuk menghilangkannya maka harus terlebih dahulu diberi value 0 sehingga tidak mengganggu styling
    - display : styling display memiliki default block sehingga ketika ingin mengganti display maka perlu dilakukan styling dengan value sesuai desain
      
6. Table
    - Tabel (Table): Elemen <table> adalah wadah utama untuk seluruh tabel. Properti CSS yang sering digunakan untuk tabel ini termasuk border, padding, margin, dan background-color.
    - Baris (Row): Elemen <tr> adalah baris dalam tabel. Anda dapat menyesuaikan properti seperti background-color atau warna teks untuk baris tertentu menggunakan CSS.
    - Sel (Cell): Elemen <td> (untuk sel data) dan <th> (untuk sel header) adalah tempat data atau informasi ditampilkan. Properti CSS yang sering digunakan untuk sel termasuk padding, border, text-align, dan background-color.
    - Header Kolom (Column Header): Elemen <th> biasanya digunakan untuk menyimpan judul kolom dalam tabel. Anda dapat menggunakan CSS untuk mengatur tampilan header kolom, seperti font-weight atau background-color.
    - Header Baris (Row Header): Elemen <th> juga dapat digunakan untuk menyimpan judul baris dalam tabel jika diperlukan. Properti CSS yang sama seperti pada header kolom juga dapat diterapkan di sini.
    - Grup Kolom (Column Group): Elemen <colgroup> dan <col> digunakan untuk mengelompokkan dan menentukan properti untuk satu atau beberapa kolom dalam tabel. Ini berguna jika Anda ingin menerapkan properti CSS ke seluruh kolom sekaligus.
    
7. Flexbox
    - flexbox dapat memberikan styling layout dengan mudah dan flexibel
    - display: Properti ini digunakan untuk menentukan apakah sebuah elemen adalah flex container atau flex item. Nilai yang umum digunakan adalah flex untuk membuat sebuah elemen menjadi flex container, dan inline-flex untuk membuatnya menjadi inline flex container.
    - flex-direction: Properti ini menentukan arah utama (main axis) dari flex container, yang mempengaruhi cara elemen-elemen anak diatur dalam container. Nilai yang mungkin adalah row, row-reverse, column, atau column-reverse.
    - flex-wrap: Properti ini menentukan apakah elemen-elemen flex harus dibungkus dalam beberapa baris atau kolom jika tidak cukup ruang pada container. Nilai yang umum digunakan adalah nowrap (elemen tidak dibungkus), wrap (elemen dibungkus jika perlu), atau wrap-reverse (elemen dibungkus dalam arah berlawanan).
    - justify-content: Properti ini digunakan untuk mengatur cara elemen-elemen flex diatur sepanjang arah utama (main axis) dari container. Ini dapat digunakan untuk mengatur tata letak horizontal (untuk flex direction row atau row-reverse). Nilai yang umum digunakan termasuk flex-start, flex-end, center, space-between, dan space-around.
    - align-items: Properti ini mengatur cara elemen-elemen flex diatur sepanjang sumbu silang (cross axis) dari container. Ini digunakan untuk mengatur tata letak vertikal (untuk flex direction column atau column-reverse). Nilai yang umum digunakan termasuk flex-start, flex-end, center, baseline, dan stretch.
      
8. Slicing Figma
    - "Slicing" dalam Figma adalah proses mengambil potongan gambar atau grafis dari desain yang telah dibuat untuk digunakan dalam pengembangan web atau aplikasi. Ini melibatkan membuat frame di sekitar elemen yang ingin di-slice, menyesuaikan ukuran frame, dan mengekspor gambar dengan format dan resolusi yang diinginkan. Proses ini memungkinkan pengguna untuk mengekstrak elemen-elemen grafis individu dari desain dan menggunakannya dengan mudah dalam implementasi.
      
9. Margin Error
    - sebaiknya dikurangi penggunaan margin karena margin rawan error yang menyebabkan elemen melayang2 sehingga menjadi bingung untuk di styling, solusinya adalah menggunakan padding atau gap jika pada flexbox
      
10. Specifisity CSS
    urutan paling priotitas dalam styling css :
    a. inline css
    b. ID
    c. Class
    d. Element

11. AI Populer untuk CSS
    - Cakra : yang lagi populer sekarang
    - Co Pilot : AI dari microsoft
    - Gemini : Merupakan bard yang baru dan memiliki list resource
    - Chatgpt,Code wizard : ....
      
13. Media Query
    - Breakpoint :
      1. desktop : min(1024px)
      2. tablet : min(768px)
      3. Handphone : min(320px)
         
    - Media screen :
      1. min width : minimal ukuran untuk bisa menerapkan media screen
      2. max width : maksimal ukuran untuk bisa menerapkan media screen
         
    - Media print : digunakan untuk mengatur file yang akan di print
      
15. Z-Index
    -  z-index adalah properti CSS yang mengendalikan tumpukan atau urutan tampilan elemen-elemen HTML pada halaman web.
    -  z-index sering digunakan bersama dengan posisi (position) CSS seperti position: relative, position: absolute, dan             position: fixed, untuk mengontrol tata letak (layout) elemen.
    
17. Shadow
    - text shadow : digunakan untuk memunculkan shadow dari text
    - box shadow : digunakan untuk memunculkan shadow dari box
    - cara penggunaan : box-shadow : horizontal, vertikal, blur, warna
      
19. Border
    - border radius : digunakan untuk menumpulkan sudut border
         - 4 value : atas kiri, atas kanan, bawah kanan, bawah kiri
         - 2 value : atas kiri + bawah kanan, atas kanan + bawah kiri
