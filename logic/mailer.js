const nodemailer = require("nodemailer");

exports.mailSend = function (mailData) {
  let email = "oncevocaln@gmail.com";

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "oncevocaln@gmail.com", // gmail 계정 아이디를 입력
      //   pass: "Kwelcome30!%40", // gmail 계정의 비밀번호를 입력
      pass: "Kwelcome30!@", // gmail 계정의 비밀번호를 입력
    },
  });

  // mailData.admin = "http://bx.onbeat.kr/m?v=ad11";

  let mailOptions = {
    from: "oncevocaln@gmail.com", // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email, // 수신 메일 주소
    subject: mailData.title, // 제목
    text: mailData.mtext, // 내용
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
