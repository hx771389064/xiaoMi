let test = false;
let test1 = false;
$(".userName").blur(function () {
    var _regNum = /\d+/;
    var _regChar = /[a-zA-Z]+/;
    if (_regNum.test($(".userName").val()) && _regChar.test($(".userName").val()) == true) {
        $(this).css("border-color", "");
        $(".tipe").text("√");
        test = true;
    } else {
        $(this).css("border-color", "red");
        $(".tipe").text("×");
        test = false;
    }
});
$(".userPwd").blur(function () {
    var _regNum = /\d+/;
    var _regChar = /[a-zA-Z]+/;
    if (_regNum.test($(".userPwd").val()) && _regChar.test($(".userPwd").val()) == true) {
        $(this).css("border-color", "");
        $(".tipes").text("√");
        test1 = true;
    } else {
        $(this).css("border-color", "red");
        $(".tipes").text("×");
        test1 = false;
    }
});
console.log(test);
console.log(test1);
$('.buttoms').click(function () {
    if (test && test1) {
        $.ajax({
            url: "Signin.php",
            type: "post",
            data: {
                username: $(".username").val(),
                userpass: $(".userpass").val()
            },
            success: function (res) {
                if (res !== "success") {
                    alert("注册成功！"),
                        location.href = "logIn.html";
                    saveCookie("username", $("#username").val())
                    // $("#logo").html($("#username"));         
                } else {
                    alert("注册失敗");
                    // window.location.href  =  "index.html";

                }
            }

        });
    }
});