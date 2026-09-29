const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

document.getElementById("btnTinh").addEventListener("click", function () {
  const txt = document.getElementById("namDL").value.trim();
  const loi = document.getElementById("loi");
  const out = document.getElementById("namAL");
  loi.textContent = "";
  out.value = "";

  // validate: không rỗng, chỉ gồm chữ số, là năm dương > 0
  if (txt === "") { loi.textContent = "Vui lòng nhập năm!"; return; }
  if (!/^\d+$/.test(txt)) { loi.textContent = "Năm phải là số nguyên dương!"; return; }
  const nam = parseInt(txt, 10);
  if (nam < 1 || nam > 9999) { loi.textContent = "Năm phải nằm trong khoảng 1 - 9999!"; return; }

  out.value = CAN[(nam + 6) % 10] + " " + CHI[(nam + 8) % 12];
});
