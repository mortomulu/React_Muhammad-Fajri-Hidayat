const form = document.querySelector(".form")
const productName = document.querySelector('#productName')
const productCategory = document.querySelector('#productCategory')
const fileInput = document.querySelector('#fileInput')
const productFresh = document.querySelector('#productFresh')
const brandNew = document.querySelector('#brandNew')
const secondHand = document.querySelector('secondHand')
const refufbished = document.querySelector('#refufbished')
const additionalDesc = document.querySelector('#additionalDesc')
const productPrice = document.querySelector('#productPrice')
const submit = document.querySelector('#submit')

console.log(fileInput)
console.log(productFresh)
const desc = additionalDesc.value
console.log(desc)
console.log(productPrice.value)

productName.addEventListener("input", function() {
    var inputValue = productName.value;
    if (inputValue.length > 10) {
        alert("Product Name must not exceed 10 characters.");
    }else if(inputValue.match(/[!@#\$%\^\&*\)\(+=._-]/g)) {
        alert("Name must not contain symbols.");
        productName.value = inputValue.replace(/[!@#\$%\^\&*\)\(+=._-]/g, '');
    }
});

submit.addEventListener("click", function(event){
    event.preventDefault();
    if(productName.value == "" || productPrice.value == "" || productCategory.value === "" || fileInput == ""){
        alert('Please enter a valid Input.')
    }else{

    }
})

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit secara default

    if (!fileInput.files[0]) { // Memeriksa apakah tidak ada file yang dipilih
        alert('Please select a file.');
    } else {
        // Lanjutkan dengan tindakan selanjutnya jika file sudah dipilih
        alert('File selected: ' + fileInput.files[0].name);
        // Lakukan sesuatu jika form valid, seperti mengirim data ke server
    }
});

submit.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit secara default

    if (!brandNew.checked && !secondHand.checked && !refufbished.checked) {
        alert('Please select a gender.');
    } else {
        // Lanjutkan dengan tindakan selanjutnya jika gender sudah dipilih
        alert('Gender selected: ' + document.querySelector('input[name="gender"]:checked').value);
        // Lakukan sesuatu jika form valid, seperti mengirim data ke server
    }
});