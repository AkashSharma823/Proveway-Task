const boxElements = document.querySelectorAll('.section');
let selectedBox = null;

boxElements.forEach(box => {
  box.addEventListener('mousedown', () => {
    selectedBox = box;
    boxElements.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.querySelector('.dropdowns').style.display = 'none';
        otherBox.classList.remove('selected');
        otherBox.querySelector('.toggle-checkbox').checked = false;
      }
    });

    const expandedDiv = box.querySelector('.dropdowns');
    expandedDiv.style.display = 'block';
    box.classList.add('selected');
    box.querySelector('.toggle-checkbox').checked = true;
  });
});


// Update total price

function updateTotalPrice() {
  let totalPrice = 0.00;

  if (selectedBox) {
    totalPrice = selectedBox.querySelector('.discount-price');
  }

  const totalPaymentElement = document.querySelector('.total-price');
  
  if(totalPrice.textContent!=null){
    totalPaymentElement.textContent = totalPrice.textContent;
  }
  else{
    totalPaymentElement = document.querySelector('.total-price');
  }

}


//show the alert message

function showAlert(){
  if (selectedBox) {
    const selectedUnit = selectedBox.querySelector('.units span:first-child').textContent;
    const totalPrice = selectedBox.querySelector('.discount-price').textContent;

    const alertText = `Added to Cart: ${selectedUnit} - Total Price: ${totalPrice}`;
    alert(alertText);
  } else {
    alert('Please select a unit before adding to cart.');
  }
}

document.addEventListener('mouseup', () => {
  updateTotalPrice();
});

const addToCartButton = document.querySelector('.cart-btn');
addToCartButton.addEventListener('click', () => {
  showAlert();
});