/*변수 선언*/

var id = document.querySelector("#id");

var pw1 = document.querySelector("#pswd1");
var pwMsg = document.querySelector("#alertTxt");
var pwImg1 = document.querySelector("#pswd1_img1");

var pw2 = document.querySelector("#pswd2");
var pwImg2 = document.querySelector("#pswd2_img1");
var pwMsgArea = document.querySelector(".int_pass");

var userName = document.querySelector("#name");

var address = document.querySelector("#address");

var yy = document.querySelector("#yy");
var mm = document.querySelector("#mm");
var dd = document.querySelector("#dd");

var gender = document.querySelector("#gender");

var email = document.querySelector("#email");

var mobile = document.querySelector("#mobile");

var error = document.querySelectorAll(".error_next_box");

var join = document.querySelector("#btnJoin");

var pass = [];

/*이벤트 핸들러 연결*/

id.addEventListener("focusout", checkId);
pw1.addEventListener("focusout", checkPw);
pw2.addEventListener("focusout", comparePw);
userName.addEventListener("focusout", checkName);
yy.addEventListener("focusout", isBirthCompleted);
mm.addEventListener("focusout", isBirthCompleted);
dd.addEventListener("focusout", isBirthCompleted);

join.addEventListener("click", clickJoinBtn);

gender.addEventListener("focusout", function () {
  if (gender.value === "성별") {
    error[5].style.display = "block";
  } else {
    error[5].style.display = "none";
  }
});
email.addEventListener("focusout", isEmailCorrect);
mobile.addEventListener("focusout", checkPhoneNum);

/*콜백 함수*/

function checkId() {
  var idPattern = /[a-zA-Z0-9_-]{5,20}/;
  if (id.value === "") {
    error[0].innerHTML = "필수 정보입니다.";
    error[0].style.display = "block";
    pass[0] = false;
  } else if (!idPattern.test(id.value)) {
    error[0].innerHTML =
      "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
    error[0].style.display = "block";
    pass[0] = false;
  } else {
    // var json = await checkIdExist();
    // var json = {};
    // if (json.result == "NO") {
    error[0].innerHTML = "멋진 아이디네요!";
    error[0].style.color = "#08A600";
    error[0].style.display = "block";
    pass[0] = true;
    // } else if (json.result == "EXIST") {
    //   error[0].innerHTML = "이미 사용중이거나 탈퇴한 아이디입니다.";
    //   error[0].style.display = "block";
    //   pass[0] = false;
    // } else {
    //   error[0].innerHTML =
    //     "알수없는 오류가 발생했습니다. 고객센터로 문의 주세요";
    //   error[0].style.display = "block";
    //   pass[0] = false;
    // }
    // return json;
  }
}

