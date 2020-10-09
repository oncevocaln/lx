"use strict";

var resJson = {};

var rtypeName = {
  vip: "VIP",
  pass: "자율",
  rent: "대여",
  admin: "관리자",
  visit: "현장",
  naverpay: "네이버결제",
};

var pkgName = {
  no: "없음",
  mo: "새벽",
  am: "오전",
  da: "낮",
  pm: "오후",
  di: "저녁",
  ni: "밤",
  up4: "4시간이상",
  up10: "10시간이상",
  nu: "신규이벤트",
};


function makeOnlyNumberString(str) {
  var strSimple = "";
  if (typeof(str) == "string") {
      str
          .split("")
          .forEach(function (c) {
              if ("0123456789".includes(c)) {
                  strSimple = strSimple + c;
              }
          })
  }
  return strSimple;
}


function getParam(sname) {
  var params = location.search.substr(location.search.indexOf("?") + 1);
  var sval = "";

  params = params.split("&");

  for (var i = 0; i < params.length; i++) {
    var temp = params[i].split("=");

    if ([temp[0]] == sname) {
      sval = temp[1];
    }
  }

  return sval;
}

Date.prototype.format = function (f) {
  if (!this.valueOf()) return " ";

  var weekKorName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];

  var weekEngName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function (
    $1
  ) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear(); // 년 (4자리)

      case "yy":
        return (d.getFullYear() % 1000).zf(2); // 년 (2자리)

      case "MM":
        return (d.getMonth() + 1).zf(2); // 월 (2자리)

      case "dd":
        return d.getDate().zf(2); // 일 (2자리)

      case "KS":
        return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)

      case "KL":
        return weekKorName[d.getDay()]; // 요일 (긴 한글)

      case "ES":
        return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)

      case "EL":
        return weekEngName[d.getDay()]; // 요일 (긴 영어)

      case "HH":
        return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)

      case "hh":
        return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)

      case "mm":
        return d.getMinutes().zf(2); // 분 (2자리)

      case "ss":
        return d.getSeconds().zf(2); // 초 (2자리)

      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분

      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = "",
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};

String.prototype.zf = function (len) {
  return "0".string(len - this.length) + this;
};

Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

function init_date() {
  var nowJson = {};
  var now = new Date();

  var ts = now.format("yyyyMMddHHmm");
  document.querySelector('select[name="yy_sw"]').value = ts.substring(4, 0);
  document.querySelector('select[name="mm_sw"]').value = ts.substring(6, 4);
  document.querySelector('select[name="dd_sw"]').value = ts.substring(8, 6);
  document.querySelector('select[name="hh_sw"]').value = ts.substring(10, 8);
}

