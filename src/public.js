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
const Basse_Port = "http://192.168.1.82:8898/api/v1/";    //测试服务器
//const Basse_Port = "http://119.23.108.9:8898/api/v1/";
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
        } 
        if(type=="patch"){
            $put = $http
            .patch(Basse_Port + newUrl,data)
            .set("Authorization","Bearer "+token)
            .set("Content-Type", "application/json");
        }
        if(type=="post"){
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
           
            if (res.status == "200" || res.status == "201") {
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
  projectLevel(e){     //项目级别
    let a=["低","中","高"];
    return e=a[e-1]
  },
  imgplice(e){
    let a=e.replace(/^(?:[^/]*\/){3}(.*)$/,"$1");
    return e=a.slice(0,a.indexOf("?"))
  },
  convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS'),
      ctx = canvas.getContext('2d'),
      img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img,0,0);
      var dataURL = canvas.toDataURL(outputFormat || 'image/png');
      callback.call(this, dataURL);
      canvas = null; 
    };
    img.src = url;
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

/*1.炸药

2.雷管

3.导爆管

4.导爆索*/
/* let a = CryptoJS.AES.encrypt("11",key)
   let b = CryptoJS.AES.decrypt(a, key)
   console.log(b.toString(CryptoJS.enc.Utf8))

let b = CryptoJS.enc.Utf8.parse("11");
console.log(CryptoJS.enc.Base64.stringify(b))
let c = CryptoJS.enc.Base64.parse(CryptoJS.enc.Base64.stringify(b));
/console.log(c.toString(CryptoJS.enc.Utf8))
{
	address: "123",
	companyId: "4",
	homeAddress: "123123",
	id: "08545ec24f124133838cd0baa5e98b73",
	inputMan: "98800377074d463dbe1524d273a67fba",
	licenceNumber: "123",
	mobilePhone: "63660473",
	name: "阿凡达",
	phone: "13454752770",
	staffDocumentOssCode: "5424766929144039a94de4f43fb38c8d.jpg",
	staffId: "12312312312",
	staffIdPhotoFrontOssCode: "5424766929144039a94de4f43fb38c8d.jpg",
	staffIdPhotoReverseOssCode: "207c76244eac4784b2f18245b02d8f26.jpg",
	staffLevel: 3,
	staffPhotoOssCode: "5424766929144039a94de4f43fb38c8d.jpg",
	staffType: 4,
	staffTypeFlag: 4
}

*/

