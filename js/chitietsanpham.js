import { arrSP_DSSP } from "./sanpham_array.js"

$(document).ready(function () {
    let stringSP = sessionStorage.getItem("TTCT_SP")
    const name = JSON.parse(stringSP).ten;
    let arrReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const arrReviewsSP = arrReviews.filter(review => review.tenSP === name);
    if (arrReviewsSP.length == 0) {
        arrReviews = [
            ...arrReviews,
            {
                tenSP: name,
                reviews: []
            }
        ]
        localStorage.setItem("reviews", JSON.stringify(arrReviews));
    }
    console.log(arrReviewsSP);
    
    let ulHTML = "";
    arrReviewsSP[0].reviews.forEach(review => {
        ulHTML += `<li>
        <div class="review">
            <div class="reviewer">${review.name}</div>
            <div class="rating">Đánh giá: ${review.rate} sao</div>
            <div class="review-content">${review.review}</div>
        </div>
    </li>`
    })
    document.getElementById("review-list").innerHTML = ulHTML;
    
    if (stringSP == null) {
        $("body").empty()
        $("body").append("<div style='text-align:center'><h1>Vui lòng quay lại</h1><a style='font-size:20px' href='../html/trangchu.html'>trang chủ</a> hoặc <a style='font-size:20px' href='../html/danhsachsanpham.html'>trang danh sách sản phẩm</a><p>Để chọn và xem thông tin chi tiết sản phẩm bạn mong muốn</p></div>")
    } else {
        let objSP = JSON.parse(stringSP)
        $("#hinhanhSP").attr("src", objSP.hinhanh[1])
        $(".tenSP").text(objSP.ten)
        $("#gia").text(objSP.gia + "đ")
        $("#loaiMay").text(objSP.loaimay)
        $("#congsuat").text(objSP.congsuatLamlanh + " HP")
        $("#phamviLamlanh").text(objSP.phamviLamlanh)
        $("#tieuthuDien").text(objSP.tieuthuDien + " kW/h")
        $("#khangkhuan").text(objSP.khangkhuan)
        $("#tietkiemDien").text(objSP.congngheTietkiemDien)
        $("#tienich").text(objSP.tienich)
        $("#noiSanxuat").text(objSP.noiSanxuat)

        // Thêm các sản phẩm tương tự (dựa vào hãng hoặc công suất làm lạnh)
        let arraySP_tuongtu = []
        for (let i = 0; i < arrSP_DSSP.length; i++) {
            if ((objSP.hang === arrSP_DSSP[i].hang && objSP.ten !== arrSP_DSSP[i].ten) || (objSP.congsuatLamlanh === arrSP_DSSP[i].congsuatLamlanh && objSP.ten !== arrSP_DSSP[i].ten)) {
                arraySP_tuongtu.push(arrSP_DSSP[i])
                if (arraySP_tuongtu.length == 4) {
                    break
                }
            }
        }

        let rowProducts = $("<div></div>")
        rowProducts.attr("class", "rowProducts")
        let lengthProducts_in_Row = 0

        for (let i = 0; i < arraySP_tuongtu.length; i++) {
            rowProducts.append("<a class='product' href='../html/chitietsanpham.html'><div><div class='productImg'><img src='" + arraySP_tuongtu[i].hinhanh[0] + "' alt=''></div><h3 class='productTen'>" + arraySP_tuongtu[i].ten + "</h3><div class='productGia'>" + arraySP_tuongtu[i].gia + "<sup>đ</sup></div></div></a>")
            lengthProducts_in_Row += 1
            if (lengthProducts_in_Row == 2 || ((lengthProducts_in_Row < 2) && (i + 1 == arraySP_tuongtu.length))) {
                $("#cacSP_tuongtu").append(rowProducts)
                lengthProducts_in_Row = 0
                rowProducts = $("<div></div>")
                rowProducts.attr("class", "rowProducts")
            }
        }

        $(".product").click(function () {
            let tensanpham = $(this)[0].childNodes[0].childNodes[1].innerText
            for (let i = 0; i < arrSP_DSSP.length; i++) {
                if (tensanpham == arrSP_DSSP[i].ten) {
                    sessionStorage.setItem("TTCT_SP", JSON.stringify(arrSP_DSSP[i]))
                    break
                }
            }
        })

        $("#muangay").click(function () {
            const taiKhoanDN = localStorage.getItem("tkDangnhap")
            const dsGio = localStorage.getItem("dsGioSP")
            if (taiKhoanDN == null) {
                alert("Vui lòng đăng nhập để mua hàng!")
                return
            }
            const taikhoan = JSON.parse(taiKhoanDN)
            const giohang = {
                tendangnhap: taikhoan.ten_dangnhap,
                sanpham: [
                    {
                        hinhanh: objSP.hinhanh[0],
                        ten: objSP.ten,
                        gia: objSP.gia
                    }
                ]
            }
            if (dsGio == null) {
                let dsGioSP = []
                giohang.sanpham[0].soluong = 1
                dsGioSP.push(giohang)
                localStorage.setItem("dsGioSP", JSON.stringify(dsGioSP))
            } else {
                let objDSGioSP = JSON.parse(dsGio)
                let giaodichMoi = true
                for (let i = 0; i < objDSGioSP.length; i++) {
                    if (taikhoan.ten_dangnhap === objDSGioSP[i].tendangnhap) {
                        giaodichMoi = false
                        let sanphamDuocThemNhieuLan = false
                        for (let j = 0; j < objDSGioSP[i].sanpham.length; j++) {
                            if (giohang.sanpham[0].ten === objDSGioSP[i].sanpham[j].ten) {
                                sanphamDuocThemNhieuLan = true
                                objDSGioSP[i].sanpham[j].soluong += 1
                                break
                            }
                        }
                        if (!sanphamDuocThemNhieuLan) {
                            giohang.sanpham[0].soluong = 1
                            objDSGioSP[i].sanpham.push(giohang.sanpham[0])
                        }
                        break
                    }
                }
                if (giaodichMoi) {
                    giohang.sanpham[0].soluong = 1
                    objDSGioSP.push(giohang)
                }
                localStorage.setItem("dsGioSP", JSON.stringify(objDSGioSP))
            }
            location.href = "../html/giohang.html"
        })
    }

    const buttonSubmit = document.getElementById("submit");
    const inputName = document.getElementById("username");
    const inputReview = document.getElementById("review-text");
    const rating = document.getElementById("rating");

    buttonSubmit.addEventListener("click", function () {
        const name = inputName.value;
        const review = inputReview.value;
        const rate = rating.value;
        const objReview = {
            name: name,
            review: review,
            rate: rate
        }
        const arrReviews = JSON.parse(localStorage.getItem("reviews"));
        const stringSP = sessionStorage.getItem("TTCT_SP");
        const nameSP = JSON.parse(stringSP).ten;
        for (let i = 0; i < arrReviews.length; i++) {
            if (arrReviews[i].tenSP === nameSP) {
                arrReviews[i].reviews.push(objReview);
                localStorage.setItem("reviews", JSON.stringify(arrReviews));
                break;
            }
        }
        alert("Đã gửi đánh giá!");
        location.reload();
    })
})