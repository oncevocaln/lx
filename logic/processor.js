// const {
//   collapseTextChangeRangesAcrossMultipleVersions,
// } = require("typescript");
// const { RuleWalker } = require("tslint");

var priceTable = {
  NY: [
    // 0~12
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,

    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,

    // 12~24
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    5000,
    // 17~22
    6000,
    6000,
    6000,
    6000,
    6000,
    6000,
    6000,
    6000,
    6000,
    6000,
    //22~24
    5000,
    5000,
    5000,
    5000,
  ],
  NX: [
    //0~12
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,
    2000,

    //12~17
    3500,
    3500,
    3500,
    3500,
    3500,
    3500,
    3500,
    3500,
    3500,
    3500,

    //17~22
    4500,
    4500,
    4500,
    4500,
    4500,
    4500,
    4500,
    4500,
    4500,
    4500,
    //22~24
    3500,
    3500,
    3500,
    3500,
  ],

  NP: [
    //0~12
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    1500,
    //12~17
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    2500,
    //17~22
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    3000,
    //22~24
    2500,
    2500,
    2500,
    2500,
  ],
};

exports.rawDataChecker = function (rawData) {
  //자율사용자
  var r = {
    isOK: false,
    type: "",
    room: 0,
  };
  if (rawData.id) {
    rawData.id = "request";
  }
  if (rawData.category) {
    rawData.category = "time";
  }

  //s 는 원래 스트링 ss 는 공백을 제거한 스트링
  var ss = rawData.title;

  ss = ss.replace(/ /gi, "");

  //예약번호 스트링이 있음, 이용일시 스트링이 있음 = 네이버웹
  if (ss.indexOf("예약번호") > 0 && ss.indexOf("이용일시") > 0) {
    r.type = "네웹";
    //Web발신 스트링 있음, 예약번호 있음 네이버문자
  } else if (ss.indexOf("[Web발신]") == 0 || ss.indexOf("예약번호") > 0) {
    r.type = "네문";
  } else if (ss.indexOf("내 업체") == 0 || ss.indexOf("이용일옵션보기") > 0) {
    r.type = "네모";
  } else if (ss.indexOf("인원수") == 0 || ss.indexOf("사용목적") > 0) {
    r.type = "스클";
  } else if (ss.indexOf("휴대폰") > 0 && ss.indexOf("사용분") > 0) {
    // 수동등록
    r.type = "요청";
  } else {
    // 양식이 없는 경우
    r.type = "기본";
  }

  console.log('================================= 스트링 세부적인 처리 ');

  console.log(ss);
  console.log(r.type);

  if (r.type == "네웹") {
    //네웹 - 네이버예약웹
    //   확정
    // 백승숙
    // 완료 6
    // 예약자	백승숙
    // 전화번호	010-8945-1379
    // 예약번호	101396012
    // 예약유형	일반
    // 이메일	hotcola81@naver.com
    // 예약내역
    // 서비스	원스연습실 강남논현점
    // 상품	NM1~3 (미디)
    // 이용일시	2020. 8. 16.(일)
    // 오후 4:30~오후 5:30(1시간)
    // 수량	1
    // 유입경로	네이버 - 기타
    // 결제정보
    // 결제상태	결제완료
    // NPay주문	2020081479544830
    // 결제수단	포인트결제
    // 결제금액	8,400원
    // NM1~3 (미디)
    // 8,400원

    var i = 0;
    var ii = 0;
    i = ss.indexOf("예약자");
    r.name = ss.substr(i + 4, 3);
    i = ss.indexOf("상품");
    r.product = ss.substr(i + 3, 2);
    i = ss.indexOf("전화번호");
    ii = ss.indexOf("예약번호");
    r.phone = ss.substr(i + 5, ii - i - 5);
    i = ss.indexOf("이용일시");
    ii = ss.indexOf("수량");

    r.datestr = ss.substr(i + 5, ii - i - 5);
    var ymd = r.datestr.split(".");
    r.year = ymd[0];
    r.month = ymd[1];
    r.day = ymd[2];

    i = r.datestr.indexOf("(");
    r.yoil = r.datestr.substr(i + 1, 1);

    i = r.datestr.indexOf(")");
    ii = r.datestr.indexOf("~");

    r.startstr = r.datestr.substr(i + 1, ii - i - 1);

    var ampm = r.startstr.indexOf("후");
    var starthm = r.startstr.substr(2, 10).split(":");

    var sh = parseInt(starthm[0]);
    var sm = parseInt(starthm[1]);

    //12시는 0시로 치환
    if (sh == 12) sh = 0;
    //오후라면 12더하기
    if (ampm > 0) {
      sh = sh + 12;
    }

    var startdate = new Date(r.year, parseInt(r.month) - 1, r.day, sh, sm);

    r.startdate = startdate;
    var laststr = r.datestr.substr(ii + 1, 20);
    i = laststr.indexOf("(");
    ii = laststr.indexOf(")");
    r.durstr = laststr.substr(i + 1, ii - i - 1);
    i = r.durstr.indexOf("시간");
    var durHour = r.durstr.substr(0, i);
    ii = r.durstr.indexOf("분");
    var durMinute = r.durstr.substr(i + 2, ii - i - 1);
    r.durMin = (parseInt(durHour) || 0) * 60 + (parseInt(durMinute) || 0);
    r.enddate = new Date(startdate.getTime() + r.durMin * 60000);
    i = ss.indexOf("방번호선택");

    if (i > 0) {
      r.room = ss.substr(i + 5, 1);
    }

    r.title =
      r.product +
      r.room +
      " / " +
      r.name.substr(0, 2) +
      "* / 010-****-" +
      r.phone.substr(9, 4) +
      " / " +
      r.type;
    r.isOK = true;
  } else if (r.type == "네모") {
    /*
예약자	한창희
전화번호	010-3336-3522
예약번호	421621763
예약유형	일반
서비스	원스연습실 강남논현점
상품	NY (와이홀) 댄스연습실
이용일시	2023. 5. 19.(금)
오전 9:00~오전 11:00(2시간)
수량	1
결제상태	결제완료
확정	
김덕영
완료 45, 취소 1

    */

      var i = 0;
      var ii = 0;
      i = ss.indexOf("예약자");
      r.name = ss.substr(i + 4, 3);
      i = ss.indexOf("상품");
      r.product = ss.substr(i + 3, 2);
      i = ss.indexOf("전화번호");
      ii = ss.indexOf("예약번호");
      r.phone = ss.substr(i + 5, ii - i - 5);
      i = ss.indexOf("이용일시");
      ii = ss.indexOf("수량");
  
      r.datestr = ss.substr(i + 5, ii - i - 5);
      var ymd = r.datestr.split(".");
      r.year = ymd[0];
      r.month = ymd[1];
      r.day = ymd[2];
  
      i = r.datestr.indexOf("(");
      r.yoil = r.datestr.substr(i + 1, 1);
  
      i = r.datestr.indexOf(")");
      ii = r.datestr.indexOf("~");
  
      r.startstr = r.datestr.substr(i + 1, ii - i - 1);
  
      var ampm = r.startstr.indexOf("후");

      console.log('----------------시간 스트링');
      console.log(r.startstr);
      var starthm = r.startstr.substr(2, 10).split(":");
  
      var sh = parseInt(starthm[0]);
      var sm = parseInt(starthm[1]);
  
      //12시는 0시로 치환
      if (sh == 12) sh = 0;
      //오후라면 12더하기
      if (ampm > 0) {
        sh = sh + 12;
      }
  
      var startdate = new Date(r.year, parseInt(r.month) - 1, r.day, sh, sm);
  
      r.startdate = startdate;
      var laststr = r.datestr.substr(ii + 1, 20);
      i = laststr.indexOf("(");
      ii = laststr.indexOf(")");
      r.durstr = laststr.substr(i + 1, ii - i - 1);
      i = r.durstr.indexOf("시간");
      var durHour = r.durstr.substr(0, i);
      ii = r.durstr.indexOf("분");
      var durMinute = r.durstr.substr(i + 2, ii - i - 1);
      r.durMin = (parseInt(durHour) || 0) * 60 + (parseInt(durMinute) || 0);
      r.enddate = new Date(startdate.getTime() + r.durMin * 60000);
      i = ss.indexOf("방번호선택");
  
      if (i > 0) {
        r.room = ss.substr(i + 5, 1);
      }
  
      r.title =
        r.product +
        r.room +
        " / " +
        r.name.substr(0, 2) +
        "* / 010-****-" +
        r.phone.substr(9, 4) +
        " / " +
        r.type;
      r.isOK = true;
    } else if (r.type == "네문") {
    //네문 - 네이버예약문자
    //     [Web발신]
    // 원스연습실 강남논현점, 새로운 예약이 확정되었습니다. 예약 내역을 확인해 보세요.

    // - 예약번호: 101510963
    // - 예약자명: 차정수
    // - 전화번호: 01086169252
    // - 예약상품: NX1~2 (디제이)
    // - 이용기간: 2020.08.15.(토) 오전 11:00~오후 12:30
    // - 네이버페이 결제상태: 결제완료
    // - 결제수단: 포인트결제
    // - 결제금액: NX1~2 (디제이)(1) 7,875원 + 방번호 선택(2) 0원 = 7,875원

    // * 예약 내역 자세히 보기: http://naver.me/xmfvqMXh
    var i = 0;
    var ii = 0;
    i = ss.indexOf("예약자명");
    r.name = ss.substr(i + 5, 3);
    i = ss.indexOf("상품");
    r.product = ss.substr(i + 3, 2);
    i = ss.indexOf("전화번호");
    r.phone = ss.substr(i + 5, 11);
    i = ss.indexOf("이용기간");
    ii = ss.indexOf("네이버페이");

    r.datestr = ss.substr(i + 5, ii - i - 5);
    var ymd = r.datestr.split(".");
    r.year = ymd[0];
    r.month = ymd[1];
    r.day = ymd[2];

    i = r.datestr.indexOf("(");
    r.yoil = r.datestr.substr(i + 1, 1);

    i = r.datestr.indexOf(")");
    ii = r.datestr.indexOf("~");

    r.startstr = r.datestr.substr(i + 1, ii - i - 1);

    var ampm = r.startstr.indexOf("후");
    var starthm = r.startstr.substr(2, 10).split(":");

    var sh = parseInt(starthm[0]);
    var sm = parseInt(starthm[1]);

    //12시는 0시로 치환
    if (sh == 12) sh = 0;
    //오후라면 12더하기
    if (ampm > 0) {
      sh = sh + 12;
    }

    var startdate = new Date(r.year, parseInt(r.month) - 1, r.day, sh, sm);
    r.startdate = startdate;

    var laststr = r.datestr.substr(ii + 1, 20);

    ampm = laststr.indexOf("후");
    var endhm = laststr.substr(2, 10).split(":");

    var eh = parseInt(endhm[0]);
    var em = parseInt(endhm[1]);

    //12시는 0시로 치환
    if (eh == 12) eh = 0;
    //오후라면 12더하기
    if (ampm > 0) {
      eh = eh + 12;
    }

    var enddate = new Date(r.year, parseInt(r.month) - 1, r.day, eh, em);
    r.enddate = enddate;
    var diff = enddate - startdate;
    var durMinute = parseInt(diff / 60000);

    r.durMin = durMinute;

    i = ss.indexOf("방번호선택");

    if (i > 0) {
      r.room = ss.substr(i + 6, 1);
    }

    r.title =
      r.product +
      r.room +
      " / " +
      r.name.substr(0, 2) +
      "* / 010-****-" +
      r.phone.substr(9, 4) +
      " / " +
      r.type;
    r.isOK = true;
  } else if (r.type == "스클") {
    //   신청일	2020.08.19
    // 공간명	원스연습실강남논현점-댄스Y홀, NY(댄스Y홀)
    // 예약내용	2020.08.20 (목) 20시 ~ 22시
    // 인원수	1명
    // 추가옵션	없음
    // 요청사항	-
    // 사용목적	-
    // 예약자 정보
    // 예약자명	한보람
    // 연락처	010-9739-8910
    // 이메일	o_boram_o@naver.com
    var i = 0;
    var ii = 0;
    i = ss.indexOf("공간명");
    ii = ss.indexOf("예약내용");
    var productstr = ss.substr(i + 4, ii - i - 4);

    var parts = productstr.split(",");

    var productroom = parts[1];
    var calendarId = productroom.substr(0, 2);
    var roomstr = productroom.substr(2, 1);

    if (parseInt(roomstr) < 10) {
      r.room = parseInt(roomstr);
    } else {
      r.room = 0;
    }

    r.name = ss.substr(i + 5, 3);

    i = ss.indexOf("예약내용");

    r.product = ss.substr(i + 3, 2);
    i = ss.indexOf("전화번호");
    r.phone = ss.substr(i + 5, 11);
    i = ss.indexOf("예약내용");
    ii = ss.indexOf("인원수");

    r.datestr = ss.substr(i + 5, ii - i - 5);
    var ymd = r.datestr.split(".");
    r.year = ymd[0];
    r.month = ymd[1];
    r.day = ymd[2];

    i = r.datestr.indexOf("(");
    r.yoil = r.datestr.substr(i + 1, 1);

    i = r.datestr.indexOf(")");
    ii = r.datestr.indexOf("~");

    r.startstr = r.datestr.substr(i + 1, ii - i - 1);

    var ampm = r.startstr.indexOf("후");
    var starthm = r.startstr.substr(2, 10).split(":");

    var sh = parseInt(starthm[0]);
    var sm = parseInt(starthm[1]);

    //12시는 0시로 치환
    if (sh == 12) sh = 0;
    //오후라면 12더하기
    if (ampm > 0) {
      sh = sh + 12;
    }

    var startdate = new Date(r.year, parseInt(r.month) - 1, r.day, sh, sm);

    r.startdate = startdate;

    var laststr = r.datestr.substr(ii + 1, 20);

    ampm = laststr.indexOf("후");
    var endhm = laststr.substr(2, 10).split(":");

    var eh = parseInt(endhm[0]);
    var em = parseInt(endhm[1]);

    //12시는 0시로 치환
    if (eh == 12) eh = 0;
    //오후라면 12더하기
    if (ampm > 0) {
      eh = eh + 12;
    }

    var enddate = new Date(r.year, parseInt(r.month) - 1, r.day, eh, em);
    r.enddate = enddate;
    var diff = enddate - startdate;
    var durMinute = parseInt(diff / 60000);

    r.durMin = durMinute;

    i = ss.indexOf("방번호선택");

    if (i > 0) {
      r.room = ss.substr(i + 6, 1);
    }

    r.title =
      r.product +
      r.room +
      " / " +
      r.name.substr(0, 2) +
      "* / 010-****-" +
      r.phone.substr(9, 4) +
      " / " +
      r.type;
    r.isOK = true;
  } else if (r.type == "요청") {
    // 유형: 대여
    // 공간: HM1
    // 이름: 박선생
    // 휴대폰: 010-4924-1123
    // 날짜: 2020.08.12
    // 시간: 오후12:30
    // 사용분: 2시간30분
    // 옵션: 큐1마2
    // 사유: 개인레슨
    // 결제: 이체완료
    // 금액:  44000
    // 적립금:
    // 비고: 캡쳐전송

    var i = 0;
    var ii = 0;

    i = ss.indexOf("이름");
    r.type = r.type + "-" + ss.substr(ss.indexOf("유형") + 3, 2);

    r.name = ss.substr(i + 3, 3);
    i = ss.indexOf("공간");
    r.product = ss.substr(i + 3, 2).toUpperCase();
    r.calendarId = r.product;

    var roomstr = ss.substr(i + 5, 1);
    if (parseInt(roomstr) < 10) {
      r.room = parseInt(roomstr);
    } else {
      r.room = 0;
    }

    i = ss.indexOf("휴대폰");
    r.phone = ss.substr(i + 4, 13);
    i = ss.indexOf("날짜");
    ii = ss.indexOf("시간");

    r.datestr = ss.substr(i + 3, ii - i - 3);
    var ymd = r.datestr.split(".");
    r.year = ymd[0];
    r.month = ymd[1];
    r.day = ymd[2].substr(0, 2);

    i = ss.indexOf("사용분");
    r.startstr = ss.substr(ii + 3, i - ii - 3);

    var pm = r.startstr.indexOf("후");

    var am = r.startstr.indexOf("전");

    var starthmstr = r.startstr;
    var starthm = ["0", "0"];

    if (r.startstr[0] == "오") {
      //오전오후를 표시했을때
      starthmstr = starthmstr.substr(2);
    }

    if (r.startstr.indexOf(":") > -1) {
      starthm = starthmstr.substr(0, 8).split(":");
    } else {
      starthm = starthmstr.substr(0, 8).split("시");
    }

    console.log(starthm[1]);

    if (starthm[1].length > 2) {
      starthm[1] = starthm[1].substr(0, 2);
    } else if (starthm[1].length < 2) {
      starthm[1] = "0";
    }

    r.hm24 = 0;

    var sh = parseInt(starthm[0]);
    var sm = parseInt(starthm[1]);

    //오전이라면 12더하기
    if (am > 0) {
      sh = sh + 12;
    }

    //오후이고 12시가 아니라면 12를 더하기
    if (pm > 0 && sh < 12) {
      sh = sh + 12;
    }

    r.hm24 = r.hm24 + sh * 100;
    r.hm24 = r.hm24 + sm * 1;

    console.log(sh);
    console.log(sm);
    var startdate = new Date(r.year, parseInt(r.month) - 1, r.day, sh, sm);
    r.startdate = startdate;

    ii = ss.indexOf("옵션");

    r.durstr = ss.substr(i + 4, ii - i - 4);

    i = ss.indexOf("사유");

    r.option = ss.substr(ii + 3, i - ii - 3);

    i = r.durstr.indexOf("시간");
    var durHour = r.durstr.substr(0, i);
    ii = r.durstr.indexOf("분");
    var durMinute = r.durstr.substr(i + 2, ii - i - 1);
    r.durMin = (parseInt(durHour) || 0) * 60 + (parseInt(durMinute) || 0);
    r.enddate = new Date(startdate.getTime() + r.durMin * 60000);

    r.title =
      r.product +
      r.room +
      " / " +
      r.name.substr(0, 2) +
      "* / 010-****-" +
      r.phone.substr(9, 4) +
      " / " +
      r.type;
    r.isOK = true;
  } else if (r.type == "기본") {
    r.product = rawData.calendarId;
    r.room = 0;
    r.name = rawData.title;
    r.phone = rawData.title;

    if (rawData.start._date) {
      r.startdate = new Date(rawData.start._date);
    }
    if (rawData.end._date) {
      r.enddate = new Date(rawData.end._date);
    }

    r.title =
      r.product +
      r.room +
      " / " +
      r.name.substr(0, 2) +
      "* / 010-****-" +
      r.phone.substr(9, 4) +
      " / " +
      r.type;
    r.isOK = true;
  }

  return r;
};

