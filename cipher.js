const cipher = {
  //..
  encode (shift, box1) { 
    let result = "", code;
    if (typeof shift !== "number" || typeof box1 !== "string") {
      throw TypeError();
    }
    for (let i=0; i<box1.length;i++){
      if (box1.charCodeAt(i)>=65 && box1.charCodeAt(i)<=90){
        code = (((box1.charCodeAt(i)-65)+shift)%26)+65;
      }
      else if (box1.charCodeAt(i)===32){
        code = 32;
      }
      result+=String.fromCharCode(code);
    }
    return result;
  },

  decode(shift2, box2) {
    let result = "", code;
    if (typeof shift2 !== "number" || typeof box2 !== "string") {
      throw TypeError();
    }
    for (let i = 0; i < box2.length; i++) {
      if (box2.charCodeAt(i) >= 65 && box2.charCodeAt(i) <= 90) {
        code = (((box2.charCodeAt(i) + 65) - shift2) % 26) + 65;
      }  
      else if (box2.charCodeAt(i) === 32) {
        code = 32;
      }
      result += String.fromCharCode(code);
    }
    return result;
  },
};

export default cipher;
