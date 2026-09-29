var inputPrime = prompt("nhập số để kiểm tra: ");
var a=parseInt(inputPrime);

if (a<=1){
    document.write("không phải số nguyên tố");
}
else {
    for (var i=2;i*i<=a;i++){
        if (a%i==0){
            document.write("không phải số nguyên tố");
            break;
        }
        else{
            document.write("là số nguyên tố");
            break;
        }
    }
}
