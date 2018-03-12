import $http from "superagent";
import { Message } from "element-ui";
// { key:"1",name:"爆破员",},
// { key:"2",name:"安全员"},
// { key:"3",name:"保管员",},
// { key:"4",name:"技术员"},
// { key:"5",name:"押运员",},
// { key:"6",name:"驾驶员"},
// { key:"7",name:"仓库保管员",},
// { key:"8",name:"监理员"},
// { key:"9",name:"仓库保管员",},
// { key:"10",name:"评估人员"}
const cook = {
  set(name, value, days) {
    var d = new Date();
    if (days == null) {
      days = 1;
    }
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  },
  get(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  },
  delete(name) {
    cook.set(name, "", -1);
  }
};
//http://119.23.108.9/      测试服务器
const Basse_Port = "http://119.23.108.9:8898/api/v1/";
//const Basse_Port="http://"+location.host+"/fangtai_api/v2/"; //测试域名
export default {
  cook: cook,
  Basse_Port: Basse_Port,
  IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },
  sethistory() {
    cook.set("history", window.location.href);
  },
  setindex() {
    cook.set("index", window.location.href);
  },
  $AJAX(newUrl, type, data, callback) {
    let p = new Promise((resolve, reject) => {
      let $put;
      let token = cook.get("token");
      if (token) {
        if (type == "get") {
          $put = $http
            .get(Basse_Port + newUrl,data)
            .set("Authorization","Bearer "+token)
            .set("Content-Type", "application/json");
        } else {
          $put = $http
            .post(Basse_Port + newUrl, data)
            .set("Content-Type", "application/json");
        }
        $put.end((err, res) => {
          if (err || !res.ok) {
            if (res.status == 500) {
              Message({
                type: "error",
                message: res.body.message
              });
            } else if (res.status == 404) {

            } else if (res.status == 403) {
              Message({
                type: "error",
                message: "登录超时!"
              });
              cook.set("history", window.location.href);
              setTimeout(e => {
                let href = cook.get("index");
                window.location.href = index;
              }, 500);
              
            } else {
              Message({
                type: "error",
                message: "传输数据错误,请检查填写参数！"
              });
            }
            reject();
          } else {
           
            if (res.status == "200") {
              if(res.text.length==0){
                callback(res)
              }else{
                let BackJSON = JSON.parse(res.text);
                callback(BackJSON);
              }
              resolve();
            } else {
              Message({
                type: "error",
                message: "返回数据错误"
              });
            }
          }
        });
      } else {
        window.location.href = cook.get("index") ;
      }
    })
    return p;
  },
  person:["爆破员","安全员","保管员","技术员","押运员","驾驶员","仓库保管员","监理员","仓库保管员","评估人员"],
  imgput(uid,fd,callback){
    $http.post(Basse_Port+"file/user/"+uid, fd)
    .end((err, res) => {
        callback(err, res)
    })
  },
  index_config: {}
};

/* let a = CryptoJS.AES.encrypt("11",key)
   let b = CryptoJS.AES.decrypt(a, key)
   console.log(b.toString(CryptoJS.enc.Utf8))

let b = CryptoJS.enc.Utf8.parse("11");
console.log(CryptoJS.enc.Base64.stringify(b))
let c = CryptoJS.enc.Base64.parse(CryptoJS.enc.Base64.stringify(b));
/console.log(c.toString(CryptoJS.enc.Utf8))*/
