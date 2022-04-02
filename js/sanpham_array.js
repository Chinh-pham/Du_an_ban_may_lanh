import { Sanpham } from "./Sanpham.js";

const sp1 = new Sanpham("Panasonic Inverter 1 HP CU/CS-PU9WKH-8M", "10.590.000", "Panasonic", "Máy lạnh treo tường", ["../img/panasonicInverter1HP.png", "../img/panasonicInverter1HP_2.png"], "Malaysia", 2020, "1 chiều (chỉ làm lạnh)", 1, "Dưới 15m2", "Nanoe-G lọc bụi mịn PM 2.5", "ECO tích hợp A.I, Inverter", "Chế độ ngủ đêm Sleep cho người già, trẻ nhỏ, Chức năng hút ẩm, Chức năng tự chẩn đoán lỗi, Cánh đảo gió Big Flap đưa hơi lạnh đi xa hơn, Hoạt động siêu êm Quiet, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Tự khởi động lại khi có điện, Điều khiển từ xa với ứng dụng Comfort Cloud", 0.8)
const sp2 = new Sanpham("Panasonic Inverter 1.5 HP CU/CS-PU12WKH-8M", "12.890.000", "Panasonic", "Máy lạnh treo tường", ["../img/panasonicInverter1.5HP.png", "../img/panasonicInverter1.5HP_2.png"], "Malaysia", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1.5, "Từ 15 - 20 m2", "Nanoe-G lọc bụi mịn PM 2.5", "ECO tích hợp A.I, Inverter", "Chế độ ngủ đêm Sleep cho người già, trẻ nhỏm Chức năng hút ẩm, Chức năng tự chẩn đoán lỗi, Cánh đảo gió Big Flap đưa hơi lạnh đi xa hơn, Hoạt động siêu êm Quiet, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Tự khởi động lại khi có điện, Điều khiển từ xa với ứng dụng Comfort Cloud", 1.07)
const sp3 = new Sanpham("Daikin Inverter 1 HP FTKA25VMVMV", "10.590.000", "Daikin", "Máy lạnh treo tường", ["../img/daikinInverter1HP.png", "../img/daikinInverter1HP_2.png"], "Việt Nam", 2021, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m2", "Khử mùi Enzyme Blue mặc định & PM 2.5 (Tùy chọn mua thêm)", "Econo, Inverter", "Chế độ làm lạnh nhanh, Chức năng chống ẩm mốc bảo vệ sức khỏe, Chức năng hút ẩm, Cánh tản nhiệt dàn nóng chống ăn mòn, Dàn nóng được trang bị thêm bo mạch để bảo vệ khi điện áp thay đổi, Hoạt động siêu êm Quiet, Hẹn giờ bật tắt máy, Luồng gió thoải mái Coanda, Máng nước có thể tháo rời (dễ vệ sinh dàn lạnh), Tùy chọn mua thêm bộ điều khiển không dây Daikin Mobile, Tự khởi động lại khi có điện", 0.92)
const sp4 = new Sanpham("Daikin Inverter 1.5 HP FTKA35VMVMV", "12.990.000", "Daikin", "Máy lạnh treo tường", ["../img/daikinInverter1.5HP.png", "../img/daikinInverter1.5HP_2.png"], "Việt Nam", 2021, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1.5, "Từ 15 - 20m² (từ 40 đến 60 m³)", "Khử mùi Enzyme Blue mặc định & PM 2.5 (Tùy chọn mua thêm)", "Econo, Inverter", "Chế độ làm lạnh nhanh, Chức năng chống ẩm mốc bảo vệ sức khỏe, Chức năng hút ẩm, Cánh tản nhiệt dàn nóng chống ăn mòn, Dàn nóng được trang bị thêm bo mạch để bảo vệ khi điện áp thay đổi, Hoạt động siêu êm Quiet, Hẹn giờ bật tắt máy, Luồng gió thoải mái Coanda, Máng nước có thể tháo rời(dễ vệ sinh dàn lạnh), Tùy chọn mua thêm bộ điều khiển không dây Daikin Mobile, Tự khởi động lại khi có điện", 1.22)
const sp5 = new Sanpham("Sharp Inverter 1 HP AH-X9XEW", "9.400.000", "Sharp", "Máy lạnh treo tường", ["../img/sharpInverter1HP.png", "../img/sharpInverter1HP_2.png"], "Thái Lan", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Lưới lọc bụi polypropylene", "Eco, J-Tech Inverter", "7 tính năng bảo vệ an toàn, bền bỉ, Chế độ Breeze (gió tự nhiên), Chế độ ngủ đêm Sleep cho người già, trẻ nhỏ, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Thổi gió dễ chịu Comfort Air (cho trẻ em, người già), Tự khởi động lại khi có điện", 0.8)
const sp6 = new Sanpham("LG Inverter 1 HP V10ENH1", "9.790.000", "LG", "Máy lạnh treo tường", ["../img/lgInverter1HP.png", "../img/lgInverter1HP_2.png"], "Thái Lan", 2021, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Màng lọc sơ cấp", "Dual inverter, Energy Ctrl - Kiểm soát năng lượng chủ động 4 mức", "Chức năng tự chẩn đoán lỗi, Chức năng tự làm sạch, Có tự điều chỉnh nhiệt độ (chế độ ngủ đêm), Công nghệ Gold-Fin chống ăn mòn, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Thổi gió dễ chịu Comfort Air (cho trẻ em, người già), Tự khởi động lại khi có điện", 0.92)
const sp7 = new Sanpham("Samsung Inverter 1 HP AR10TYHYCWKNSV", "9.790.000", "Samsung", "Máy lạnh treo tường", ["../img/samsungInverter1HP.png", "../img/samsungInverter1HP_2.png"], "Thái Lan", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Bộ lọc thô Easy Filter, Bộ lọc Tri Care Filter lọc bụi, chống nấm mốc, kháng khuẩn, Màng lọc kháng khuẩn Ag+", "Digital Inverter Boost, Eco", "Bộ ba Triple Protector Plus bảo vệ tối ưu cho hiệu suất bền bỉ, Chế độ chỉ sử dụng quạt Fan Only - chỉ làm mát, không làm lạnh, Chức năng hút ẩm, Chức năng tự làm sạch Auto Clean, Có tự điều chỉnh nhiệt độ (chế độ ngủ đêm), Dàn tản nhiệt phủ lớp chống ăn mòn Durafin, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Màn hình hiển thị nhiệt độ trên dàn lạnh, Tự khởi động lại khi có điện, Đảo gió 4 chiều giúp hơi lạnh lan toả đồng đều", 0.91)
const sp8 = new Sanpham("Toshiba Inverter 1 HP RAS-H10D2KCVG-V", "9.990.000", "Toshiba", "Máy lạnh treo tường", ["../img/toshibaInverter1HP.png", "../img/toshibaInverter1HP_2.png"], "Thái Lan", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Bộ lọc Toshiba IAQ, Công nghệ chống bám bẩn Magic Coil, Bộ lọc chống nấm mốc", "Hybrid Inverter, Eco", "Chế độ chỉ sử dụng quạt Fan Only - chỉ làm mát, không làm lạnh, Chức năng tự chẩn đoán lỗi, Hẹn giờ bật, tắt, Chức năng hút ẩm, Làm lạnh nhanh tức thì, Tự khởi động lại khi có điện, Chức năng tự làm sạch", 0.83)
const sp9 = new Sanpham("Aqua Inverter 1 HP AQA-KCRV10WNZA", "8.040.000", "Aqua", "Máy lạnh treo tường", ["../img/aquaInverter1HP.png", "../img/aquaInverter1HP_2.png"], "Việt Nam", 2021, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Không có", "PID Inverter", "Chức năng hút ẩm, Có tự điều chỉnh nhiệt độ (chế độ ngủ đêm), Dàn nóng/lạnh BlueFin hạn chế ăn mòn, Hoạt động siêu êm Quiet, Hẹn giờ bật tắt máy, Khóa remote điều khiển, Làm lạnh nhanh tức thì, Thổi gió dễ chịu Comfort Air (cho trẻ em, người già), Tự khởi động lại khi có điện, Tự làm sạch dàn lạnh Aqua Fresh", 0.75)
const sp10 = new Sanpham("Samsung Inverter 1.5 HP AR13TYHYCWKNSV", "10.590.000", "Samsung", "Máy lạnh treo tường", ["../img/samsungInverter1.5HP.png", "../img/samsungInverter1.5HP_2.png"], "Thái Lan", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1.5, "Từ 15 - 20m² (từ 40 đến 60 m³)", "Bộ lọc thô Easy Filter, Bộ lọc Tri Care Filter lọc bụi, chống nấm mốc, kháng khuẩn, Màng lọc kháng khuẩn Ag+", "Digital Inverter Boost, Eco", "Bộ ba Triple Protector Plus bảo vệ tối ưu cho hiệu suất bền bỉ, Chế độ chỉ sử dụng quạt Fan Only - chỉ làm mát, không làm lạnh, Chức năng hút ẩm, Chức năng tự làm sạch Auto Clean, Có tự điều chỉnh nhiệt độ (chế độ ngủ đêm), Dàn tản nhiệt phủ lớp chống ăn mòn Durafin, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Màn hình hiển thị nhiệt độ trên dàn lạnh, Tự khởi động lại khi có điện, Đảo gió 4 chiều giúp hơi lạnh lan toả đồng đều", 1.25)
const sp11 = new Sanpham("Sharp Inverter 1.5 HP AH-X12XEW", "11.090.000", "Sharp", "Máy lạnh treo tường", ["../img/sharpInverter1.5HP.png", "../img/sharpInverter1.5HP_2.png"], "Thái Lan", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1.5, "Từ 15 - 20m² (từ 40 đến 60 m³)", "Lưới lọc bụi polypropylene", "Eco, J-Tech Inverter", "7 tính năng bảo vệ an toàn, bền bỉ, Chế độ Breeze (gió tự nhiên), Chế độ ngủ đêm Sleep cho người già, trẻ nhỏ, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Thổi gió dễ chịu Comfort Air (cho trẻ em, người già), Tự khởi động lại khi có điện", 1.07)
const sp12 = new Sanpham("Sharp Inverter 2 HP AH-X18XEW", "15.990.000", "Sharp", "Máy lạnh treo tường", ["../img/sharpInverter2HP.png", "../img/sharpInverter2HP_2.png"], "Thái Lan", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 2, "Từ 20 - 30m² (từ 60 đến 80m³)", "Lưới lọc bụi polypropylene", "Eco, J-Tech Inverter", "7 tính năng bảo vệ an toàn, bền bỉ, Chế độ Breeze (gió tự nhiên), Chế độ ngủ đêm Sleep cho người già, trẻ nhỏ, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Thổi gió dễ chịu Comfort Air (cho trẻ em, người già), Tự khởi động lại khi có điện", 1.64)
const sp13 = new Sanpham("Kangaroo Inverter 1 HP KGAC09CI", "7.390.000", "Kangaroo", "Máy lạnh treo tường", ["../img/kangarooInverter1HP.png", "../img/kangarooInverter1HP_2.png"], "Thái Lan", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Tấm vi lọc bụi", "Inverter", "Chế độ iFeel, Chức năng hút ẩm, Có tự điều chỉnh nhiệt độ (chế độ ngủ đêm), Ghi nhớ chế độ làm lạnh iFavor, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Màn hình hiển thị nhiệt độ trên dàn lạnh, Tự khởi động lại khi có điện", 0.84)
const sp14 = new Sanpham("Casper Inverter 1 HP GC-09IS32", "8.640.000", "Casper", "Máy lạnh treo tường", ["../img/casperInverter1HP.png", "../img/casperInverter1HP_2.png"], "Thái Lan", 2021, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Tấm lọc 3 trong 1", "Eco, Inverter", "Chế độ chỉ sử dụng quạt Fan Only - chỉ làm mát, không làm lạnh, Chế độ vận hành khi ngủ, Chức năng hút ẩm, Chức năng Smart - Tự động cảm biến nhiệt độ phòng, Chức năng tự làm sạch, Cơ chế bảo vệ an toàn kép phát hiện rò rỉ thông minh, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Màn hình hiển thị nhiệt độ trên dàn lạnh, Tự khởi động lại khi có điện", 0.77)
const sp15 = new Sanpham("Midea Inverter 1 HP MSAFA-10CRDN8", "8.390.000", "Midea", "Máy lạnh treo tường", ["../img/mideaInverter1HP.png", "../img/mideaInverter1HP_2.png"], "Việt Nam/ Trung Quốc", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 1, "Dưới 15m² (từ 30 đến 45m³)", "Bộ lọc bụi 2 lớp HD", "Eco", "Chế độ chỉ sử dụng quạt Fan Only - chỉ làm mát, không làm lạnh, Chức năng hút ẩm, Chức năng tự làm sạch, Follow me - chức năng cài đặt nhiệt độ tại vị trí remote, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Remote có đèn LED, Ống thoát nước 2 chiều tiện lợi trong lắp đặt", 0.74)
const sp16 = new Sanpham("Midea Inverter 2 HP MSAFA-18CRDN8", "15.890.000", "Midea", "Máy lạnh treo tường", ["../img/mideaInverter2HP.png", "../img/mideaInverter2HP_2.png"], "Việt Nam", 2020, "Máy lạnh 1 chiều (chỉ làm lạnh)", 2, "Từ 20 - 30m² (từ 60 đến 80m³)", "Bộ lọc bụi 2 lớp HD", "Eco, Inverter", "Chế độ chỉ sử dụng quạt Fan Only - chỉ làm mát, không làm lạnh, Chức năng hút ẩm, Chức năng tự làm sạch, Follow me - chức năng cài đặt nhiệt độ tại vị trí remote, Hẹn giờ bật tắt máy, Làm lạnh nhanh tức thì, Remote có đèn LED, Ống thoát nước 2 chiều tiện lợi trong lắp đặt", 1.75)

let arrSP_Trangchu = []
arrSP_Trangchu.push(sp1)
arrSP_Trangchu.push(sp2)
arrSP_Trangchu.push(sp3)
arrSP_Trangchu.push(sp4)
arrSP_Trangchu.push(sp5)
arrSP_Trangchu.push(sp6)
arrSP_Trangchu.push(sp7)
arrSP_Trangchu.push(sp8)

let arrSP = []
arrSP.push(sp9)
arrSP.push(sp10)
arrSP.push(sp11)
arrSP.push(sp12)
arrSP.push(sp13)
arrSP.push(sp14)
arrSP.push(sp15)
arrSP.push(sp16)

let arrSP_DSSP = arrSP.concat(arrSP_Trangchu)

export {arrSP_Trangchu, arrSP_DSSP}