exports.calcuratePrice = function (data) {


  data.startstr = "오후6:30";

  var startime = 630;

  var priceType = "NY";

  if (["NY", "HR", "HS"].includes(data.calendarId)) {
    priceType = "NY";
  } else if (
    ["NX", "NM", "NA", "NX", "ND", "HA", "HX", "HM", "HD"].includes(
      data.calendarId
    )
  ) {
    priceType = "NX";
  } else if (["NP", "NV", "NK", "NB", "HP", "HV"].includes(data.calendarId)) {
    priceType = "NP";
  } else {
    priceType = "NY";
  }

  var priceStartIndex = parseInt(Math.round(data.hm24 / 50));
  var priceCountIndex = parseInt(Math.round(data.durMin / 30));

  console.log(priceStartIndex);
  console.log(priceCountIndex);

  var basePrice = 0;

  var priceIndex = priceStartIndex;
  for (var i = 0; i < priceCountIndex; i++) {
    if (priceIndex >= 48) {
      priceIndex = priceIndex - 48;
    }
    basePrice = basePrice + priceTable[priceType][priceIndex];
    priceIndex++;
  }

  var o = data.option;
  var optionPriceTable = [
    { name: "큐", price30: 1000, type: "hour" },
    { name: "마", price30: 500, type: "hour" },
    { name: "헤", price30: 500, type: "hour" },
    { name: "피", price30: 500, type: "hour" },
    { name: "키", price30: 500, type: "hour" },
    { name: "일", price30: 500, type: "hour" },
    { name: "기", price30: 500, type: "hour" },

    { name: "블", price30: 1000, type: "day" },
    { name: "스", price30: 1000, type: "day" },
    { name: "보", price30: 1000, type: "day" },
    { name: "의", price30: 1000, type: "day" },
    { name: "인", price30: 1000, type: "day" },
    { name: "삼", price30: 1000, type: "day" },
    { name: "요", price30: 1000, type: "day" },
  ];

  optionPriceTable.forEach(function (op) {
    var optionIndex = o.indexOf(op.name);
    if (optionIndex > -1) {
      var optionCount = parseInt(o.substr(optionIndex + 1, 1));

      if (optionCount > 0) {
        if (op.type == "hour") {
          basePrice = basePrice + optionCount * op.price30 * priceCountIndex;
        } else {
          basePrice = basePrice + optionCount * op.price30;
        }
      }
    }
  });

  if (priceCountIndex >= 8) {
    basePrice = basePrice - 500 * priceCountIndex;
  }

  return basePrice;
};

