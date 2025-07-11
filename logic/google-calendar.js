const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const mailer = require("../logic/mailer");

function makeOnlyNumberString(str) {
  var strSimple = "";
  if (typeof str == "string") {
    str.split("").forEach(function (c) {
      if ("0123456789".includes(c)) {
        strSimple = strSimple + c;
      }
    });
  }
  return strSimple;
}

const rtypeArray = {
  pass: "자율",
  vip: "VIP",
  rent: "대여",
  admin: "관리자",
  visit: "현장",
  naverpay: "네이버페이",
  option: "OPTION",
};

//캘린더 중복설정
const calendarIds = {
  NY: {
    id: "3v45ttcu6h58kho5vtibohf7g4@group.calendar.google.com",
    count: 1,
  },
  HA: {
    id: "iq83se4r2bk5g6t192faevn3oc@group.calendar.google.com",
    count: 1,
  },
  HD: {
    id: "2losj7uf7v1nqvrgos17jmbfgs@group.calendar.google.com",
    count: 2,
  },
  HM: {
    id: "1cji92facmh8jv5iv1d0ab5fa8@group.calendar.google.com",
    count: 4,
  },
  HP: {
    id: "2g2aafkknaic3hbhms2s9ioe0s@group.calendar.google.com",
    count: 5,
  },
  HR: {
    id: "tuhanmpfe7rp38o3sgjsihv25s@group.calendar.google.com",
    count: 1,
  },
  HS: {
    id: "nl95ks4jpidhh7u9na8i8u0o9o@group.calendar.google.com",
    count: 1,
  },
  HV: {
    id: "s7of71vt2vnkkoagvn36l564s8@group.calendar.google.com",
    count: 6,
  },
  HX: {
    id: "jafg35nd8mogipmmaqfu30nei4@group.calendar.google.com",
    count: 2,
  },
  NA: {
    id: "dhb4q9dnpqoq1k5pknvh6i3l78@group.calendar.google.com",
    count: 1,
  },
  NB: {
    id: "94pkff5ut7b75i72dpecna9p54@group.calendar.google.com",
    count: 3,
  },
  ND: {
    id: "n2jhd5rbhlu3k5fl77abojsef4@group.calendar.google.com",
    count: 2,
  },
  NM: {
    id: "bjgpl3ggs5mo4ca37ta5k1prc8@group.calendar.google.com",
    count: 3,
  },
  NP: {
    id: "kuiihiuag255j4jkp05u0odv8k@group.calendar.google.com",
    count: 8,
  },
  NV: {
    id: "35hmjijhbur05298sp2fpaptis@group.calendar.google.com",
    count: 5,
  },
  NX: {
    id: "mj2te6b290tkr2ttea3u93iepk@group.calendar.google.com",
    count: 2,
  },
  SD: {
    id: "1843d7c0e667b7a107d3fd7f5057e501ad72a0a9b3aa632dac3cffcf8905990e@group.calendar.google.com",
    count: 2,
  },
  SM: {
    id: "f6c9f8a9446032ada778ca924784b24c7e3a1281a77e2902d39fc94d93a961b6@group.calendar.google.com",
    count: 1,
  },
  SP: {
    id: "fb4aa8d23e5461d48403f74a8f9b9362c208eadf32eddf6ebd865a32dec49e4a@group.calendar.google.com",
    count: 1,
  },
  SX: {
    id: "9f4ac065e865199ba0366e5c7d47690bfbff345cc9fdd1c4e48a05171c9282ea@group.calendar.google.com",
    count: 1,
  },
  SV: {
    id: "0332f7592636b54b2814e188a802d8b9e24c6b47c110e60a2c9448ac1ca28351@group.calendar.google.com",
    count: 1,
  },

  OP: {
    id: "6kbrfp74k5pu451vtj0sc206lg@group.calendar.google.com",
    count: 100,
  },

  RQ: {
    id: "82fvjk2siqbb8hgv8i3efi0npk@group.calendar.google.com",
    count: 100,
  },
};

// If modifying these scopes, delete token.json.
// const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
// fs.readFile("credentials.json", (err, content) => {
//   if (err) return console.log("Error loading client secret file:", err);
//   // Authorize a client with credentials, then call the Google Calendar API.
//   authorize(JSON.parse(content), listEvents);
// });

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
  const calendar = google.calendar({ version: "v3", auth });
  calendar.events.list(
    {
      //3v45ttcu6h58kho5vtibohf7g4@group.calendar.google.com NY
      calendarId: "3v45ttcu6h58kho5vtibohf7g4@group.calendar.google.com",
      //   calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const events = res.data.items;
      if (events.length) {
        console.log("Upcoming 10 events:");
        console.log(events);
        events.map((event, i) => {
          console.log(event);
          const start = event.start.dateTime || event.start.date;
          console.log(`${start} - ${event.summary}`);
        });
      } else {
        console.log("No upcoming events found.");
      }
    }
  );
}

