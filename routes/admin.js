const express = require("express");

const gc = require("../logic/google-calendar");

const Reserve = require("../models/Reserve");

const mongoose = require("mongoose");
const router = express.Router();

router.get("/1", function (req, res, next) {


//   const rp = require('request-promise')
// const NodeRsa = require('node-rsa')

// const getLenChar = value => String.fromCharCode(`${value}`.length)

// async function doLogin(email, password) {
//     const cookieJar = rp.jar();

//     // 세션 키 발급
//     const keys = await rp({url: 'https://nid.naver.com/login/ext/keys.nhn', jar: cookieJar})
    
//     // 키 분리
//     const segmentalizedKeys = keys.split(',')
  
//     // 키 분리 데이터
//     const sessionkey = segmentalizedKeys[0]
//     const keyname = segmentalizedKeys[1]
//     const nvalue = segmentalizedKeys[2]
//     const evalue = segmentalizedKeys[3]

//     // RSA Public Key 설정
//     const key = new NodeRsa()
//     key.importKey({
//         e: Buffer.from(evalue, 'hex'),
//         n: Buffer.from(nvalue, 'hex')
//     }, 'components-public')
//     key.setOptions({encryptionScheme: 'pkcs1'});

//     // 아이디 비밀번호 암호화
//     const encpw = key.encrypt(
//         `${getLenChar(sessionkey)}${sessionkey}${getLenChar(email)}${email}${getLenChar(password)}${password}`,
//         'hex'
//     )

//     // 로그인 요청
//     const loginResponse = await rp({
//         method: 'POST',    
//         url: 'https://nid.naver.com/nidlogin.login',
//         jar: cookieJar,
//         formData: {
//             encnm: keyname,
//             enctp: 1,
//             encpw: encpw,
//             exp: '',
//             locale: 'ko_KR',
//             localechange: '',
//             logintp: '',
//             ls: '',
//             postDataKey: '',
//             pre_id: '',
//             pw: '',
//             resp: '',
//             ru: '',
//             smart_LEVEL: -1,
//             svc: '',
//             svctype: 0,
//             theme_mode: '',
//             url: 'https://www.naver.com',
//             viewtype: 0
//         },
//         headers: {
//             'Origin': 'https://www.naver.com',  
//             'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//             'Referer' :'https://www.naver.com/',
//             'Accept-Language': 'ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4'
//         }
//     })

//     // 로그인 결과에서 로그인 승인 url 추출
//     const extractLoginFinalizeUrl = /location.replace\("(.*)"\)/g.exec(loginResponse)
//     const finalizeUrl = extractLoginFinalizeUrl ? extractLoginFinalizeUrl[1] : null

//     // url 추출에 실패했다면 로그인에 실패했다
//     if(!finalizeUrl) throw new Error('로그인에 실패하였습니다')

//     // 로그인 승인
//     await rp({url: finalizeUrl, jar: cookieJar})

//     return {message: '로그인에 성공하였습니다', cookieJar: cookieJar};
// }


// console.log('--------------------login naver test -------');

// // 로그인 요청
// doLogin('hyoleek@naver.com', 'qwas112233')
//     .then(result => console.log(result))
//     .catch(error => console.error(error))


  // res.render("admin", {});

});

  
router.get("/2", function (req, res, next) {
    res.render("admin", { session: req.session });

});

  



module.exports = router;