exports.completeData = function (rawData) {
  //자율사용자
  var r = rawData;

  if (r.rtype == "pass") {
    if (parseInt(r.dm_sw) > 60) {
      r.dm_sw = "60";

      r.reason = "1시간 예약 가능";
    }

    if (r.stype == "NY") {
      r.possible = "NO";
      r.reason = "자율사용자는 NY 예약불가입니다";
      r.stype = "NB";
    }
    if (r.stype == "HR") {
      r.stype = "HM";
      r.possible = "NO";
      r.reason = "자율사용자는 HR 예약불가입니다";
    }
  }

  if (rawData.pkg != "nu") {
    if (parseInt(rawData.dm_sw) >= 600) {
      rawData.pkg = "up10";
    } else {
      if (rawData.hh_sw == "01" && parseInt(rawData.dm_sw) == 360) {
        rawData.pkg = "mo";
      } else if (rawData.hh_sw == "07" && parseInt(rawData.dm_sw) == 300) {
        rawData.pkg = "am";
      } else if (rawData.hh_sw == "12" && parseInt(rawData.dm_sw) == 240) {
        rawData.pkg = "da";
      } else if (rawData.hh_sw == "16" && parseInt(rawData.dm_sw) == 180) {
        rawData.pkg = "pm";
      } else if (rawData.hh_sw == "19" && parseInt(rawData.dm_sw) == 180) {
        rawData.pkg = "di";
      } else if (rawData.hh_sw == "22" && parseInt(rawData.dm_sw) == 180) {
        rawData.pkg = "ni";
      } else if (parseInt(rawData.dm_sw) >= 240) {
        rawData.pkg = "up4";
      } else {
        rawData.pkg = "no";
      }
    }
  }

  var startdate = new Date(
    parseInt(rawData.yy_sw),
    parseInt(rawData.mm_sw) - 1,
    parseInt(rawData.dd_sw),
    parseInt(rawData.hh_sw),
    parseInt(rawData.mi_sw)
  );

  r.startdate = startdate;
  console.log(rawData.dm_sw);
  r.durMin = parseInt(rawData.dm_sw);

  r.hm24 = 0;
  r.hm24 = r.hm24 + parseInt(rawData.hh_sw) * 100;
  r.hm24 = r.hm24 + parseInt(rawData.mi_sw) * 1;
  r.rn_sw = rawData.rn_sw;

  r.enddate = new Date(r.startdate.getTime() + 1000 * 60 * r.durMin);
  return r;
};

