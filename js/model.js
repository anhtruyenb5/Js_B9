function NhanVien(taiKhoan, hoTen, email, pass, dateOfStart, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.pass = pass;
    this.dateOfStart = dateOfStart;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tinhLuong = function () {
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
    }
    this.xepLoai = function () {
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