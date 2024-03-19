const form = document.querySelector(".form")
const productName = document.querySelector('#productName')
const productCategory = document.querySelector('#productCategory')
const fileInput = document.querySelector('#fileInput')
const productFresh = document.querySelector('#productFresh')
const brandNew = document.querySelector('#brandNew')
const secondHand = document.querySelector('#secondHand') // Menambahkan tanda # sebelum secondHand
const refufbished = document.querySelector('#refufbished') // Menyusun kembali penamaan variabel yang keliru
const additionalDesc = document.querySelector('#additionalDesc')
const productPrice = document.querySelector('#productPrice')
const submit = document.querySelector('#submit')
const tabel = document.querySelector('.tabel')

// fungsi ketika input pada product name hanya boleh diinput oleh alphabet
productName.addEventListener("input", function() {
    var inputValue = productName.value;
    if (inputValue.length > 10) {
        alert("Product Name must not exceed 10 characters.");
    } else if(inputValue.match(/[^a-zA-Z]/g)) { // Menggunakan ekspresi reguler yang benar untuk memeriksa apakah ada karakter non-alphabet
        alert("Name must only contain alphabets.");
        productName.value = inputValue.replace(/[^a-zA-Z]/g, ''); // Mengganti karakter non-alphabet dengan string kosong
    }
});

// fungsi untuk memvalidasi setiap input ketika kosong kemudian memencet submit akan muncul alert
function validation() {
    if(productName.value === "" || productPrice.value === "" || productCategory.value === "" || fileInput.value === "" || productFresh.value === "") { // Memeriksa nilai fileInput.value untuk mengetahui apakah input gambar sudah diisi
        alert('The input must be filled in');
        return false; // Mengembalikan false jika ada input yang kosong
    }
    return true; // Mengembalikan true jika semua input telah diisi
}

// pemanggilan fungsi validasi pada submit dengan add event listener
submit.addEventListener("click", function(event) {
    event.preventDefault()
    if(!validation()) { // Menggunakan negasi (!) karena kita ingin mencegah submit jika validasi mengembalikan false
        event.preventDefault();
    }
});

// fungsi disable ketika inputan kosong
function cekDisable() {
    if(!validation()) { // Menggunakan negasi (!) karena kita ingin mengecek apakah validasi mengembalikan false
        submit.classList.add('disabled:opacity-75');
    } else {
        submit.classList.remove('disabled:opacity-75'); // Menghapus kelas 'disabled:opacity-75' jika semua input telah diisi
    }
}


// Penambahan table ketika melakukan input
let productTableBody; // Global variable to store reference to table body

submit.addEventListener('click', function() {
  // Check if table already exists
  if (!productTableBody) {
    // Create the table if it doesn't exist
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
          <!-- Add other table headers here -->
        </tr>
      </thead>
      <tbody></tbody>
    `;
    document.body.appendChild(productTable); // Append the table to the document
    
    // Set reference to the table body
    productTableBody = productTable.querySelector('tbody');
  }
  
  // Create a new row
  const newRow = document.createElement('tr');
  newRow.className = "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
  
  // Create and append table data cells
  const productNameCell = document.createElement('td');
  productNameCell.classList = "px-6 py-4"
  productNameCell.textContent = productName.value;
  newRow.appendChild(productNameCell);
  
  const productCategoryCell = document.createElement('td');
  productCategoryCell.classList = "px-6 py-4"
  productCategoryCell.textContent = productCategory.value;
  newRow.appendChild(productCategoryCell);

  const productFreshCell = document.createElement('td');
  productFreshCell.classList = "px-6 py-4"
  productFreshCell.textContent = productFresh.value;
  newRow.appendChild(productFreshCell);

  const productPriceCell = document.createElement('td');
  productPriceCell.classList = "px-6 py-4"
  productPriceCell.textContent = productPrice.value;
  newRow.appendChild(productPriceCell);
  
  // Append the new row to the table body
  productTableBody.appendChild(newRow);
  
  // Reset form fields
  productName.value = '';
  productCategory.value = '';
  productFresh.value = '';
  productPrice.value = '';
  // Reset other form fields here if needed
});