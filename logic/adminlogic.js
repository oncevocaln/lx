const Request = require("../models/Request");
const google = require("../logic/google-calendar");

String.prototype.indexOfRegex = function (regex, fromIndex) {
    var str = fromIndex
        ? this.substring(fromIndex)
        : this;
    var match = str.match(regex);
    return match
        ? str.indexOf(match[0]) + fromIndex
        : -1;
}

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

function extractNumbers(inputString) {
    // 정규 표현식을 사용하여 숫자만 추출
    var numbersOnly = inputString.replace(/[^0-9]/g, '');
  
    // 추출된 숫자를 반환
    return numbersOnly;
  }
  
function makeNoSpaceString(str) {
    var strSimple = "";
    if (typeof(str) == "string") {
        str
            .split("")
            .forEach(function (c) {
                if (!" ".includes(c)) {
                    strSimple = strSimple + c;
                }
            })
    }
    return strSimple;
}

function makeNoNumberString(str) {
    var strSimple = "";
    if (typeof(str) == "string") {
        str
            .split("")
            .forEach(function (c) {
                if (!"0123456789".includes(c)) {
                    strSimple = strSimple + c;
                }
            })
    }
    return strSimple;
}

var stypelist = [
    "NY",
    "NA",
    "NB",
    "NP",
    "NM",
    "NX",
    "NK",
    "ND",
    "NV",
    "HR",
    "HS",
    "HA",
    "HD",
    "HX",
    "HM",
    "HP",
    "HV",
    "SP",
    "SM",
    "SD",
    "SX",
    "SV"
]

