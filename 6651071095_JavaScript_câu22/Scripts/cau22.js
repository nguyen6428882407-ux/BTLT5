function tinh(pheptoan) {
  const a = parseInt(document.getElementById("num1").value, 10);
  const b = parseInt(document.getElementById("num2").value, 10);
  const kq = document.getElementById("result");
  kq.className = "";
  if (isNaN(a) || isNaN(b)) {
    kq.className = "err";
    kq.textContent = "Vui lòng nhập hai số nguyên hợp lệ!";
    return;
  }
  if (pheptoan === "mul") {
    kq.textContent = a * b;
  } else {
    if (b === 0) {
      kq.className = "err";
      kq.textContent = "Không thể chia cho 0!";
      return;
    }
    kq.textContent = a / b;
  }
}
document.getElementById("btnMul").addEventListener("click", () => tinh("mul"));
document.getElementById("btnDiv").addEventListener("click", () => tinh("div"));
