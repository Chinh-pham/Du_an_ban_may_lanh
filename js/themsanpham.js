function themSanpham(arr) {
    let rowProducts = $("<div></div>")
    let lengthProducts_in_Row = 0
    for (let i = 0; i < arr.length; i++) {
        rowProducts.append("<a class='product' href='chitietsanpham.html'><div><div class='productImg'><img src='" + arr[i].hinhanh + "' alt=''></div><h3 class='productTen'>" + arr[i].ten + "</h3><div class='productGia'>" + arr[i].gia + "<sup>đ</sup></div><div class='productThemGioHang'><span>THÊM VÀO GIỎ HÀNG</span></div></div></a>")
        lengthProducts_in_Row += 1
        if (lengthProducts_in_Row == 4 || ((lengthProducts_in_Row < 4) && (i + 1 == arr.length))) {
            $("#products").append(rowProducts)
            lengthProducts_in_Row = 0
            rowProducts = $("<div></div>")
        }
    }
}

export {themSanpham}