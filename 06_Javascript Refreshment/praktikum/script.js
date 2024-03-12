const form = document.querySelector(".form")
const productName = document.querySelector('#productName')
const productPrice = document.querySelector('#productPrice')
const submit = document.querySelector('#submit')

productName.addEventListener("input", function() {
    var inputValue = productName.value;
    if (inputValue.length > 10) {
        alert("Product Name must not exceed 10 characters.");
    }
});

submit.addEventListener("click", function(){
    event.preventDefault();
    if(productName.value == "" || productPrice.value == ""){
        alert('Please enter a valid Prouct name.')
    }else{

    }
})