exports.calcuratePrice = function (data) {

  // console.log(data);

  data.startstr = "오후6:30";

  var startime = 630;

  var priceType = "NY";

  if (["NY", "HR", "HS"].includes(data.calendarId)) {
    priceType = "NY";
  } else if (
    ["NX", "NM", "NA", "ND", "HA", "HX", "HM", "HD"].includes(
      data.calendarId
    )
  ) {
    priceType = "NX";
  } else if (["NP", "NV", "NB", "NK", "HP", "HV"].includes(data.calendarId)) {
    priceType = "NP";
  } else {
    priceType = "NY";
  }

  var priceStartIndex = parseInt(Math.round(data.hm24 / 50));
  var priceCountIndex = parseInt(Math.round(data.durMin / 30));

  console.log(priceStartIndex);
  console.log(priceCountIndex);

  var basePrice = 0;

  var priceIndex = priceStartIndex;
  for (var i = 0; i < priceCountIndex; i++) {
    if (priceIndex >= 48) {
      priceIndex = priceIndex - 48;
    }
    basePrice = basePrice + priceTable[priceType][priceIndex];
    priceIndex++;
  }

  var o = data.option;
  var optionPriceTable = [
    { name: "큐", price30: 1000, type: "hour" },
    { name: "마", price30: 500, type: "hour" },
    { name: "헤", price30: 500, type: "hour" },
    { name: "피", price30: 500, type: "hour" },
    { name: "키", price30: 500, type: "hour" },
    { name: "일", price30: 500, type: "hour" },
    { name: "기", price30: 500, type: "hour" },

    { name: "블", price30: 1000, type: "day" },
    { name: "스", price30: 1000, type: "day" },
    { name: "보", price30: 1000, type: "day" },
    { name: "의", price30: 1000, type: "day" },
    { name: "인", price30: 1000, type: "day" },
    { name: "삼", price30: 1000, type: "day" },
    { name: "요", price30: 1000, type: "day" },
  ];

  optionPriceTable.forEach(function (op) {
    var optionIndex = o.indexOf(op.name);
    if (optionIndex > -1) {
      var optionCount = parseInt(o.substr(optionIndex + 1, 1));

      if (optionCount > 0) {
        if (op.type == "hour") {
          basePrice = basePrice + optionCount * op.price30 * priceCountIndex;
        } else {
          basePrice = basePrice + optionCount * op.price30;
        }
      }
    }
  });

  if (priceCountIndex >= 8) {
    basePrice = basePrice - 500 * priceCountIndex;
  }

  return basePrice;
};

