function billingFunction(){
    var ship_name = document.getElementById("shippingName")
    var zip_code = document.getElementById("shippingZip")
    if(document.getElementById("same").checked){
        document.getElementById("billingName").setAttribute("value",ship_name.value)
        document.getElementById("billingZip").setAttribute("value",zip_code.value)
    }else{
        document.getElementById("billingName").removeAttribute("value",ship_name.value)
        document.getElementById("billingZip").removeAttribute("value",zip_code.value)
    }
}