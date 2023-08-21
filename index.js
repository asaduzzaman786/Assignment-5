let sum = 0;
let discountCoupon = discount;
let grandTotal = discount;
function CardClick(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    sum = parseInt(sum) + parseInt(price);
    document.getElementById("sum").innerText = sum;

    // disabled-btn1
    const deleteBtn1 = document.getElementById("disabled-btn1");
    if (sum >= 200) {
        deleteBtn1.removeAttribute('disabled')
        deleteBtn1.classList.add('btn1')
    }
    else {
        deleteBtn1.setAttribute('disabled', true)
    }
    // disabled-btn2
    const deleteBtn2 = document.getElementById("disabled-btn2");
    if (sum < 0) {
        deleteBtn2.setAttribute('disabled', true)
    }
    else {
        deleteBtn2.removeAttribute('disabled')
        deleteBtn2.classList.add('btn1')
    }
}

// modal Refresh
document.getElementById('popup-btn').addEventListener('click', function () {
    var popupContainer = document.getElementById('my_modal_1');
    popupContainer.style.display = 'none';
});

function discountCalculator(){
     
    const couponId= document.getElementById("bonus-coupon")
    const text = couponId.value;
    console.log(text)
    if (text === 'SELL200') {
    const subTotalElement= document.getElementById('sum');
    const subTotalString =  subTotalElement.innerText;
    const subTotalInt = parseFloat(subTotalString);
    let discount = (subTotalInt * 20) / 100
    const discounAmount = document.getElementById('discount')
    discounAmount.innerText= discount;
    const Total = subTotalInt-discount;
    const grandTotal = document.getElementById('total')
    grandTotal.innerText=Total;
    }
}