function checkPw() {
  var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
  if (pw1.value === "") {
    error[1].innerHTML = "필수 정보입니다.";
    error[1].style.display = "block";
    pass[1] = false;
  } else if (!pwPattern.test(pw1.value)) {
    error[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
    pwMsg.innerHTML = "사용불가";
    pwMsgArea.style.paddingRight = "93px";
    error[1].style.display = "block";

    pwMsg.style.display = "block";
    pwImg1.src = "./images/new_join/m_icon_not_use.png";
    pass[1] = false;
  } else {
    error[1].style.display = "none";
    pwMsg.innerHTML = "안전";
    pwMsg.style.display = "block";
    pwMsg.style.color = "#03c75a";
    pwImg1.src = "./images/new_join/m_icon_safe.png";
    pass[1] = true;
  }
}

function comparePw() {
  if (pw2.value === pw1.value && pw2.value != "") {
    pwImg2.src = "./images/new_join/m_icon_check_enable.png";
    error[2].style.display = "none";
    pass[2] = true;
  } else if (pw2.value !== pw1.value) {
    pwImg2.src = "./images/new_join/m_icon_check_disable.png";
    error[2].innerHTML = "비밀번호가 일치하지 않습니다.";
    error[2].style.display = "block";
    pass[2] = false;
  }

  if (pw2.value === "") {
    error[2].innerHTML = "필수 정보입니다.";
    error[2].style.display = "block";
    pass[2] = false;
  }
}

function checkName() {
  var namePattern = /[a-zA-Z가-힣]/;
  if (userName.value === "") {
    error[3].innerHTML = "필수 정보입니다.";
    error[3].style.display = "block";
    pass[3] = false;
  } else if (
    !namePattern.test(userName.value) ||
    userName.value.indexOf(" ") > -1
  ) {
    error[3].innerHTML =
      "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
    error[3].style.display = "block";
    pass[3] = false;
  } else {
    error[3].style.display = "none";
    pass[3] = true;
  }
}

function isBirthCompleted() {
  var yearPattern = /[0-9]{4}/;

  if (!yearPattern.test(yy.value)) {
    error[4].innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
    error[4].style.display = "block";
    pass[4] = false;
  } else {
    isMonthSelected();
  }

  function isMonthSelected() {
    if (mm.value === "월") {
      error[4].innerHTML = "태어난 월을 선택하세요.";
      pass[4] = false;
    } else {
      isDateCompleted();
    }
  }

  function isDateCompleted() {
    if (dd.value === "") {
      error[4].innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
      pass[4] = false;
    } else {
      isBirthRight();
    }
  }
}

function isBirthRight() {
  var datePattern = /\d{1,2}/;
  if (
    !datePattern.test(dd.value) ||
    Number(dd.value) < 1 ||
    Number(dd.value) > 31
  ) {
    error[4].innerHTML = "생년월일을 다시 확인해주세요.";
    pass[4] = false;
  } else {
    checkAge();
  }
}

function checkAge() {
  if (Number(yy.value) < 1920) {
    error[4].innerHTML = "정말이세요?";
    error[4].style.display = "block";
    pass[4] = false;
  } else if (Number(yy.value) > 2020) {
    error[4].innerHTML = "미래에서 오셨군요. ^^";
    error[4].style.display = "block";
    pass[4] = false;
    //   } else if (Number(yy.value) > 2005) {
    //     error[4].innerHTML = "만 14세 미만의 어린이는 보호자 동의가 필요합니다.";
    //     error[4].style.display = "block";
  } else {
    error[4].style.display = "none";
    pass[4] = true;
  }
}

function isEmailCorrect() {
  var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

  if (email.value === "") {
    error[6].style.display = "none";
  } else if (!emailPattern.test(email.value)) {
    error[6].style.display = "block";
    pass[6] = false;
  } else {
    error[6].style.display = "none";
    pass[6] = true;
  }
}

function checkPhoneNum() {
  var isPhoneNum = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

  if (mobile.value === "") {
    error[7].innerHTML = "필수 정보입니다.";
    error[7].style.display = "block";
    pass[7] = false;
  } else if (!isPhoneNum.test(mobile.value)) {
    error[7].innerHTML = "형식에 맞지 않는 번호입니다.";
    error[7].style.display = "block";
    pass[7] = false;
  } else {
    error[7].style.display = "none";
    pass[7] = true;
  }
}

function clickJoinBtn() {
  checkPhoneNum();
  checkPw();

  isEmailCorrect();
  isBirthCompleted();

  var allpass = true;
  pass.forEach(function (p) {
    if (p == false) allpass = false;
  });

  if (!allpass) {
    return;
  } else {
    var data = {
      id: id.value,
      pw1: pw1.value,
      pw2: pw2.value,
      userName: userName.value,
      yy: yy.value,
      mm: mm.value,
      dd: dd.value,
      gender: gender.value,
      mobile: mobile.value,
      address: address.value,
    };

    try {
      fetch("/user/join", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          console.log("-----------------------json get--");
          if (json.result == "OK") {
            //회원가입 완료
            alert("축하합니다. 가입이 완료 되었습니다.");
            window.location.href = "/login";
          } else if (json.result == "EXIST") {
            alert("이미 사용중이거나 탈퇴한 아이디입니다.");

            error[0].innerHTML = "이미 사용중이거나 탈퇴한 아이디입니다.";
            error[0].style.display = "block";
            pass[0] = false;
          }
        });
    } catch {
      alert("알수없는 오류가 발생했습니다. 고객센터로 문의주세요.");
    }
  }
}

function setGoodValueForTest() {
  id.value = "robot1234";
  pw1.value = "Robot1234";
  pw2.value = "Robot1234";
  userName.value = "원비트";
  yy.value = "1990";
  mm.value = "08";
  dd.value = "21";
  gender.value = "M";
  email.value = "oncevocal@naver.com";
  mobile.value = "01056134820";
  adress.value = "서울시 강남구 논현동 141-9 4층";
}

// setGoodValueForTest();