function make_data() {
  var checkData = {};
  //stype 공간 유형
  checkData.stype = document.querySelector('input[name="stype"]:checked').value;
  checkData.rtype = document.querySelector('input[name="rtype"]:checked').value;
  checkData.username = document.querySelector('input[name="username"]').value;
  var mobile_no = document.querySelector('input[name="mobile"]').value;

  checkData.mobile = makeOnlyNumberString(mobile_no);

  checkData.yy_sw = document.querySelector('select[name="yy_sw"]').value;
  checkData.mm_sw = document.querySelector('select[name="mm_sw"]').value;
  checkData.dd_sw = document.querySelector('select[name="dd_sw"]').value;
  checkData.hh_sw = document.querySelector('select[name="hh_sw"]').value;
  checkData.mi_sw = document.querySelector('select[name="mi_sw"]').value;
  checkData.bl_sw = document.querySelector('select[name="bl_sw"]').value;
  checkData.sp_sw = document.querySelector('select[name="sp_sw"]').value;
  checkData.he_sw = document.querySelector('select[name="he_sw"]').value;
  checkData.au_sw = document.querySelector('select[name="au_sw"]').value;
  checkData.mc_sw = document.querySelector('select[name="mc_sw"]').value;
  checkData.st_sw = document.querySelector('select[name="st_sw"]').value;
  checkData.cu_sw = document.querySelector('select[name="cu_sw"]').value;
  checkData.sd_sw = document.querySelector('select[name="sd_sw"]').value;
  checkData.bo_sw = document.querySelector('select[name="bo_sw"]').value;
  checkData.gi_sw = document.querySelector('select[name="gi_sw"]').value;
  checkData.el_sw = document.querySelector('select[name="el_sw"]').value;
  checkData.ds_sw = document.querySelector('select[name="ds_sw"]').value;
  checkData.ch_sw = document.querySelector('select[name="ch_sw"]').value;
  checkData.ta_sw = document.querySelector('select[name="ta_sw"]').value;
  checkData.yo_sw = document.querySelector('select[name="yo_sw"]').value;
  checkData.dp_sw = document.querySelector('select[name="dp_sw"]').value;
  checkData.dk_sw = document.querySelector('select[name="dk_sw"]').value;

  checkData.hs_sw = document.querySelector('select[name="hs_sw"]').value;

  checkData.dm_sw = document.querySelector('select[name="dm_sw"]').value;
  checkData.rn_sw = document.querySelector('select[name="rn_sw"]').value;
  
  checkData.dr_sw = document.querySelector('select[name="dr_sw"]').value;
  
  checkData.sn_sw = document.querySelector('select[name="sn_sw"]').value;
  // checkData.pkg = document.querySelector('select[name="pkg"]').value;

  checkData.price = document.querySelector('input[name="price"]').value;

  checkData.os = make_os(checkData);
  checkData.v = getParam("v");

  return checkData;
}