exports.splitData = async function (rawData) {
    var data = {
        list: [],
        insert: []
    };


    /*
내 업체
업체
예약·주문
예약·주문자
예약·주문 통계
이용일옵션보기
이전
23.5.19.금 ~ 6. 18.일
다음
예약자명
입력후 검색하세요
검색
확정18 명
확정	
한창희
완료 280, 취소 48
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
    var from = "";

    if (rawData.includes("[Web]발신")) {
        from = "navertext";
    } else if (rawData.includes("NAVER Corp. All Rights Reserved")) {
        from = "navertotal";
    } else if (rawData.includes("내 업체") && rawData.includes("이용일옵션보기")) {
        from = "navermobile";
    } else if (rawData.includes("NSPACE")) {
        from = "spacetotal"
    } 

    if (from == "navermobile") {
        data.from = "naver";
        // rawlist = rawData.split("예약자");
        rawlist = rawData.split("확정");
        rawlist.forEach(function (rl) {
            var visitor = "";

            if(rl.includes("예약자")){
                rl = rl.substring(rl.indexOf("예약자") + 4 , rl.length);
            console.log('------------------------------------rl---------------')
            console.log(rl);
            if(rl.includes("방문자")) {
                var i = rl.indexOf("방문자");
                var j = rl.indexOf("예약번호");
                var rl1 =  rl.substring(0,i);
                var rl2 = rl.substring(i,j);
                var rl3 = rl.substring(j, rl.length);

                console.log("test---------------------------");
                console.log(rl1);
                console.log(rl2);
                console.log(rl3);
                rl = rl1 + rl3;
            }
            var rlarray = rl.split("\n");
            console.log(rlarray);
            var unit = {
                stype: ""
            };
            //휴대폰 번호가 없으면 처리불가능
            unit.mobile = "";
            console.log('------------------------ mobile --------------')
            console.log(rlarray[1]);
            unit.mobile = makeOnlyNumberString(rlarray[1]);

            if (unit.mobile && unit.mobile.indexOf("010") > -1) {
                unit.formated = true;
                unit.from = "naver";
                unit.username = rlarray[0];
                unit.rno = "n" + makeOnlyNumberString(rlarray[2]);

                unit.timestr = rlarray[6] + "@" + rlarray[7];

                var timedata = convertTimeDataNaverMobile(rlarray[6], rlarray[7]);
                unit.startdate = timedata.startdate;
                unit.enddate = timedata.enddate;
                unit.dur = timedata.dur;

                unit.placestr = rlarray[4];
                unit.spacestr = rlarray[5];

                unit.spacecount = 1;

                unit.optionstr = visitor;
                unit.room = 1;

                if (unit.optionstr.includes("방번호")) {
                    var xIndex = unit
                        .optionstr
                        .indexOf("방번호");
                    console.log(xIndex);
                    var roomstr = makeOnlyNumberString(
                        unit.optionstr.substring(xIndex + 3, xIndex + 10)
                    );
                    console.log(roomstr);
                    unit.room = parseInt(roomstr) || 1;
                }

                unit.paid = false;
                if(rl.includes("결제완료")) {
                  unit.paid = true;
                }
                unit.demandstr = "";
                // unit.paystatus = paystatus;
                // unit.amountstr = rlarray[12];
                unit.check = "";
                unit.stype = "RQ";
                // unit.room = 1;
                unit.os = "";
                //방번호

                stypelist.forEach(function (st) {
                    if (unit.spacestr.includes(st)) {
                        unit.stype = st;
                    }
                });
                unit.rawData = rl;
                unit.formated = true;

            } else {
                unit.formated = false;
            }

            
            data
                .list
                .push(unit);
        }

            }
            )

        data
            .list
            .forEach(async function (unit) {

                // inserting
                if (unit.formated == true && unit.paid == true) {

                    var preparedData = {
                        from: unit.from,
                        rno: unit.rno,
                        username: unit.username,
                        mobile: unit.mobile,
                        start: unit.startdate,
                        end: unit.enddate,
                        dur: unit.dur,
                        stype: unit.stype,
                        room: unit.room,
                        os: unit.os,
                        price: unit.amountstr
                    }

                    var request = new Request(preparedData);
                    try {
                        const prevOne = await Request.findOne({
                            rno: request.rno
                        }, {}, {
                            sort: {
                                'creationDate': -1
                            }
                        });

                        if (prevOne) {
                            unit.status = prevOne.status;

                        } else {
                            console.log('----------------------------has no prev one ---------------');
                            const savedData = await request.save();

                            google.insertEventFromRequest(preparedData, (err, data) => {
                                console.log('-----------make event after---------------');
                                console.log(data);

                            });

                            console.log('saved data -' + savedData);
                        }

                    } catch (e) {
                        console.log('saved data -' + e);
                    }
                }
            })
        console.log('----------- this is naver mobile2 list');
    } else if (from == "navertotal") {
        data.from = "naver";
        rawlist = rawData.split("확정");
        rawlist.forEach(function (rl) {

            var rlarray = rl.split("\n");
            console.log(rlarray);
            var unit = {
                stype: ""
            };

            //휴대폰 번호가 없으면 처리불가능
            unit.mobile = "";

            unit.mobile = makeOnlyNumberString(rlarray[2]);

            if (unit.mobile && unit.mobile.indexOf("010") > -1) {
                unit.formated = true;
                unit.from = "naver";
                unit.username = rlarray[1];
                unit.rno = "n" + rlarray[3].trim();
                unit.timestr = rlarray[4];
                var timedata = convertTimeData(unit.timestr);
                unit.startdate = timedata.startdate;
                unit.enddate = timedata.enddate;
                unit.dur = timedata.dur;

                unit.placestr = rlarray[5];
                unit.spacestr = rlarray[6];

                unit.spacecount = rlarray[7];

                unit.optionstr = rlarray[9];
                unit.room = 1;

                console.log('--------------option str');
                console.log(unit.optionstr);
                if (unit.optionstr.includes("방번호")) {
                    var xIndex = unit
                        .optionstr
                        .indexOf("방번호");
                    console.log(xIndex);
                    var roomstr = makeOnlyNumberString(
                        unit.optionstr.substring(xIndex + 3, xIndex + 10)
                    );
                    console.log(roomstr);
                    unit.room = parseInt(roomstr) || 1;

                }
                // unit.demandstr = rlarray[9];
                unit.paystatus = rlarray[10];
                unit.amountstr =  extractNumbers(rlarray[11]) ;

                console.log(rlarray);

                console.log("-----------------가격 출력 ----------");
                
                console.log(unit.amountstr);
                unit.check = "";
                unit.stype = "RQ";
                // unit.room = 1;
                unit.os = "";
                //방번호

                stypelist.forEach(function (st) {
                    if (unit.spacestr.includes(st)) {
                        unit.stype = st;
                    }
                });
                unit.paid = false;
                if(rl.includes("결제완료")) {
                  unit.paid = true;
                }
                unit.rawData = rl;
                unit.formated = true;

            } else {
                unit.formated = false;
            }

            data
                .list
                .push(unit);
        })

        data
            .list
            .forEach(async function (unit) {

                // inserting
                if (unit.formated == true && unit.paid == true) {

                    var preparedData = {
                        from: unit.from,
                        rno: unit.rno,
                        username: unit.username,
                        mobile: unit.mobile,
                        start: unit.startdate,
                        end: unit.enddate,
                        dur: unit.dur,
                        stype: unit.stype,
                        room: unit.room,
                        os: unit.os,
                        price: unit.amountstr
                    }

                    var request = new Request(preparedData);
                    try {
                        const prevOne = await Request.findOne({
                            rno: request.rno
                        }, {}, {
                            sort: {
                                'creationDate': -1
                            }
                        });

                        if (prevOne) {
                            unit.status = prevOne.status;

                        } else {
                            console.log('----------------------------has no prev one ---------------');
                            const savedData = await request.save();

                            google.insertEventFromRequest(preparedData, (err, data) => {
                                console.log('-----------make event after---------------');
                                console.log(data);

                            });

                            console.log('saved data -' + savedData);
                        }

                    } catch (e) {
                        console.log('saved data -' + e);
                    }
                }

            })
    } else if (from == "spacetotal") {
        data.from = "space";

        console.log("============================================spacecloud parse data ");
        console.log(rawData);

        rawlist = rawData.split("예약확정");
        rawlist.forEach(function (rl) {

            var unit = {
                stype: "RQ"
            };
  
            if ( rl != undefined && rl!=null && rl.includes("예약번호") && rl.includes("010-") && rl.includes("0원")) {

                unit.from = "space";
                unit.formated = true;

                unit.rno = "s" + makeOnlyNumberString(rl.substring(15, 3));

                var firstIndex = rl.search(/20[0-9]+.[0-9]+.[0-9]+/g);

                console.log("-------------------where is first index");
                console.log(firstIndex);
                var yearStringIndex = rl.search(/2024./) ;
                
                if(yearStringIndex < 1) {
                    yearStringIndex = rl.search(/2025./);
                }
                
                if(yearStringIndex < 1) {
                    yearStringIndex = rl.search(/2026./);
                }
                
                
                if(yearStringIndex < 1) {
                    yearStringIndex = rl.search(/2027./);
                }
                
                console.log(yearStringIndex);
                var firstCommaIndex = rl.search(",");
                var spacestr = rl.substring(firstCommaIndex, yearStringIndex).trim();

                unit.spacestr = spacestr;

                console.log(spacestr);

                stypelist.forEach(function (st) {
                    if (spacestr.includes(st)) {
                        unit.stype = st;
                        var sub = spacestr.substring(spacestr.indexOf(","));

                        var roomstr = makeOnlyNumberString(
                            sub.substring(sub.indexOf(st) + 3, sub.indexOf(st) + 2)
                        );
                        unit.room = parseInt(roomstr || 0) || 0;
                    }
                });

                //예약번호 넘김

                var afterstr = rl.substring(yearStringIndex).split("시간");

                unit.username = makeNoSpaceString(
                    afterstr[1].substring(0, afterstr[1].indexOf("010")).trim()
                );

                var x2 = afterstr[1]
                    .substring(afterstr[1].indexOf("010"))
                    .trim();

                unit.mobile = makeOnlyNumberString(x2.substring(0, 13));
                var x3 = x2.substring(13);

                unit.amountstr = extractNumbers( x3.substring(0, x3.indexOf("0원") + 2));

                unit.os = "";

                var timedata = convertTimeDataSpace(afterstr[0]);

                unit.startdate = timedata.startdate;
                unit.enddate = timedata.enddate;
                unit.dur = timedata.dur;

            }

            data
                .list
                .push(unit);
        })

        // data.result = result + "[대상]" + data.list.length + "개 데이터 중 새로 입력건\n";

        data
            .list
            .forEach(async function (unit) {

                // inserting
                if (unit.formated == true) {

                    var preparedData = {
                        from: unit.from,
                        rno: unit.rno,
                        username: unit.username,
                        mobile: unit.mobile,
                        start: unit.startdate,
                        end: unit.enddate,
                        dur: unit.dur,
                        stype: unit.stype,
                        room: unit.room,
                        os: unit.os,
                        price: unit.amountstr
                    }

                    var request = new Request(preparedData);
                    try {
                        const prevOne = await Request.findOne({
                            rno: request.rno
                        }, {}, {
                            sort: {
                                'creationDate': -1
                            }
                        });

                        if (prevOne) {
                            unit.status = prevOne.status;

                        } else {
                            const savedData = await request.save();
                            data
                                .insert
                                .push(unit);

                            await google.insertEventFromRequest(preparedData, (err, data) => {
                                console.log('-----------make event after---------------');
                                console.log(data);

                            });
                            console.log('saved data -' + savedData);
                        }

                    } catch (e) {
                        console.log('saved data -' + e);
                    }
                }

            })
    }

    return await data;
}

function convertTimeData(str) {

    var data = {};

    var dIndex = str.indexOf(")");

    var datestr = str
        .substring(dIndex + 1, 0)
        .trim();

    var datestrArray = datestr.split(".");

    var yystr = "20" + datestrArray[0].trim();
    var mmstr = datestrArray[1].trim();
    var ddstr = datestrArray[2].trim();

    var timestr = str
        .substring(dIndex + 1)
        .trim();

    var ampmstr = timestr.substring(2, 0);

    var fIndex = timestr.indexOf("~");
    var starttimestr = timestr
        .substring(fIndex, 2)
        .trim();

    var endtimestr = timestr
        .substring(fIndex + 1)
        .trim();

    var startColIndex = starttimestr.indexOf(":");

    var starthourstr = starttimestr.substring(startColIndex, 0);

    var starthour24 = parseInt(starthourstr);

    if (starthour24 == 12) {
        starthour24 = 0;
    }

    if (ampmstr == "오후") {
        starthour24 = 12 + starthour24;
    }

    var startminutestr = starttimestr.substring(startColIndex + 1);

    var endColIndex = endtimestr.indexOf(":");

    var endhourstr = endtimestr.substring(endColIndex, 0);

    var endhour24 = parseInt(endhourstr);

    if (ampmstr == "오후" || starthour24 > endhour24) {
        endhour24 = 12 + endhour24;
    }

    var endminutestr = endtimestr.substring(endColIndex + 1);

    var a = endminutestr;

    var startdate = new Date(
        parseInt(yystr),
        parseInt(mmstr) - 1,
        parseInt(ddstr),
        starthour24,
        parseInt(startminutestr)
    );

    var enddate = new Date(
        parseInt(yystr),
        parseInt(mmstr) - 1,
        parseInt(ddstr),
        endhour24,
        parseInt(endminutestr)
    );

    var dur = parseInt((enddate - startdate) / (1000 * 60));

    data.startdate = startdate;
    data.enddate = enddate;
    data.dur = dur;

    return data;
}

function convertTimeDataNaverMobile(datestr, timestr) {

    var data = {};
    // var dIndex = str.indexOf(")");

    console.log("-------------------------------time str ---------------------");
    console.log(timestr);
    var datestrArray = datestr.split(".");
    console.log(datestrArray[0]);
    console.log(datestrArray[1]);
    console.log(datestrArray[2]);
    
    var yystr = makeOnlyNumberString(datestrArray[0].trim());
    var mmstr = makeOnlyNumberString(datestrArray[1].trim());
    var ddstr = makeOnlyNumberString(datestrArray[2].trim());

    if (timestr.includes("오전")) {
        var ampmstr = "오전";
    } else {
        var ampmstr = "오후";
    }

    var fIndex = timestr.indexOf("~");
    var starttimestr = timestr
        .substring(fIndex, 2)
        .trim();

    var endtimestr = timestr
        .substring(fIndex + 1)
        .trim();

    var startColIndex = starttimestr.indexOf(":");

    var starthourstr = makeOnlyNumberString(
        starttimestr.substring(startColIndex, 0)
    );

    var starthour24 = parseInt(starthourstr);

    if (starthour24 == 12) {
        starthour24 = 0;
    }

    if (ampmstr == "오후") {
        starthour24 = 12 + starthour24;
    }

    var startminutestr = makeOnlyNumberString(starttimestr.substring(
        startColIndex + 1
    ));

    var endColIndex = endtimestr.indexOf(":");

    var endhourstr = makeOnlyNumberString(endtimestr.substring(endColIndex, 0));

    var endhour24 = parseInt(endhourstr);

    if (ampmstr == "오후" || starthour24 > endhour24) {
        endhour24 = 12 + endhour24;
    }

    var endminutestr = endtimestr.substring(endColIndex + 1, endColIndex + 3);

    // var a = endminutestr;

    var startdate = new Date(
        parseInt(yystr),
        parseInt(mmstr) - 1,
        parseInt(ddstr),
        starthour24,
        parseInt(startminutestr)
    );

    var enddate = new Date(
        parseInt(yystr),
        parseInt(mmstr) - 1,
        parseInt(ddstr),
        endhour24,
        parseInt(endminutestr)
    );

    var dur = parseInt((enddate - startdate) / (1000 * 60));

    data.startdate = startdate;
    data.enddate = enddate;
    data.dur = dur;

    return data;
}

function convertTimeDataSpace(str) {

    console.log("----------타임스트링");
    console.log(str);

    var data = {};

    console.log(str.substring(5,2));

    var durtimestr = str.substring(str.length , str.length-2 );

    var durtimeint = Number.parseInt(durtimestr);
    console.log("-----경과시간");
    console.log(durtimestr);
    var dIndex = str.indexOf(")");

    var datestr = str
        .substring(dIndex + 1, 0)
        .trim();

    var datestrArray = datestr.split(".");

    var yystr = datestrArray[0].trim();
    var mmstr = datestrArray[1].trim();
    var ddstr = datestrArray[2]
        .substring(0, datestrArray[2].indexOf("("))
        .trim();

    var timestr = str
        .substring(dIndex + 1)
        .trim();

    var fIndex = timestr.indexOf("~");
    var starttimestr = timestr
        .substring(fIndex, 0)
        .trim();

    var endtimestr = timestr
        .substring(fIndex + 1)
        .trim();


    var starthourstr = makeOnlyNumberString(starttimestr);

    var starthour24 = parseInt(starthourstr);

    var endhourstr = makeOnlyNumberString(
        endtimestr.substring(endtimestr.indexOf(","), 0)
    );

    var endhour24 = parseInt(endhourstr);

    var startminute = 0;
    var endminute = 0;
    if (endhour24 == 24) {
        endhour24 = 23;
        endminute = 59;
    }

    var startdate = new Date(
        parseInt(yystr),
        parseInt(mmstr) - 1,
        parseInt(ddstr),
        starthour24,
        startminute
    );


    var enddate = new Date(startdate.getTime() + durtimeint * 60 * 60 * 1000)

    // var enddate = new Date(
    //     parseInt(yystr),
    //     parseInt(mmstr) - 1,
    //     parseInt(ddstr),
    //     endhour24,
    //     endminute
    // );

    var dur = parseInt(Math.round((enddate - startdate) / (1000 * 60)));

    data.startdate = startdate;
    data.enddate = enddate;
    data.dur = dur;

    return data;
}
