document.getElementById('accountForm').addEventListener('submit', function(event) {
    // Mencegah form dari pengiriman default
    event.preventDefault();

    // Validasi input
    var productName = document.getElementById('FirstName').value.trim();
    if (productName === '') {
        // Jika input kosong, tampilkan alert
        alert('Product Name tidak boleh kosong!');
        return; // Hentikan proses lebih lanjut
    }

    // Lakukan proses pengiriman form jika validasi berhasil
    // Anda bisa menambahkan proses pengiriman form di sini
    alert('Form telah disubmit!');
});