function check_possible() {
  document.querySelector('input[name="price"]').value = "계산중";
  // document.querySelector('input[name="possible"]').value = "-----loading-----";

  var checkData = make_data();

  fetch("/calendar/checkpossible", {
    method: "POST",
    body: JSON.stringify(checkData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("price").value = json.price;
      document.querySelector('select[name="dm_sw"]').value = json.dm_sw;

      document.querySelector('select[name="hh_sw"]').value = json.hh_sw;
      // document.querySelector('select[name="pkg"]').value = json.pkg;
      document.querySelector('select[name="rn_sw"]').value = json.rn_sw;

      // document.querySelector('input[name="possible"]').value = json.possible;

      if (json.possible == "NO") {
        alert("[예약불가] - " + json.reason);
      } else {
        var rtext = make_rtext(json);
        document.querySelector('textarea[id="request_text"]').value = rtext;
      }
    });
}

function click_agree() {
  var isAgree = document.getElementById("agree").checked;
  if(isAgree == true) {
    document.getElementById("agree").checked = false;
  } else {
    document.getElementById("agree").checked = true;
  }
}

function request_reserve() {
  // document.querySelector('input[name="price"]').value = "-----loading-----";
  // document.querySelector('input[name="possible"]').value = "-----loading-----";


  // var check_result = await check_possible();
  var checkData = make_data();

  var rtext = document.querySelector('textarea[id="request_text"]').value;

  var isAgree = document.getElementById("agree").checked;

// if(rtext.substr(0,1) != "[") {
//     alert('가능확인을 먼저 해주세요');
//   }else 
  if( checkData.mobile.substr(0,2) != "01") {
    alert('로그인을 하시거나 휴대폰 번호를 바르게 입력해주세요.');
  }
  else
  
  if(!isAgree && checkData.rtype == "rent"){
    alert("변경 & 환불 규정에 동의 해주세요");

  } else 
  {

    checkData.rtext = rtext;
    
    fetch("/calendar/request", {
      method: "POST",
      body: JSON.stringify(checkData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {

        document.getElementById("price").value = json.price;
        document.querySelector('select[name="dm_sw"]').value = json.dm_sw;
  
        document.querySelector('select[name="hh_sw"]').value = json.hh_sw;
        document.querySelector('select[name="pkg"]').value = json.pkg;
        document.querySelector('select[name="rn_sw"]').value = json.rn_sw;
  
        // document.querySelector('input[name="possible"]').value = json.possible;
        
        if (json.possible == "NO") {
        
          alert("" + json.reason);
        } else {
          // alert("요청하였습니다. 결제를 완료해주세요" );
  
          var uri = "/space/2/" + json.mobile;
  
          location.href = uri;
          // window.open(uri);
        }
      });
  }
}


function calcurate_price() {

  document.querySelector('input[name="price"]').value = "계산중";
  // document.querySelector('input[name="possible"]').value = "-----loading-----";

  var checkData = make_data();

  fetch("/calendar/price_calcurate", {
    method: "POST",
    body: JSON.stringify(checkData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      document.getElementById("price").value = json.price;
      document.querySelector('select[name="dm_sw"]').value = json.dm_sw;

      document.querySelector('select[name="hh_sw"]').value = json.hh_sw;
      // document.querySelector('select[name="pkg"]').value = json.pkg;
      document.querySelector('select[name="rn_sw"]').value = json.rn_sw;

      // document.querySelector('input[name="possible"]').value = json.possible;

      if (json.possible == "NO") {
        alert("[예약불가] - " + json.reason);
      } else {
        var rtext = make_rtext(json);
        document.querySelector('textarea[id="request_text"]').value = rtext;
      }
    });

}


function check_and_request() {



  document.querySelector('input[name="price"]').value = "계산중";
  // document.querySelector('input[name="possible"]').value = "-----loading-----";

  var checkData = make_data();

  fetch("/calendar/checkpossible", {
    method: "POST",
    body: JSON.stringify(checkData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("price").value = json.price;
      document.querySelector('select[name="dm_sw"]').value = json.dm_sw;

      document.querySelector('select[name="hh_sw"]').value = json.hh_sw;
      // document.querySelector('select[name="pkg"]').value = json.pkg;
      document.querySelector('select[name="rn_sw"]').value = json.rn_sw;

      // document.querySelector('input[name="possible"]').value = json.possible;

      if (json.possible == "NO") {
        alert("[예약불가] - " + json.reason);
      } else {
        var rtext = make_rtext(json);
        document.querySelector('textarea[id="request_text"]').value = rtext;

        var rtext = document.querySelector('textarea[id="request_text"]').value;

  var isAgree = document.getElementById("agree").checked;

// if(rtext.substr(0,1) != "[") {
//     alert('가능확인을 먼저 해주세요');
//   }else 
  if( checkData.mobile.substr(0,2) != "01") {
    alert('로그인을 하시거나 휴대폰 번호를 바르게 입력해주세요.');
  }
  else
  
  if(!isAgree && checkData.rtype == "rent"){
    alert("변경 & 환불 규정에 동의 해주세요");

  } else 
  {

    checkData.rtext = rtext;
    
    fetch("/calendar/request", {
      method: "POST",
      body: JSON.stringify(checkData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {

        document.getElementById("price").value = json.price;
        document.querySelector('select[name="dm_sw"]').value = json.dm_sw;
  
        document.querySelector('select[name="hh_sw"]').value = json.hh_sw;
        // document.querySelector('select[name="pkg"]').value = json.pkg;
        document.querySelector('select[name="rn_sw"]').value = json.rn_sw;
  
        // document.querySelector('input[name="possible"]').value = json.possible;
        
        if (json.possible == "NO") {
        
          alert("" + json.reason);
        } else {
          // alert("요청하였습니다. 결제를 완료해주세요" );
  
          var uri = "/space/2/" + json.mobile;
  
          location.href = uri;
          // window.open(uri);
        }
      });
  }
      }
    });
  // document.querySelector('input[name="price"]').value = "-----loading-----";
  // document.querySelector('input[name="possible"]').value = "-----loading-----";


  // var check_result = await check_possible();
  var checkData = make_data();

  
}


function make_os(json) {
  var os = "";

  if (parseInt(json.mc_sw) > 0) {
    os = os + " 마이크" + json.mc_sw;
  }
  if (parseInt(json.sd_sw) > 0) {
    os = os + " SD앰프" + json.sd_sw;
  }
  if (parseInt(json.cu_sw) > 0) {
    os = os + " 큐브EX앰프" + json.cu_sw;
  }
  if (parseInt(json.gi_sw) > 0) {
    os = os + " 통기타" + json.gi_sw;
  }
  if (parseInt(json.el_sw) > 0) {
    os = os + " 일렉기타" + json.el_sw;
  }
  if (parseInt(json.dk_sw) > 0) {
    os = os + " 전자키보드" + json.dk_sw;
  }
  if (parseInt(json.dp_sw) > 0) {
    os = os + " 88건반디지털피아노" + json.dp_sw;
  }
  if (parseInt(json.ta_sw) > 0) {
    os = os + " 접이식테이블" + json.ta_sw;
  }
  if (parseInt(json.ch_sw) > 0) {
    os = os + " 의자" + json.ch_sw;
  }
  if (parseInt(json.au_sw) > 0) {
    os = os + " 오디오인터페이스" + json.au_sw;
  }
  if (parseInt(json.he_sw) > 0) {
    os = os + " 헤드폰" + json.he_sw;
  }
  if (parseInt(json.bl_sw) > 0) {
    os = os + " 블루투스스피커" + json.bl_sw;
  }
  if (parseInt(json.sp_sw) > 0) {
    os = os + " 스피커" + json.sp_sw;
  }
  if (parseInt(json.bo_sw) > 0) {
    os = os + " 보면대" + json.bo_sw;
  }
  if (parseInt(json.st_sw) > 0) {
    os = os + " 마이크스탠드" + json.st_sw;
  }
  if (parseInt(json.ds_sw) > 0) {
    os = os + " 드럼스틱" + json.ds_sw;
  }
  if (parseInt(json.yo_sw) > 0) {
    os = os + " 요가매트" + json.yo_sw;
  }
  if (parseInt(json.hs_sw) > 0) {
    os = os + " 휴대폰삼각대" + json.hs_sw;
  }

  if (parseInt(json.dr_sw) > 0) {
    os = os + " 음료" + json.dr_sw;
  }
  if (parseInt(json.sn_sw) > 0) {
    os = os + " 과자" + json.sn_sw;
  }
  return os;
}

function make_rtext(json) {
  json.notice = "";
  if ( ["ND","NX","NK"].includes( json.stype)) {
    json.notice = json.notice + 
      "\n주소 : 서울시 강남구 논현동 140-4 송월타올 지하 \n(비밀번호: 현관&화장실 6784, 연습실8763, 와이파이 24972497) \n주차불가(근처 유료주차장 있음)\n옵션은 헤드폰만 가능합니다.";
  }

  if ( ["NP","NV","NB","NA","NM"].includes( json.stype)) {
    json.notice = json.notice + 
      "\n주소 : 서울시 강남구 논현동 141-9 김밥천국 4층 \n비밀번호: 없음, 와이파이 academy123 \n주차불가(맞은편 건물 유료주차장 있음)";
  }

  if ( ["HA","HX","HR","HM","HP","HX"].includes( json.stype)) {
    json.notice = json.notice + 
      "\n주소 : 서울시 마포구 서교동 342-20 서교태권도 2층 \n비밀번호: 없음, 와이파이 academy123@ \n주차 시간당 3000원 가능(카톡문의)";
  }

    if ( ["HR"].includes( json.stype)) {
    json.notice = json.notice + 
      "녹음실 최소 예약 시간은 3시간입니다. 연장은 3시간 미만도 가능합니다.\n시퀀서는 로직프로만 가능합니다. 기본적인 사용법을 아시는 분만 예약해주세요.";
  }

  if( Number.parseInt( json.mc_sw)  != 0 ) {
    json.notice = json.notice + "\n마이크 사용자는 큐브EX앰프 또는 오디오인터페이스를 함께 대여해주세요."
  }
  var rtype = rtypeName[json.rtype];

  var rtext =
    "[가능확인]" +
    // "\n" + json. +
    "\n유형: " +
    rtype +
    "\n이름: " +
    json.username +
    "\n휴대전화: " +
    json.mobile +
    "\n공간: " +
    json.stype +
    json.rn_sw +
    "\n날짜: " +
    json.yy_sw +
    "년" +
    json.mm_sw +
    "월" +
    json.dd_sw +
    "일" +
    "\n시작시간: " +
    json.hh_sw +
    ":" +
    json.mi_sw +
    "\n사용분 " +
    json.dm_sw +
    "분" +
    "\n패키지: " +
    pkgName[json.pkg] +
    "\n옵션: " +
    json.os +
    "\n가격: " +
    json.price +
    "\n알림:" +
    json.notice +
    // "\n" + json. +
    "";
  return rtext;
}

function copy_to_clipboard() {
  var copyText = document.getElementById("container");
  copyText.select();
  document.execCommand("Copy");
}

function send_picture() {}
function copy_account_to_clipboard() {
  var copyText = document.getElementById("account_number");
  copyText.select();
  document.execCommand("Copy");
}

// function copy_request_to_clipboard() {
//   var copyText = document.getElementById("request_text");
//   copyText.select();
//   document.execCommand("Copy");
// }



function copy_to_clipboard() {
  var copyText = document.getElementById("request_text");
  copyText.select();
  document.execCommand("Copy");
}

function send_kakao() {
  var copyText = document.getElementById("request_text");
  copyText.select();
  document.execCommand("Copy");

  // window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
  window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
}


function open_naverpay() {
  var copyText = document.getElementById("request_text");
  copyText.select();
  document.execCommand("Copy");

  // window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
  window.open("https://booking.naver.com/booking/10/bizes/175195/items/3396671?preview=1", "_blank");
}

function check_refund_policy() {
  // window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
  window.open("https://cafe.naver.com/oncevocal/66", "_blank");
}

function go_cafe_nonhyun() {
  // window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
  window.open("https://cafe.naver.com/oncevocal/47", "_blank");
}

function go_cafe_hongdae() {
  // window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
  window.open("https://cafe.naver.com/oncevocal/49", "_blank");
}

function go_cafe_price() {
  // window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
  window.open("https://cafe.naver.com/oncevocal/88", "_blank");
}

function go_cafe_option() {
  // window.open("http://pf.kakao.com/_YmerC/chat", "_blank");
  window.open("https://cafe.naver.com/oncevocal/76", "_blank");
}

function readURL(input) {
  if (input.files && input.files[0]) {
   var reader = new FileReader();
   
   reader.onload = function (e) {
    $('#image_section').attr('src', e.target.result);  
   }
   
   reader.readAsDataURL(input.files[0]);
   }
 }
  
 // 이벤트를 바인딩해서 input에 파일이 올라올때 위의 함수를 this context로 실행합니다.
 $("#imgInput").change(function(){
    readURL(this);
 });


function insert_merchant(){

}


function pay_imp(){
  var IMP = window.IMP; // 생략해도 괜찮습니다.
  IMP.init("imp63625659"); // "imp00000000" 대신 발급받은 "가맹점 식별코드"를 사용합니다.

    // IMP.request_pay(param, callback) 호출
    IMP.request_pay({ // param
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: "ORD20180131-0000011",
      name: "노르웨이 회전 의자",
      amount: 64900,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181"
    }, function (rsp) { // callback
      console.log(rsp);
      if (rsp.success) {
        
          // 결제 성공 시 로직,
      } else {
          // 결제 실패 시 로직,
      }
    });
}


function src_selector(){

  var stype = document.querySelector('input[name="stype"]:checked').value;
  var stype_l = stype.toLocaleLowerCase();
  var image_path = "/images/" + stype_l + ".jpg";
  var main_image = document.getElementById("main_image");

  main_image.src = image_path;

}


	$(document).ready(function() {
			$('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		});