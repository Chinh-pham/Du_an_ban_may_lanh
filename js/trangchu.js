import { arrSP_Trangchu } from "../js/Sanpham_array.js"
import { Sanpham } from "../js/Sanpham.js"
const sp = new Sanpham()

let stringTimkiem = sessionStorage.getItem("timkiemTrangchu")

if (stringTimkiem != null){
    sp.timkiemSanpham(stringTimkiem, arrSP_Trangchu)
} else{
    sp.themSanpham(arrSP_Trangchu)
}

$(".trangchu").click(function(){
    sessionStorage.removeItem("timkiemTrangchu")
})

$("#formSearch").submit(function (event) {
    event.preventDefault()
})

$("#inputTimkiem").focus()

// Tìm kiếm sản phẩm
$("#inputTimkiem").keydown(function (event) {
    if (event.which === 13 || event.keyCode === 13) {
        if (this.value.trim() != "") {
            sp.timkiemSanpham(this.value, arrSP_Trangchu)
        }
    }
})
$("#btnTimkiem").click(function () {
    $("#inputTimkiem").focus()
    let input = ""
    input = $("#inputTimkiem").val()
    if (input.trim() != "") {
        sp.timkiemSanpham(input, arrSP_Trangchu)
    }
})