exports.listUpcomingEvent = function (data, callback) {

  var calendarId = calendarIds[data.stype].id;
  data.calendarId = calendarId;
  var rcount = calendarIds[data.stype].count;
  data.reason = "";
  data.room_requested = data.rn_sw;

  var dupCount = 0;

  var occupiedroom = [];
  var emptyroom = 0;
  var destroom = parseInt(data.rn_sw);

  if (destroom > rcount) {
    destroom = 1;
    data.rn_sw = destroom.toString();
  }
  // Load client secrets from a local file.
  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Calendar API.

    authorize(JSON.parse(content), function (auth) {
      const calendar = google.calendar({ version: "v3", auth });

      calendar.events.list(
        {
          //3v45ttcu6h58kho5vtibohf7g4@group.calendar.google.com NY
          calendarId: calendarId,
          //   calendarId: "primary",
          // timeMin: new Date().toISOString(),
          timeMin: data.startdate.toISOString(),
          timeMax: data.enddate.toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: "startTime",
        },
        (err, res) => {
          if (err) return console.log("The API returned an error: " + err);
          const events = res.data.items;
          if (events.length) {
            console.log("Upcoming 10 events:");
            events.map((event, i) => {
              // console.log(event);

              const start = event.start.dateTime || event.start.date;

              const end = event.end.dateTime || event.end.date;

              // console.log("-----------------compare----------data start");
              // console.log(data.startdate);
              // console.log(end);
              // console.log(start);

              var dstart = data.startdate;

              // 시작 시간에서 사용분을 더한다

              var gstart = new Date(start);
              var gend = new Date(end);

              // console.log("------------------------g end ");
              // console.log(gstart);
              // console.log(gend);
              // console.log("-------------------------------ssee");

              //겹치는 시간이 있는지 조사
              //   if (data.startdate > gstart && data.start < gend) {

              if (
                (data.startdate >= gstart && data.startdate < gend) ||
                (data.enddate > gstart && data.enddate <= gend)
              ) {
               
                dupCount = dupCount + 1;

                var groomstr = makeOnlyNumberString(
                  event.summary.substring(0, 4)
                );
                var groom = parseInt(groomstr) || 1;

                occupiedroom[groom] = "BOOK";

                //정확한 방 번호로 나오도록 고쳐야 함
                data.reason =
                  data.reason +
                  event.summary.substring(0, 3) +
                  "* - " +
                  gstart.getHours() +
                  "시" +
                  (gstart.getMinutes() < 10 ? "0" : "") +
                  gstart.getMinutes() +
                  "분 ~" +
                  gend.getHours() +
                  "시" +
                  (gend.getMinutes() < 10 ? "0" : "") +
                  gend.getMinutes() +
                  "분 일정 있음\n";
              }
            });

            if (dupCount >= rcount) {
              data.possible = "NO";
            } else {
              for (var i = 1; i <= rcount; i++) {
                if (occupiedroom[i] != "BOOK" && emptyroom == 0) {
                  emptyroom = i;
                }
              }

              if (occupiedroom[destroom] == "BOOK") {
                destroom = emptyroom;
                data.rn_sw = destroom.toString();
                data.room = destroom;
              }
            }

            callback(err, data);
          } else {
            console.log("No upcoming events found.");
            callback(err, data);
          }
        }
      );
    });
  });
};

exports.makeEvent = function (data, callback) {
  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Calendar API.

    authorize(JSON.parse(content), function (auth) {
      const calendar = google.calendar({ version: "v3", auth });
      // var recurrence = ["RRULE:FREQ=DAILY;COUNT=2"];
      var email = "";
      var grade = "no";

      if (data.user && data.user.email) {
        email = data.user.email;
        grade = data.user.grade;
      }
      var gstart = data.startdate.toISOString();
      var gend = data.enddate.toISOString();
      //이름을 마스킹하는 다른 방법을 찾기

      console.log('-----------------google api data');
      console.log(data);

      var rtypeString = rtypeArray[data.rtype];
      var summary =
        "" +
        data.stype +
        data.room +
        " " +
        data.username +
        "/" +
        rtypeString +
        "/" +
        data.price +
        "원";

      data.gstype = data.stype;
      //신규가입자이거나 등급이 없다면
      if (grade == "no" || grade == "new") {
        var calendarId = calendarIds["RQ"].id;
        data.gstype = "RQ";
      } else {
        var calendarId = calendarIds[data.stype].id;
      }

      var recurrence = "RRULE:FREQ=DAILY;COUNT=2";

      var requestDate = new Date().toLocaleString();

      var description =
        "이름: " +
        data.username +
        " / 휴대폰: " +
        data.mobile +
        " / 방번호선택: " +
        data.room_requested +
        "\n / 입력일시: " +
        requestDate;
      // var gend = data.endate.toISOString();
      var event = {
        summary: summary,
        location: "옵션:" + data.os,
        description: description,
        start: {
          dateTime: gstart,
          timeZone: "Asia/Seoul",
        },
        end: {
          dateTime: gend,
          timeZone: "Asia/Seoul",
        },
        // recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
        recurrence: [],
        // attendees: [{ email: "oncevocaln@gmail.com" }],
        reminders: {
          useDefault: false,
          overrides: [
            // { method: "email", minutes: 24 * 60 },
            // { method: "popup", minutes: 24 * 60 },
          ],
        },
      };

      try {
        calendar.events.insert(
          {
            auth: auth,
            calendarId: calendarId,
            resource: event,
          },
          function (err, event) {
            if (err) {
              console.log(
                "There was an error contacting the Calendar service: " + err
              );
            }
            console.log("Event created: %s", event.data.htmlLink);
            console.log(
              "===================================== created google event ================="
            );

            var viewStart = new Date(data.startdate);
            var viewDateStr =
              viewStart.getMonth() +
              1 +
              "월" +
              viewStart.getDate() +
              "일/" +
              viewStart.getHours() +
              "시" +
              viewStart.getMinutes() +
              "분";

            var mtext = "이름 : " + data.username + "\n예약내용: " + data.rtext;

            console.log(mtext);
            var mailData = {
              title:
                "" +
                rtypeString +
                "입력:" +
                data.gstype +
                " " +
                viewDateStr +
                " 요청:" +
                event.data.summary,
              data: data,
              mtext: mtext,
            };
            mailer.mailSend(mailData);

            callback(err, data);
          }
        );
      } catch (e) {
        callback(err, data);
      }
    });
  });
};

