function reverse(str){
    let returnString = "";
    function sliceString(str){
        if (str.length === 0){
            return;
        }
        returnString += str.charAt(str.length - 1);
        // console.log(str.charAt(str.length - 1));
        sliceString(str.substring(0, str.length - 1));
    }
    sliceString(str);
    return returnString;
  }
  
console.log(reverse('awesome')) // 'emosewa'
//  reverse('rithmschool') // 'loohcsmhtir'