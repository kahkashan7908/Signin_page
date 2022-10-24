var flag = "";
function ContinueClick() {
  var userId = document.getElementById("UserId").value;
  var userMsg1 = document.getElementById("userMsg1").value;
  var userMsg2 = document.getElementById("userMsg2").value;
  var regExp1 =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  var regExp2 = /^[6-9]\d{9}$/;

  if (userId.match(regExp1)) {
    document.getElementById("userMsg1").innerHTML = "login success".fontcolor("green");
    document.getElementById("userMsg2").innerHTML = "";
    document.getElementById("UserId").value=""


  } else {
    if (userId.match(regExp2)) {
      document.getElementById("userMsg1").innerHTML = "login success".fontcolor("green");
      document.getElementById("userMsg2").innerHTML = "";
      document.getElementById("UserId").value=""
    } else {
      document.getElementById("userMsg2").innerHTML ="Invalid Email or Mobile".fontcolor("red");
      document.getElementById("userMsg1").innerHTML = "";
    }
  }
}
