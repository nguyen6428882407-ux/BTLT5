const tbody = document.querySelector("#tbl tbody");

// Nhấn nút "Xóa" -> xóa dòng chứa nút đó (event delegation)
tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("xoa")) {
    e.target.closest("tr").remove();
  }
});

// Sửa số lượng / đơn giá -> tự tính lại cột Tổng
tbody.addEventListener("input", function (e) {
  const tr = e.target.closest("tr");
  if (!tr || e.target.classList.contains("tong")) return;
  const sl = parseFloat(tr.querySelector(".sl").value) || 0;
  const dg = parseFloat(tr.querySelector(".dg").value) || 0;
  tr.querySelector(".tong").value = sl * dg;
});
