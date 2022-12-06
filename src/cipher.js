const cipher = {
  //..
  encode (box1, shift) { 
    let result = "", code;
    for (let i=0; i<box1.length;i++){
      if (box1.charCodeAt(i)>=65 && box1.charCodeAt(i)<=90){
        code = (((box1.charCodeAt(i)-65)+shift)%26)+65;
      }
      else if (box1.charCodeAt(i) >= 33 && box1.charCodeAt(i) <= 66) {
        code = (((box1.charCodeAt(i) + 33) - shift) % 33) + 33; 
      }
      else if (box1.charCodeAt(i)===32){
        code = 32;
      }
      result+=String.fromCharCode(code);
    }
    return result;
  },

  decode (box2, shift2) {
    let result2 = "", code2;
    for (let i=0; i<box2.length;i++){
      if(box2.charCodeAt(i)>=65 && box2.charCodeAt(i)<=90){
        code2 = (((box2.charCodeAt(i)+65)-shift2)%26)+65;
      }
      else if (box2.charCodeAt(i) >= 33 && box2.charCodeAt(i) <= 66) {
        code2 = (((box2.charCodeAt(i) + 33) + shift2) % 33) + 33; 
      }
      else if (box2.charCodeAt(i)===32){
        code2 = 32;
      }
      result2+=String.fromCharCode(code2);
    }
    return result2; }};
  
export default cipher;
