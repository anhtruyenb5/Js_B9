var userArr = [];
var dataJson = localStorage.getItem("dsuser");
var arrayNv = JSON.parse(dataJson);

for (var i = 0; i < arrayNv.length; i++) {
    var data = arrayNv[i];
    var nv = new NhanVien(
        arrayNv[i].taiKhoan,
        arrayNv[i].hoTen,
        arrayNv[i].email,
        arrayNv[i].pass,
        arrayNv[i].dateOfStart,
        arrayNv[i].luongCB,
        arrayNv[i].chucVu,
        arrayNv[i].gioLam,
    )
    userArr.push(nv);
}
loadDs();

function themUser() {
    var user = getInput();
    userArr.push(user);
    console.log(userArr);
    var dataJson = JSON.stringify(userArr);
    localStorage.setItem("dsuser", dataJson);
    loadDs();
}

function xoaUser(taiKhoan) {
    var index = 0;
    for (var i = 0; i < userArr.length; i++) {
        if (taiKhoan == userArr[i]) {
            index = i;
        }
    }
    userArr.splice(index, 1);
    var dataJson = JSON.stringify(userArr);
    localStorage.setItem("dsuser", dataJson);
    loadDs();
}

function capNhatUser(taiKhoan) {
    openModal();
    var index = 0;
    for (var i = 0; i < userArr.length; i++) {
        if (taiKhoan == userArr[i].taiKhoan) {
            index = i;
        }
    }
    console.log(userArr[index]);
    document.getElementById("tknv").value = userArr[index].taiKhoan;
    document.getElementById("name").value = userArr[index].hoTen;
    document.getElementById("email").value = userArr[index].email;
    document.getElementById("password").value = userArr[index].pass;
    document.getElementById("datepicker").value = userArr[index].dateOfStart;
    document.getElementById("luongCB").value = userArr[index].luongCB;
    document.getElementById("chucvu").value = userArr[index].chucVu;
    document.getElementById("gioLam").value = userArr[index].gioLam;
}

function updateUser() {
    var user = getInput();
    var index = 0;
    for (var i = 0; i < userArr.length; i++) {
        if (user.taiKhoan == userArr[i].taiKhoan) {
            index = i;
        }
    }
    userArr[index] = user;
    var dataJson = JSON.stringify(userArr);
    localStorage.setItem("dsuser", dataJson);
    loadDs();
}