// 네이버 스페이스클라우드 용
exports.insertEventFromRequest = function (data, callback) {
  fs.readFile("credentials.json", (err, content) => {
    if (err) return console.log("Error loading client secret file:", err);
    // Authorize a client with credentials, then call the Google Calendar API.

    authorize(JSON.parse(content), function (auth) {
      const calendar = google.calendar({ version: "v3", auth });
      // var recurrence = ["RRULE:FREQ=DAILY;COUNT=2"];
      var email = "";
      var grade = data.from;

      var gstart = data.start.toISOString();
      var gend = data.end.toISOString();

      var rtypeString = data.from;
      var summary =
        "" +
        data.stype +
        data.room +
        " " +
        data.username +
        "/" +
        rtypeString +
        "/" +
        data.price +
        "원";

      data.gstype = data.stype;
      //신규가입자이거나 등급이 없다면
      if (grade == "no" || grade == "new") {
        var calendarId = calendarIds["RQ"].id;
        data.gstype = "RQ";
      } else {
        var calendarId = calendarIds[data.stype].id;
      }

      var recurrence = "RRULE:FREQ=DAILY;COUNT=2";

      var requestDate = new Date().toLocaleString();

      var description =
        "이름: " +
        data.username +
        " / 휴대폰: " +
        data.mobile +
        "\n / 입력일시: " +
        requestDate;

      // var gend = data.endate.toISOString();
      var event = {
        summary: summary,
        location: "옵션:" + data.os,
        description: "이름: " + data.username + " / 휴대폰: " + data.mobile,
        start: {
          dateTime: gstart,
          timeZone: "Asia/Seoul",
        },
        end: {
          dateTime: gend,
          timeZone: "Asia/Seoul",
        },
        // recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
        recurrence: [],
        // attendees: [{ email: "oncevocaln@gmail.com" }],
        attendees: [],
        reminders: {
          useDefault: false,
          overrides: [
            // { method: "email", minutes: 24 * 60 },
            // { method: "popup", minutes: 60 },
          ],
        },
      };
      try {
        calendar.events.insert(
          {
            auth: auth,
            calendarId: calendarId,
            resource: event,
          },
          function (err, event) {
            if (err) {
              console.log(
                "There was an error contacting the Calendar service: " + err
              );
            }
            console.log("Event created: %s", event.data.htmlLink);
            console.log(
              "===================================== created google event ================="
            );

            var viewStart = new Date(data.start);
            var viewDateStr =
              viewStart.getMonth() +
              1 +
              "월" +
              viewStart.getDate() +
              "일/" +
              viewStart.getHours() +
              "시" +
              viewStart.getMinutes() +
              "분";

            var mtext =
              "예약자 : " +
              data.username +
              "\n플랫폼 : " +
              data.from +
              "\n예약번호 : " +
              data.rno +
              "\n시작시간 : " +
              viewDateStr +
              "\n사용분 : " +
              data.dur +
              "\n공간 : " +
              data.stype +
              "\n방 : " +
              data.room +
              "\n옵션 : " +
              data.os +
              "\n휴대폰 : " +
              data.mobile;

            /*
            
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

                    */

            console.log(mtext);
            var mailData = {
              title:
                "" +
                rtypeString +
                "입력:" +
                data.gstype +
                " " +
                viewDateStr +
                " 요청:" +
                event.data.summary,
              data: data,
              mtext: mtext,
            };
            mailer.mailSend(mailData);

            callback(err, data);
          }
        );
      } catch (e) {
        callback(err, data);
      }
    });
  });
};
