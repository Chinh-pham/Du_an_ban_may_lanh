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
}

export {Sanpham}