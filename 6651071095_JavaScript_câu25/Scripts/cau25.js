const THUC_AN = {
  "Bún bò": 20000, "Hủ tiếu": 18000, "Bánh canh": 17000, "Phở bò": 19000,
  "Nuôi": 15000, "Bánh mì thịt": 12000, "Bánh cuốn": 15000
};
const NUOC_UONG = {
  "Cà phê đá": 12000, "Cà phê sữa đá": 15000, "Chanh dây": 13000, "Chanh muối": 12000,
  "Xí muội": 14000, "Sữa tươi": 13000, "Cam vắt": 17000
};

function napDanhSach(id, data) {
  const sel = document.getElementById(id);
  for (const ten in data) sel.add(new Option(ten, ten));
}
napDanhSach("thucan", THUC_AN);
napDanhSach("nuocuong", NUOC_UONG);

function layMuc(id, data) {
  return Array.from(document.getElementById(id).selectedOptions)
    .map(o => ({ ten: o.value, gia: data[o.value] }));
}

document.getElementById("btnTinh").addEventListener("click", function () {
  const ds = [...layMuc("thucan", THUC_AN), ...layMuc("nuocuong", NUOC_UONG)];
  const kq = document.getElementById("ketqua");
  if (ds.length === 0) {
    kq.innerHTML = '<span class="err">Vui lòng chọn ít nhất một món!</span>';
    return;
  }
  let tong = ds.reduce((s, m) => s + m.gia, 0);
  const banDem = document.querySelector('input[name="thoidiem"]:checked').value === "dem";

  let html = '<table id="hoadon"><tr><th>Các món đã dùng</th><th>Tiền</th></tr>';
  ds.forEach(m => { html += `<tr><td>${m.ten}</td><td>${m.gia}</td></tr>`; });
  if (banDem) {
    const phuThu = tong * 0.1;
    html += `<tr><td>Phụ thu ban đêm (10%)</td><td>${phuThu}</td></tr>`;
    tong += phuThu;
  }
  html += `<tr><td>Tổng tiền</td><td>${tong} đồng</td></tr></table>`;
  kq.innerHTML = html;
});
