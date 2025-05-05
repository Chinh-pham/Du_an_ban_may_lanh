$(document).ready(function () {
    $(".btn-buy").click(function () {
        const taikhoan = localStorage.getItem("tkDangnhap");

        if (!taikhoan) {
            alert("Vui lòng đăng nhập để mua sản phẩm.");
            window.location.href = "../html/dangnhap.html"; // Đường dẫn đến trang đăng nhập
            return;
        }

        // Lấy thông tin sản phẩm từ DOM
        const productElement = $(this).closest(".product");
        const tenSP = productElement.find(".product-name").text().trim();
        const giaSP = productElement.find(".price").text().replace(/[^\d]/g, "") * 1;
        const hinhAnh = productElement.find("img").attr("src");

        const sp = {
            hinhanh: hinhAnh,
            ten: tenSP,
            gia: giaSP,
            soluong: 1
        };

        const giohang = {
            tendangnhap: JSON.parse(taikhoan).ten_dangnhap,
            sanpham: [sp]
        };

        let dsGioSP = JSON.parse(localStorage.getItem("dsGioSP")) || [];
        let timThayTK = false;

        for (let i = 0; i < dsGioSP.length; i++) {
            if (dsGioSP[i].tendangnhap === giohang.tendangnhap) {
                timThayTK = true;
                let timThaySP = false;

                for (let j = 0; j < dsGioSP[i].sanpham.length; j++) {
                    if (dsGioSP[i].sanpham[j].ten === sp.ten) {
                        dsGioSP[i].sanpham[j].soluong += 1;
                        timThaySP = true;
                        break;
                    }
                }

                if (!timThaySP) {
                    dsGioSP[i].sanpham.push(sp);
                }

                break;
            }
        }

        if (!timThayTK) {
            dsGioSP.push(giohang);
        }

        localStorage.setItem("dsGioSP", JSON.stringify(dsGioSP));
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
        window.location.href = "../html/giohang.html"; // Chuyển đến trang giỏ hàng
    });
});
