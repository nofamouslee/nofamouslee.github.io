function check(thisform){
    var name=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(name=="18087813060" && pass=="12345678" || name=="leejc" && pass=="12345678")
    {
        // alert("登陆成功！");
        // window.document.f="jinru.html";
        // window.document.f.submi();
        window.open("jinru.html","_self");
        alert("登录成功！");
    }
    else
    {
        alert("用户名或密码错误！");
    }
}