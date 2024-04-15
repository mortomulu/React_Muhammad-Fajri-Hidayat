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
