function loadDs() {
    var content = "";
    for (var i = 0; i < userArr.length; i++) {
        var data = userArr[i];
        content += `
        <tr>
        <td>${data.taiKhoan}</td>
        <td>${data.hoTen}</td>
        <td>${data.email}</td>
        <td>${data.dateOfStart}</td>
        <td>${data.chucVu}</td>
        <td>${data.tinhLuong()}</td>
        <td>${data.xepLoai()}</td>
        <td></td>
        <td>
            <button class="btn btn-primary" onclick="xoaUser('${data.taiKhoan}')">Xóa</button>
            <button class="btn btn-primary" onclick="capNhatUser('${data.taiKhoan}')">Cập nhật</button>
        </td>
        </tr>`
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function getInput() {
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var dateOfStart = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    var user = {
        taiKhoan: taiKhoan,
        hoTen: hoTen,
        email: email,
        pass: pass,
        dateOfStart: dateOfStart,
        luongCB: luongCB,
        chucVu: chucVu,
        gioLam: gioLam,
        tinhLuong: function () {
            var tongLuong = 0;
            if (this.chucVu === "Sếp") {
                tongLuong = this.luongCB * 3;
            }
            else if (this.chucVu === "Trưởng phòng") {
                tongLuong = this.luongCB * 2;
            } else {
                tongLuong = this.luongCB;
            }
            return tongLuong;
        },
        xepLoai: function () {
            var loai = "";
            if (this.gioLam >= 192) {
                loai = "Xuất sắc";
            } else if (this.gioLam >= 176) {
                loai = "Giỏi";
            } else if (this.gioLam >= 160) {
                loai = "Khá";
            } else {
                loai = "Trung bình";
            }
            return loai;
        }
    }
    return user;
}

function openModal() {
    $('#myModal').modal('show');
}