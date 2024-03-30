
function DisplayCart(cart){
    var cartString = "";
    var cartIndex = 1;
    cartString += "<h5>This is your cart</h5>";
    for(var x in cart){
        cartString += cartIndex;
        cartString += document.getElementById("nm"+x).innerHTML + "Qty:" + cart[x]
        cartIndex +=1;
    }
}