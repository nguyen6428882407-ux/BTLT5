document.getElementById("btnTinh").addEventListener("click", function () {
  const luong = parseFloat(document.getElementById("luong").value);
  const heso = parseFloat(document.getElementById("heso").value);
  const kq = document.getElementById("kq");
  if (isNaN(luong) || luong < 0) {
    kq.innerHTML = '<span class="err">Lương không hợp lệ!</span>';
    return;
  }
  kq.textContent = luong * heso;
});
