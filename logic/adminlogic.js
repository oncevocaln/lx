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
    "HV"
]

exports.splitData = async function (rawData) {
    var data = {
        list: [],
        insert: []
    };

    var from = "";

    if (rawData.includes("[Web]발신")) {
        from = "navertext";
    } else if (rawData.includes("NAVER Corp. All Rights Reserved")) {
        from = "navertotal";
    } else if (rawData.includes("NAVER예약파트너센터") && rawData.includes("빠른순늦은순")) {
        from = "navermobile";
    } else if (rawData.includes("NSPACE")) {
        from = "spacetotal"
    }

    if (from == "navermobile") {
        data.from = "naver";
        rawlist = rawData.split("확정");
        rawlist.forEach(function (rl) {
            console.log('-------------------rl---naver mobile ------------');
            var rlarray = rl.split("\n");
            console.log(rlarray);
            var unit = {
                stype: ""
            };

            //휴대폰 번호가 없으면 처리불가능
            unit.mobile = "";

            unit.mobile = makeOnlyNumberString(rlarray[4]);

            if (unit.mobile && unit.mobile.indexOf("010") > -1) {
                unit.formated = true;

                unit.from = "naver";
                unit.username = rlarray[1];
                unit.rno = "n" + makeOnlyNumberString(rlarray[5].trim());

                unit.timestr = rlarray[9] + "@" + rlarray[10];

                var timedata = convertTimeDataNaverMobile(rlarray[9], rlarray[10]);
                unit.startdate = timedata.startdate;
                unit.enddate = timedata.enddate;
                unit.dur = timedata.dur;

                unit.placestr = rlarray[7];
                unit.spacestr = rlarray[8];

                unit.spacecount = rlarray[11];

                unit.optionstr = rlarray[12];
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

                unit.paid = false;
                if(rl.includes("결제완료")) {
                  unit.paid = true;
                }
                unit.demandstr = rlarray[10];
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
        })

        data
            .list
            .forEach(async function (unit) {

                console.log("-----------------formated unit status ");
                console.log(unit);
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
                        os: unit.os
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
        console.log('----------- this is naver list');
    } else if (from == "navertotal") {
        data.from = "naver";
        rawlist = rawData.split("확정");
        rawlist.forEach(function (rl) {
            console.log('-------------------rl------');

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
                unit.demandstr = rlarray[10];
                unit.paystatus = rlarray[11];
                unit.amountstr = rlarray[12];
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
                        os: unit.os
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
        console.log('----------- this is naver list');
    } else if (from == "spacetotal") {
        data.from = "space";

        console.log(rawData);

        rawlist = rawData.split("예약확정");
        rawlist.forEach(function (rl) {

            var unit = {
                stype: "RQ"
            };
            console.log('-------------------rl--');
            if (rl.includes("예약번호") && rl.includes("010-") && rl.includes("0원")) {

                unit.from = "space";
                unit.formated = true;

                console.log('----------formated data from space');

                unit.rno = "s" + makeOnlyNumberString(rl.substring(15, 3));

                var firstIndex = rl.search(/20[0-9]+.[0-9]+.[0-9]+/g);

                var spacestr = rl
                    .substring(0, firstIndex)
                    .trim();
                unit.spacestr = spacestr;

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

                var afterstr = rl
                    .substring(firstIndex)
                    .split("시간");

                unit.username = makeNoSpaceString(
                    afterstr[1].substring(0, afterstr[1].indexOf("010")).trim()
                );

                var x2 = afterstr[1]
                    .substring(afterstr[1].indexOf("010"))
                    .trim();

                unit.mobile = makeOnlyNumberString(x2.substring(0, 13));
                var x3 = x2.substring(13);
                unit.amountstr = x3.substring(0, x3.indexOf("0원") + 2);
                unit.os = "";

                // unit.mobile = makeOnlyNumberString(
                // afterstr[1].substring(afterstr[1].indexOf("010")).trim().substring(0,13) );
                console.log('---------------------formated unit ---------');
                // console.log(firstIndex);

                console.log(unit.rno);
                // console.log(unit.spacestr);

                console.log(unit.username);
                console.log(unit.mobile);
                console.log(unit.amountstr);
                console.log(unit.stype);
                console.log(unit.room);
                console.log(afterstr[0]);

                console.log(afterstr[1]);

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

                console.log('--------------print unit')
                console.log(unit);
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
                        os: unit.os
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
                            data
                                .insert
                                .push(unit);
                            // data.result = data.result +  request.rno + "/" + request.username + "/" +
                            // request.mobile + + "/" + request.startdate + "/" + request.stype + "\n" ;

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
        console.log('----------- this is naver list');

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
    var datestrArray = datestr.split(".");
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

    var data = {};

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

    var enddate = new Date(
        parseInt(yystr),
        parseInt(mmstr) - 1,
        parseInt(ddstr),
        endhour24,
        endminute
    );

    var dur = parseInt(Math.round((enddate - startdate) / (1000 * 60)));

    data.startdate = startdate;
    data.enddate = enddate;
    data.dur = dur;

    return data;
}
