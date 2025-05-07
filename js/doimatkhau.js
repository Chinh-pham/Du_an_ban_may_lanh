
function changePassword() {
    const oldPassword = document.getElementById("oldPassword").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    let user = localStorage.getItem("tkDangnhap");

    if (!user) {
        errorMessage.textContent = "Không tìm thấy thông tin tài khoản.";
        return;
    }

    let userData = JSON.parse(user);

    // Kiểm tra mật khẩu cũ
    if (oldPassword !== userData.matKhau) {
        errorMessage.textContent = "Mật khẩu cũ không chính xác.";
        return;
    }

    // Kiểm tra mật khẩu mới rỗng hoặc trùng mật khẩu cũ
    if (newPassword === "") {
        errorMessage.textContent = "Vui lòng nhập mật khẩu mới.";
        return;
    }

    if (newPassword === oldPassword) {
        errorMessage.textContent = "Mật khẩu mới không được trùng mật khẩu cũ.";
        return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "Xác nhận mật khẩu không khớp.";
        return;
    }

    // Cập nhật mật khẩu mới
    userData.matKhau = newPassword;
    localStorage.setItem("tkDangnhap", JSON.stringify(userData));

    errorMessage.style.color = "green";
    errorMessage.textContent = "Đổi mật khẩu thành công!";
    
    // Optional: reset form sau khi đổi thành công
    document.getElementById("oldPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
}
