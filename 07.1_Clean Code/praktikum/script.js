// Mendapatkan referensi ke elemen-elemen HTML yang diperlukan
const form = document.querySelector(".form");
const productName = document.querySelector('#productName');
const productCategory = document.querySelector('#productCategory');
const fileInput = document.querySelector('#fileInput');
const productFresh = document.querySelector('#productFresh');
const brandNew = document.querySelector('#brandNew');
const secondHand = document.querySelector('#secondHand');
const refurbished = document.querySelector('#refurbished');
const additionalDesc = document.querySelector('#additionalDesc');
const productPrice = document.querySelector('#productPrice');
const submit = document.querySelector('#submit');
const tabel = document.querySelector('.tabel');

// Menambahkan event listener untuk memvalidasi input nama produk
productName.addEventListener("input", function() {
    var inputValue = productName.value;
    if (inputValue.length > 10) {
        alert("Product Name must not exceed 10 characters.");
    } else if(inputValue.match(/[^a-zA-Z]/g)) { // Mengecek apakah input hanya berisi huruf
        alert("Name must only contain alphabets.");
        productName.value = inputValue.replace(/[^a-zA-Z]/g, ''); // Menghapus karakter selain huruf
    }
});

// Fungsi untuk memvalidasi input sebelum submit
function validation() {
    if(productName.value === "" || productPrice.value === "" || productCategory.value === "" || fileInput.value === "" || productFresh.value === "") {
        alert('The input must be filled in');
        return false;
    }
    return true;
}

// Menambahkan event listener untuk submit dengan memanggil fungsi validasi
submit.addEventListener("click", function(event) {
    event.preventDefault();
    if(!validation()) {
        event.preventDefault();
    }
});

// Mengubah tampilan tombol submit berdasarkan validasi
function updateSubmitButton() {
    if(!validation()) {
        submit.classList.add('disabled:opacity-75');
    } else {
        submit.classList.remove('disabled:opacity-75');
    }
}

// Menambahkan tabel ketika melakukan input
let productTableBody;

submit.addEventListener('click', function() {
    // Mengecek apakah tabel sudah ada
    if (!productTableBody) {
        // Membuat tabel jika belum ada
        const productTable = document.createElement('table');
        productTable.id = 'productTable';
        productTable.className = 'w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400';
        productTable.innerHTML = `
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3" >Product Name</th>
                    <th scope="col" class="px-6 py-3" >Product Category</th>
                    <th scope="col" class="px-6 py-3" >Product Fresh</th>
                    <th scope="col" class="px-6 py-3" >Product Price</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        document.body.appendChild(productTable); // Menambahkan tabel ke dokumen
        
        // Menyimpan referensi ke body tabel
        productTableBody = productTable.querySelector('tbody');
    }
    
    // Membuat baris baru
    const newRow = document.createElement('tr');
    newRow.className = "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700";
    
    // Membuat dan menambahkan sel-sel data ke dalam baris baru
    const productNameCell = createTableCell(productName.value);
    const productCategoryCell = createTableCell(productCategory.value);
    const productFreshCell = createTableCell(productFresh.value);
    const productPriceCell = createTableCell(productPrice.value);
    
    newRow.appendChild(productNameCell);
    newRow.appendChild(productCategoryCell);
    newRow.appendChild(productFreshCell);
    newRow.appendChild(productPriceCell);
    
    // Menambahkan baris baru ke dalam body tabel
    productTableBody.appendChild(newRow);
    
    // Mengosongkan input setelah submit
    productName.value = '';
    productCategory.value = '';
    productFresh.value = '';
    productPrice.value = '';
    // Menambahkan pengosongan input lainnya di sini jika diperlukan
});

// Fungsi pembantu untuk membuat sel data tabel
function createTableCell(value) {
    const cell = document.createElement('td');
    cell.classList = "px-6 py-4";
    cell.textContent = value;
    return cell;
}