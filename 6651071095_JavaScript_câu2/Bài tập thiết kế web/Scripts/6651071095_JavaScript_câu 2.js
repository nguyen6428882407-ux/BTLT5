var input=prompt("nhap nam de kiem tra: ");
var nam = parseInt(input);

if (nam % 400 == 0 || (nam %4 == 0 && nam % 100 != 0)){
    document.write("nam nhuan");
}
else {
    document.write("khong phai nam nhuan");
}
