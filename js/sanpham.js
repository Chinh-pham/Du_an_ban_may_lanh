class Sanpham {
    constructor(ten, gia, hang, kieudang, hinhanh, noiSanxuat, namSanxuat, loaimay, congsuatLamlanh, phamviLamlanh, khangkhuan, congngheTietkiemDien, tienich, tieuthuDien) {
        // 14 thuộc tính
        this.ten = ten
        this.gia = gia
        this.hang = hang
        this.kieudang = kieudang
        this.hinhanh = hinhanh
        this.noiSanxuat = noiSanxuat
        this.namSanxuat = namSanxuat
        this.loaimay = loaimay
        this.congsuatLamlanh = congsuatLamlanh
        this.phamviLamlanh = phamviLamlanh
        this.khangkhuan = khangkhuan
        this.congngheTietkiemDien = congngheTietkiemDien
        this.tienich = tienich
        this.tieuthuDien = tieuthuDien
    }
    thongtinSanpham() {
        return "Máy lạnh " + this.ten + " sản xuất tại " + this.noiSanxuat + ". Với kiểu dáng " + this.kieudang + " thuộc hãng " + this.hang + " có giá " + this.gia
    }
    thongsoKythuat() {
        return "Máy lạnh " + this.ten + " thuộc loại máy " + this.loaimay + ", có công suất làm lạnh " + this.congsuatLamlanh + "trong phạm vi " + this.phamviLamlanh + ", tiêu thụ điện khoảng " + this.tieuthuDien + ". Máy lạnh được trang bị công nghệ kháng khuẩn " + this.khangkhuan + ", công nghệ tiết kiệm điện " + this.congngheTietkiemDien + " đi kèm nhiều tiện ích như: " + this.tienich
    }
    themSanpham(arr) {
        let rowProducts = $("<div></div>")
        rowProducts.attr("class", "rowProducts")
        let lengthProducts_in_Row = 0
        for (let i = 0; i < arr.length; i++) {
            rowProducts.append("<a class='product' href='chitietsanpham.html'><div><div class='productImg'><img src='" + arr[i].hinhanh + "' alt=''></div><h3 class='productTen'>" + arr[i].ten + "</h3><div class='productGia'>" + arr[i].gia + "<sup>đ</sup></div><div class='productThemGioHang'><span>THÊM VÀO GIỎ HÀNG</span></div></div></a>")
            lengthProducts_in_Row += 1
            if (lengthProducts_in_Row == 4 || ((lengthProducts_in_Row < 4) && (i + 1 == arr.length))) {
                $("#products").append(rowProducts)
                lengthProducts_in_Row = 0
                rowProducts = $("<div></div>")
                rowProducts.attr("class", "rowProducts")
            }
        }
    }
    locSanpham(boloc, arr) {
        $("#inputTimkiem").val("")
        $(".rowProducts").remove()
        if (boloc[0] == "congsuat" && boloc[1] == "hang" && boloc[2] == "gia" && boloc[3] == "tienich" && boloc[4] == "macdinh") {
            this.themSanpham(arr)
        } else {
            let arrSPtoShow = []
            for (let i = 0; i < arr.length; i++) {
                // Lọc về Công suất
                if (boloc[0] == "up2.5" && arr[i].congsuatLamlanh <= 2.5) {
                    continue
                }
                if (boloc[0] != "up2.5" && boloc[0] != "congsuat" && eval(boloc[0]) != arr[i].congsuatLamlanh) {
                    continue
                }

                // Lọc về Hãng
                if (boloc[1] != "hang" && boloc[1] != arr[i].hang) {
                    continue
                }

                // Lọc về giá
                let gia = ""
                gia = arr[i].gia.replace(/\./g, "")
                if (eval(gia) < 7000000) {
                    gia = "low7tr"
                } else if (eval(gia) >= 7000000 && eval(gia) < 9000000) {
                    gia = "7to9tr"
                } else if (eval(gia) >= 9000000 && eval(gia) < 12000000) {
                    gia = "9to12tr"
                } else if (eval(gia) >= 12000000 && eval(gia) <= 15000000) {
                    gia = "12to15tr"
                } else {
                    gia = "up20tr"
                }
                if (boloc[2] != "gia" && boloc[2] != gia) {
                    continue
                }

                // Lọc về tiện ích
                let tienich = ""
                tienich = chuyendoiChuoi(arr[i].tienich)
                    .replace(/[,\(\)\-]/g, "")
                if (boloc[3] != "tienich" && tienich.indexOf(boloc[3]) == -1) {
                    continue
                }

                // Thêm sản phẩm thỏa mãn bộ lọc vào arr
                arrSPtoShow.push(arr[i])
            }
            // Sắp xếp các sản phẩm theo tiêu chí giá
            if (boloc[4] == "thapdencao") {
                arrSPtoShow.sort((a, b) => eval(a.gia.replace(/\./g, "")) - eval(b.gia.replace(/\./g, "")))
            } else if (boloc[4] == "caodenthap") {
                arrSPtoShow.sort((a, b) => eval(b.gia.replace(/\./g, "")) - eval(a.gia.replace(/\./g, "")))
            }

            // Nếu không có sản phẩm nào thỏa mãn bộ lọc
            if (arrSPtoShow.length == 0) {
                let rowProducts = $("<div></div>")
                rowProducts.attr("class", "rowProducts")
                rowProducts.append("<b>Không sản phẩm nào được tìm thấy</b>")
                $("#products").append(rowProducts)
            } else {
                // Hiển thị các sản phẩm thỏa mãn bộ lọc lên giao diện
                this.themSanpham(arrSPtoShow)
            }
        }
    }
    timkiemSanpham(input, arr) {
        $("#congsuat").val("congsuat")
        $("#hang").val("hang")
        $("#gia").val("gia")
        $("#tienich").val("tienich")
        $("#xeptheo").val("macdinh")
        $(".rowProducts").remove()
        input = chuyendoiChuoi(input)
            .toLowerCase()
            .replace(/[\\\-\(\)/,]/g, "")
        let arrSPtoShow = []
        for (let i = 0; i < arr.length; i++) {
            let ten, kieudang, noiSanxuat, loaimay, khangkhuan, congngheTietkiemDien = ""
            ten = arr[i].ten.toLowerCase().replace(/[ \-]/g, "")
            kieudang = chuyendoiChuoi(arr[i].kieudang)
            noiSanxuat = chuyendoiChuoi(arr[i].noiSanxuat).replace(/\//g, "")
            loaimay = chuyendoiChuoi(arr[i].loaimay).replace(/\(\)/g, "")
            khangkhuan = chuyendoiChuoi(arr[i].khangkhuan).replace(/,/g, "")
            congngheTietkiemDien = chuyendoiChuoi(arr[i].congngheTietkiemDien).replace(/,/g, "")
            arr[i].tienich = chuyendoiChuoi(arr[i].tienich).replace(/,\-\(\)/g, "")
            if (ten.indexOf(input) > -1 || kieudang.indexOf(input) > -1 || noiSanxuat.indexOf(input) > -1 || loaimay.indexOf(input) > -1 || khangkhuan.indexOf(input) > -1 || congngheTietkiemDien.indexOf(input) > -1) {
                arrSPtoShow.push(arr[i])
            }
        }

        // Nếu không có sản phẩm nào phù hợp với kết quả tìm kiếm
        if (arrSPtoShow.length == 0) {
            let rowProducts = $("<div></div>")
            rowProducts.attr("class", "rowProducts")
            rowProducts.append("<b>Không sản phẩm nào được tìm thấy</b>")
            $("#products").append(rowProducts)
        } else {
            // Hiển thị các sản phẩm phù hợp kết quả tìm kiếm
            this.themSanpham(arrSPtoShow)
        }
    }
}

function chuyendoiChuoi(str) {
    return str.normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, "d")
        .replace(/ /g, "")
}

export { Sanpham }