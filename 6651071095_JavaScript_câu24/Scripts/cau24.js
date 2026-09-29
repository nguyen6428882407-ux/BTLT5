const cboThang = document.getElementById("thang");
for (let i = 1; i <= 12; i++) cboThang.add(new Option(i, i));
cboThang.value = 1;

const TEN_THU = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

document.getElementById("btnXuat").addEventListener("click", function () {
  const d = parseInt(document.getElementById("ngay").value, 10);
  const m = parseInt(cboThang.value, 10);
  const y = parseInt(document.getElementById("nam").value, 10);
  const kq = document.getElementById("kq");
  kq.className = "ctr";

  const date = new Date(y, m - 1, d);
  // kiểm tra ngày hợp lệ (vd: 31/2 sẽ bị JS tự nhảy sang tháng sau)
  const hopLe = !isNaN(d) && !isNaN(y) && y > 0 &&
    date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
  if (!hopLe) {
    kq.className = "ctr err";
    kq.textContent = "Ngày tháng năm không hợp lệ!";
    return;
  }
  kq.textContent = `${TEN_THU[date.getDay()]} Ngày ${d} tháng ${m} năm ${y}`;
});
