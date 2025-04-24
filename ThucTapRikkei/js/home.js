/* thêm*/
document
  .querySelector(".btn-add-account")
  .addEventListener("click", function () {
    window.location.href = "add_partner_account.html";
  });
/* xóa*/
function openPopup() {
  // Hiển thị popup xác nhận
  document.getElementById("deletePopup").classList.add("show");
}

function closePopup() {
  // Đóng popup
  document.getElementById("deletePopup").classList.remove("show");
}

// Hàm để xử lý khi người dùng xác nhận xóa đối tác
function deletePartner() {
  // Xử lý xóa đối tác ở đây (có thể là xóa từ server hoặc từ DOM)
  console.log("Đối tác đã bị xóa");

  // Đóng popup sau khi xóa
  closePopup();
}

// Đóng popup khi click ra ngoài vùng popup
document
  .getElementById("deletePopup")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closePopup();
    }
  });