exports.calcuratePriceV2 = function (data) {

  var priceType = "NY";
  //공간타입에 따라 가격테이블 결정
  if (["NY", "HR", "HS"].includes(data.stype)) {
    priceType = "NY";
  } else if (
    ["NX", "NM", "NA", "ND", "HA", "HX", "HD", "HM"].includes(data.stype)
  ) {
    priceType = "NX";
  } else if (["NP", "NK", "NV", "NB", "HP", "HV"].includes(data.stype)) {
    priceType = "NP";
  } else {
    priceType = "NY";
  }

  var priceStartIndex = parseInt(Math.round(data.hm24 / 50));
  var priceCountIndex = parseInt(Math.round(data.durMin / 30));

  console.log(priceStartIndex);
  console.log(priceCountIndex);

  var basePrice = 0;

  var priceIndex = priceStartIndex;
  for (var i = 0; i < priceCountIndex; i++) {
    if (priceIndex >= 48) {
      priceIndex = priceIndex - 48;
    }
    // console.log("-------------가격 더하기 ");
    // console.log(priceTable[priceType][priceIndex]);
    basePrice = basePrice + priceTable[priceType][priceIndex];
    priceIndex++;
  }

  if(priceCountIndex < 2 ) {
    basePrice = basePrice + 1000;

  }
  // console.log(data);
  if (data.pkg == "nu") {
    basePrice = basePrice / 2;
  } else if (data.pkg == "up10") {
    basePrice = basePrice * 0.6;
  } else if (data.pkg == "up4") {
    basePrice = basePrice * 0.8;
  } else if (data.pkg == "mo") {
    basePrice = basePrice * 0.5;
  } else if (data.pkg == "am") {
    basePrice = basePrice * 0.6;
  } else if (data.pkg == "da") {
    basePrice = basePrice * 0.8;
  } else if (data.pkg == "pm") {
    basePrice = basePrice * 0.9;
  } else if (data.pkg == "di") {
    basePrice = basePrice * 0.9;
  } else if (data.pkg == "ni") {
    basePrice = basePrice * 0.9;
  }

  if (data.rtype == "pass") {
    basePrice = 0;
  }

  if (data.rtype == "option") {
    basePrice = 0;
  }

  if (data.rtype == "visit") {
    basePrice = basePrice + 1000;
  }
  var optionPriceTable = [
    { name: "큐브", id: "cu_sw", price30: 1000, type: "hour" },
    { name: "SD앰프", id: "sd_sw", price30: 500, type: "hour" },
    { name: "마이크", id: "mc_sw", price30: 500, type: "hour" },
    { name: "헤드폰", id: "he_sw", price30: 500, type: "hour" },
    { name: "88건반", id: "dp_sw", price30: 1500, type: "hour" },
    { name: "전자키보드", id: "dk_sw", price30: 1000, type: "hour" },
    { name: "일렉기타", id: "el_sw", price30: 500, type: "hour" },
    { name: "통기타", id: "gi_sw", price30: 500, type: "hour" },
    { name: "오디오인터페이스", id: "au_sw", price30: 500, type: "hour" },
    { name: "드럼스틱", id: "ds_sw", price30: 500, type: "hour" },
    { name: "마이크스탠드", id: "st_sw", price30: 500, type: "hour" },

    { name: "블루투스스피커", id: "bl_sw", price30: 1000, type: "day" },
    { name: "스피커", id: "sp_sw", price30: 1000, type: "day" },
    { name: "보면대", id: "bo_sw", price30: 1000, type: "day" },
    { name: "의자", id: "ch_sw", price30: 1000, type: "day" },
    { name: "테이블", id: "ta_sw", price30: 1000, type: "day" },
    { name: "휴대폰삼각대", id: "hs_sw", price30: 1000, type: "day" },
    { name: "요가매트", id: "yo_sw", price30: 1000, type: "day" },
    { name: "음료", id: "dr_sw", price30: 1000, type: "day" },
    { name: "생수", id: "sn_sw", price30: 300, type: "day" },
  ];

  var optionPrice = 0;
  optionPriceTable.forEach(function (op) {
    var option = data[op.id];

    if (option) {
      var optionCount = parseInt(option);

      if (optionCount > 0) {
        if (op.type == "hour") {
          basePrice = basePrice + optionCount * op.price30 * priceCountIndex;
        } else {
          basePrice = basePrice + optionCount * op.price30;
        }
      }
    }
  });

  if (data.rtype == "vip") {
    basePrice = 0;
  }
  

  if (data.rtype == "admin") {
    basePrice = 0;
  }

  console.log('-----------------------r type ');
  console.log(data.rtype);
  
  if (data.rtype == "naverpay") {
    basePrice = basePrice + Math.round(basePrice*0.05/10)*10;
  }

  return basePrice;
};
